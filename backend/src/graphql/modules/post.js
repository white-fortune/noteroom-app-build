"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostWithViewerUserType = exports.PostType = exports.BasePostInterface = void 0;
const builder_1 = require("../schema/builder");
const posts_service_1 = __importDefault(require("../../app/services/posts.service"));
const slugify_1 = __importDefault(require("slugify"));
const nanoid_1 = require("nanoid");
const user_1 = require("./user");
exports.BasePostInterface = builder_1.builder.interfaceRef("BasePost");
exports.BasePostInterface.implement({
    fields: (t) => ({
        postID: t.exposeString("postID"),
        title: t.exposeString("title"),
        description: t.exposeString("description"),
        postType: t.exposeString("postType"),
        tags: t.exposeStringList("tags"),
        titleSlug: t.exposeString("titleSlug"),
        author: t.expose("author", { type: user_1.UserType }),
        media: t.exposeStringList("media")
    })
});
exports.PostType = builder_1.builder.objectRef("Post");
exports.PostType.implement({
    interfaces: [exports.BasePostInterface]
});
builder_1.builder.mutationType({
    fields: (t) => ({
        post: t.field({
            type: exports.PostType,
            args: {
                title: t.arg.string({ required: true }),
                description: t.arg.string({ required: true }),
                tags: t.arg.stringList({ required: true }),
                postType: t.arg.string()
            },
            resolve: async (__parent, args, ctx) => {
                try {
                    const user = ctx.req.authUser;
                    const titleSlug = (0, slugify_1.default)(args.title, { lower: true, strict: true });
                    const postID = (0, nanoid_1.nanoid)();
                    const response = await posts_service_1.default.createPost(null, {
                        postID,
                        titleSlug,
                        author: user._id,
                        title: args.title,
                        description: args.description,
                        postType: args.postType,
                        tags: args.tags
                    });
                    return response.ok ? response.post : null;
                }
                catch (error) {
                    console.error(error);
                    return null;
                }
            }
        })
    })
});
exports.PostWithViewerUserType = builder_1.builder.objectRef("PostWithViewerUser");
exports.PostWithViewerUserType.implement({
    interfaces: [exports.BasePostInterface],
    fields: (t) => ({
        postOwner: t.exposeBoolean("postOwner")
    })
});
builder_1.builder.queryType({
    fields: (t) => ({
        post: t.field({
            type: exports.PostWithViewerUserType,
            nullable: true,
            args: {
                postID: t.arg.string({ required: true })
            },
            resolve: async (__parent, args, ctx) => {
                try {
                    const response = await posts_service_1.default.getPost(args.postID);
                    if (!response.ok)
                        return null;
                    const post = response.post;
                    if (!post)
                        return null;
                    const viewerUsername = "rafi_rahman_pro";
                    const modifiedPost = Object.assign(post, { postOwner: viewerUsername === post.author.username });
                    return modifiedPost;
                }
                catch (error) {
                    return null;
                }
            }
        })
    })
});
builder_1.builder.queryType({
    fields: (t) => ({
        posts: t.field({
            type: [exports.PostWithViewerUserType],
            nullable: true,
            resolve: async (__parent, arg, ctx) => {
                try {
                    const response = await posts_service_1.default.getPosts();
                    if (!response.ok)
                        return null;
                    const posts = response.posts;
                    if (!posts)
                        return null;
                    const modifiedPosts = posts.map((post) => {
                        const viewerUsername = "rafi_rahman_pro";
                        const authorUsername = post.author.username;
                        return Object.assign(post, { postOwner: viewerUsername === authorUsername });
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
