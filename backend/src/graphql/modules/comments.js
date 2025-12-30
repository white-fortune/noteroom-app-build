"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentType = void 0;
const builder_1 = require("../schema/builder");
const user_1 = require("./user");
const nanoid_1 = require("nanoid");
const comments_service_1 = __importDefault(require("../../app/services/comments.service"));
exports.CommentType = builder_1.builder.objectRef("Comment");
exports.CommentType.implement({
    fields: (t) => ({
        postID: t.exposeString("postID"),
        threadID: t.exposeString("threadID"),
        commentID: t.exposeString("commentID"),
        content: t.exposeString("content"),
        commenter: t.expose("commenter", { type: user_1.UserType }),
        parentThreadID: t.exposeString("parentThreadID", { nullable: true }),
        replyCount: t.exposeInt("replyCount"),
    })
});
builder_1.builder.mutationType({
    fields: (t) => ({
        comment: t.field({
            type: exports.CommentType,
            nullable: true,
            args: {
                postID: t.arg.string({ required: true }),
                parentThreadID: t.arg.string({ required: false }),
                content: t.arg.string({ required: true }),
            },
            resolve: async (_parent, args, ctx) => {
                try {
                    const authUser = ctx.req.authUser;
                    const threadID = (0, nanoid_1.nanoid)(50);
                    const commentID = (0, nanoid_1.nanoid)(30);
                    const response = await comments_service_1.default.addComment({
                        postID: args.postID,
                        threadID,
                        commentID,
                        parentThreadID: args.parentThreadID || null,
                        content: args.content,
                        commenter: authUser._id,
                    });
                    if (!response.ok)
                        return null;
                    const comment = response.comment;
                    return comment;
                }
                catch (error) {
                    console.error(error);
                    return null;
                }
            }
        })
    })
});
builder_1.builder.queryType({
    fields: (t) => ({
        comments: t.field({
            type: [exports.CommentType],
            nullable: true,
            args: {
                postID: t.arg.string({ required: true }),
                parentThreadID: t.arg.string({ required: false }),
                threadID: t.arg.string({ required: false })
            },
            resolve: async (_parent, args, ctx) => {
                try {
                    const response = await comments_service_1.default.getComment(args.postID, args);
                    if (!response.ok)
                        return null;
                    const comments = response.comments;
                    return comments;
                }
                catch (error) {
                    return null;
                }
            }
        })
    })
});
