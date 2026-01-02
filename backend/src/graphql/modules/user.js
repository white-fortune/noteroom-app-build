"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserWithOwnershipType = exports.UserType = exports.BaseUserInterface = void 0;
const builder_1 = require("../schema/builder");
const users_service_1 = __importDefault(require("../../app/services/users.service"));
const post_1 = require("./post");
const users_1 = __importDefault(require("../../database/schema/users"));
const posts_service_1 = __importDefault(require("../../app/services/posts.service"));
exports.BaseUserInterface = builder_1.builder.interfaceRef("BaseUser");
exports.BaseUserInterface.implement({
    fields: (t) => ({
        username: t.exposeString("username"),
        email: t.exposeString("email"),
        name: t.exposeString("name"),
        bio: t.exposeString("bio"),
        about: t.exposeString("about"),
        profileImageUrl: t.exposeString("profileImageUrl"),
        coverImageUrl: t.exposeString("coverImageUrl"),
        posts: t.field({
            type: [post_1.PostWithViewerUserType],
            resolve: async (parent, __args, ctx) => {
                try {
                    const authUser = ctx.req.authUser;
                    const profileUsername = parent.username;
                    const profileUserID = await users_1.default.findOne({ username: profileUsername }, { _id: 1 });
                    if (!profileUserID?._id)
                        return null;
                    const response = await posts_service_1.default.getPosts({ author: profileUserID._id });
                    if (!response.ok)
                        return null;
                    const posts = response.posts;
                    if (!posts)
                        return null;
                    const modifiedPosts = posts.map((post) => {
                        const viewerUsername = authUser.username;
                        return Object.assign(post, { postOwner: viewerUsername === profileUsername });
                    });
                    return modifiedPosts;
                }
                catch (error) {
                    return null;
                }
            }
        })
    })
});
exports.UserType = builder_1.builder.objectRef("User");
exports.UserType.implement({
    interfaces: [exports.BaseUserInterface]
});
exports.UserWithOwnershipType = builder_1.builder.objectRef("UserWithOwnership");
exports.UserWithOwnershipType.implement({
    interfaces: [exports.BaseUserInterface],
    fields: (t) => ({
        ownerOfProfile: t.exposeBoolean("ownerOfProfile")
    })
});
builder_1.builder.queryType({
    fields: (t) => ({
        user: t.field({
            type: exports.UserWithOwnershipType,
            nullable: true,
            args: {
                username: t.arg.string({ required: true })
            },
            resolve: async (__parent, args, ctx) => {
                try {
                    const authUser = ctx.req.authUser;
                    const profileUsername = args.username;
                    const response = await users_service_1.default.getUserByUsername(profileUsername);
                    if (!response.ok)
                        return null;
                    const profileUser = response.user;
                    if (!profileUser)
                        return null;
                    const ownerOfProfile = authUser.username === profileUser.username;
                    const user = { ...profileUser, ownerOfProfile };
                    return user;
                }
                catch (error) {
                    return null;
                }
            }
        })
    })
});
builder_1.builder.mutationType({
    fields: (t) => ({
        user: t.field({
            type: exports.UserType,
            args: {
                name: t.arg.string(),
                bio: t.arg.string(),
                about: t.arg.string()
            },
            resolve: async (_parent, args, ctx) => {
                try {
                    const { username } = ctx.req.authUser;
                    const updatedUser = await users_service_1.default.updateUserByUsername(username, args);
                    return updatedUser.ok ? updatedUser.user : null;
                }
                catch (error) {
                    return null;
                }
            }
        })
    })
});
