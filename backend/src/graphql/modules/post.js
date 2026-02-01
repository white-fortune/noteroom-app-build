"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
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
const interactions_1 = require("../../database/schema/interactions");
exports.BasePostInterface = builder_1.builder.interfaceRef("BasePost");
exports.BasePostInterface.implement({
    fields: (t) => ({
        postID: t.exposeString("postID"),
        title: t.exposeString("title"),
        description: t.exposeString("description"),
        richContent: t.field({
            type: "JSON",
            nullable: true,
            resolve: (parent) => parent.richContent || null
        }),
        postType: t.exposeString("postType"),
        tags: t.exposeStringList("tags"),
        titleSlug: t.exposeString("titleSlug"),
        author: t.expose("author", { type: user_1.UserType }),
        media: t.exposeStringList("media"),
        replyCount: t.exposeInt("replyCount"),
        reactCount: t.exposeInt("reactCount"),
        viewCount: t.exposeInt("viewCount"),
        shareCount: t.exposeInt("shareCount")
    })
});
exports.PostType = builder_1.builder.objectRef("Post");
exports.PostType.implement({
    interfaces: [exports.BasePostInterface]
});
const PollOptionCountType = builder_1.builder.objectRef("PollOptionCount").implement({
    fields: (t) => ({
        optionID: t.exposeString("optionID"),
        count: t.exposeInt("count")
    })
});
const PollResultType = builder_1.builder.objectRef("PollResult").implement({
    fields: (t) => ({
        blockID: t.exposeString("blockID"),
        results: t.expose("results", { type: [PollOptionCountType] })
    })
});
const ViewerPollVoteType = builder_1.builder.objectRef("ViewerPollVote").implement({
    fields: (t) => ({
        blockID: t.exposeString("blockID"),
        optionID: t.exposeString("optionID")
    })
});
exports.PostWithViewerUserType = builder_1.builder.objectRef("PostWithViewerUser");
exports.PostWithViewerUserType.implement({
    interfaces: [exports.BasePostInterface],
    fields: (t) => ({
        postOwner: t.exposeBoolean("postOwner"),
        reacted: t.boolean({
            resolve: async (parent, _args, ctx) => {
                try {
                    const postID = parent.postID;
                    const authUser = ctx.req.authUser;
                    const interaction = await interactions_1.postInteractionModel.findOne({ user: authUser._id, postID });
                    return interaction ? true : false;
                }
                catch (error) {
                    return false;
                }
            }
        }),
        pollResults: t.field({
            type: [PollResultType],
            resolve: async (parent) => {
                try {
                    const postID = parent.postID;
                    const { pollInteractionModel } = await Promise.resolve().then(() => __importStar(require("../../database/schema/interactions")));
                    const aggregation = await pollInteractionModel.aggregate([
                        { $match: { postID } },
                        {
                            $group: {
                                _id: {
                                    blockID: { $arrayElemAt: [{ $split: ["$interactionID", "-"] }, 1] },
                                    optionID: "$optionID"
                                },
                                count: { $sum: 1 }
                            }
                        },
                        {
                            $group: {
                                _id: "$_id.blockID",
                                results: {
                                    $push: {
                                        optionID: "$_id.optionID",
                                        count: "$count"
                                    }
                                }
                            }
                        }
                    ]);
                    return aggregation.map(a => ({
                        blockID: a._id,
                        results: a.results
                    }));
                }
                catch (error) {
                    return [];
                }
            }
        }),
        viewerPollVotes: t.field({
            type: [ViewerPollVoteType],
            resolve: async (parent, _args, ctx) => {
                try {
                    const postID = parent.postID;
                    const authUser = ctx.req.authUser;
                    const { pollInteractionModel } = await Promise.resolve().then(() => __importStar(require("../../database/schema/interactions")));
                    const votes = await pollInteractionModel.find({ user: authUser._id, postID });
                    return votes.map(v => ({
                        blockID: v.interactionID.split("-")[1],
                        optionID: v.optionID
                    }));
                }
                catch (error) {
                    return [];
                }
            }
        })
    })
});
builder_1.builder.mutationType({
    fields: (t) => ({
        post: t.field({
            type: exports.PostType,
            args: {
                title: t.arg.string({ required: true }),
                description: t.arg.string({ required: true }),
                richContent: t.arg({ type: 'JSON' }),
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
                        richContent: args.richContent,
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
        }),
        votePoll: t.field({
            type: builder_1.builder.objectRef("VotePollResponse").implement({
                fields: (t) => ({
                    ok: t.exposeBoolean("ok"),
                    optionID: t.exposeString("optionID", { nullable: true })
                })
            }),
            args: {
                postID: t.arg.string({ required: true }),
                blockID: t.arg.string({ required: true }),
                optionID: t.arg.string({ required: true })
            },
            resolve: async (__parent, args, ctx) => {
                try {
                    const authUser = ctx.req.authUser;
                    const { pollInteractionModel } = await Promise.resolve().then(() => __importStar(require("../../database/schema/interactions")));
                    const existingVote = await pollInteractionModel.findOne({
                        user: authUser._id,
                        postID: args.postID,
                        interactionID: { $regex: new RegExp(`^poll-${args.blockID}-`) }
                    });
                    if (existingVote) {
                        existingVote.optionID = args.optionID;
                        existingVote.interactionID = `poll-${args.blockID}-${authUser._id}`;
                        await existingVote.save();
                        return { ok: true, optionID: args.optionID };
                    }
                    await pollInteractionModel.create({
                        user: authUser._id,
                        interactionID: `poll-${args.blockID}-${authUser._id}`,
                        interactionType: "poll",
                        postID: args.postID,
                        optionID: args.optionID
                    });
                    return { ok: true, optionID: args.optionID };
                }
                catch (error) {
                    console.error(error);
                    return { ok: false, optionID: null };
                }
            }
        }),
        incrementViewCount: t.field({
            type: builder_1.builder.objectRef("IncrementViewCountResponse").implement({
                fields: (t) => ({ ok: t.exposeBoolean("ok") })
            }),
            args: { postID: t.arg.string({ required: true }) },
            resolve: async (__parent, args) => {
                return await posts_service_1.default.incrementViewCount(args.postID);
            }
        }),
        incrementShareCount: t.field({
            type: builder_1.builder.objectRef("IncrementShareCountResponse").implement({
                fields: (t) => ({ ok: t.exposeBoolean("ok") })
            }),
            args: { postID: t.arg.string({ required: true }) },
            resolve: async (__parent, args) => {
                return await posts_service_1.default.incrementShareCount(args.postID);
            }
        })
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
                    const viewerUsername = ctx.req.authUser.username;
                    const modifiedPost = Object.assign(post, { postOwner: viewerUsername === post.author.username });
                    return modifiedPost;
                }
                catch (error) {
                    return null;
                }
            }
        }),
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
                        const viewerUsername = ctx.req.authUser.username;
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
