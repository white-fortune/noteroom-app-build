"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comments_1 = __importDefault(require("../../database/schema/comments"));
const posts_1 = __importDefault(require("../../database/schema/posts"));
class CommentsService {
    static async addComment(commentData) {
        try {
            const comment = await (await comments_1.default.create(commentData)).populate("commenter");
            if (commentData.parentThreadID) {
                await comments_1.default.updateOne({ postID: commentData.postID, threadID: commentData.parentThreadID }, { $inc: { replyCount: 1 } });
            }
            await posts_1.default.updateOne({ postID: commentData.postID }, { $inc: { replyCount: 1 } });
            return { ok: true, comment: comment.toObject() };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async getComment(postID, filters) {
        try {
            const comments = await comments_1.default.find({ postID, ...filters }).populate("commenter");
            return { ok: true, comments };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
}
exports.default = CommentsService;
