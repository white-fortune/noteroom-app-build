"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MutationInteractionType = void 0;
const interactions_service_1 = __importDefault(require("../../app/services/interactions.service"));
const builder_1 = require("../schema/builder");
const comments_1 = __importDefault(require("../../database/schema/comments"));
const nanoid_1 = require("nanoid");
const posts_1 = __importDefault(require("../../database/schema/posts"));
exports.MutationInteractionType = builder_1.builder.objectRef("MutaionInteractionType");
exports.MutationInteractionType.implement({
    fields: (t) => ({
        interactionID: t.exposeString("interactionID")
    })
});
builder_1.builder.mutationType({
    fields: (t) => ({
        addReactToComment: t.field({
            type: exports.MutationInteractionType,
            nullable: true,
            args: {
                commentID: t.arg.string({ required: true }),
            },
            resolve: async (_parent, args, ctx) => {
                try {
                    const commentDocumentID = await comments_1.default.findOne({ commentID: args.commentID }, { _id: 1 });
                    if (!commentDocumentID)
                        return null;
                    const authUser = ctx.req.authUser;
                    const interactionID = (0, nanoid_1.nanoid)();
                    const response = await interactions_service_1.default.addReactToComment({
                        user: authUser._id,
                        interactionType: "comment",
                        comment: commentDocumentID._id.toString(),
                        interactionID,
                        commentID: args.commentID
                    });
                    return response.ok ? { interactionID: response.interactionID } : null;
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
        removeCommentInteraction: t.field({
            type: exports.MutationInteractionType,
            nullable: true,
            args: {
                commentID: t.arg.string({ required: true })
            },
            resolve: async (_parent, args, ctx) => {
                try {
                    const authUser = ctx.req.authUser;
                    const response = await interactions_service_1.default.removeCommentInteraction(args.commentID, authUser._id);
                    if (!response.ok)
                        return null;
                    const deleted = response.deleted;
                    if (!deleted)
                        return null;
                    const deletedInteractionID = response.interactionID;
                    return { interactionID: deletedInteractionID };
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
        addReactToPost: t.field({
            type: exports.MutationInteractionType,
            nullable: true,
            args: {
                postID: t.arg.string({ required: true }),
            },
            resolve: async (_parent, args, ctx) => {
                try {
                    const postDocID = await posts_1.default.findOne({ postID: args.postID }, { _id: 1 });
                    if (!postDocID)
                        return null;
                    const authUser = ctx.req.authUser;
                    const interactionID = (0, nanoid_1.nanoid)();
                    const response = await interactions_service_1.default.addReactToPost({
                        user: authUser._id,
                        interactionType: "post",
                        interactionID,
                        postID: args.postID,
                        post: postDocID._id.toString()
                    });
                    return response.ok ? { interactionID: response.interactionID } : null;
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
        removePostInteraction: t.field({
            type: exports.MutationInteractionType,
            nullable: true,
            args: {
                postID: t.arg.string({ required: true })
            },
            resolve: async (_parent, args, ctx) => {
                try {
                    const authUser = ctx.req.authUser;
                    const response = await interactions_service_1.default.removePostInteraction(args.postID, authUser._id);
                    if (!response.ok)
                        return null;
                    const deleted = response.deleted;
                    if (!deleted)
                        return null;
                    const deletedInteractionID = response.interactionID;
                    return { interactionID: deletedInteractionID };
                }
                catch (error) {
                    return null;
                }
            }
        })
    })
});
