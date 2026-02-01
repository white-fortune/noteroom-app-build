"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_1 = __importDefault(require("../../database/schema/posts"));
class PostsService {
    static async createPost(postType, post) {
        try {
            if (postType === "media") {
                throw new Error("not yet implemented");
            }
            else if (postType === "poll") {
                throw new Error("not yet implemented");
            }
            else {
                const doc = await posts_1.default.create(post);
                const createdPost = await doc.populate("author");
                return { ok: true, post: createdPost };
            }
        }
        catch (error) {
            console.error("Error creating post:", error);
            return { ok: false, error: error instanceof Error ? error.message : String(error) };
        }
    }
    static async getPost(postID) {
        try {
            const post = await posts_1.default.findOne({ postID }).populate("author");
            return { ok: true, post };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async getPosts(filters) {
        try {
            const posts = await posts_1.default.aggregate([
                { $match: filters || {} },
                { $lookup: {
                        from: "users",
                        localField: "author",
                        foreignField: "_id",
                        as: "author"
                    } },
                { $unwind: {
                        path: "$author",
                    } }
            ]);
            return { ok: true, posts };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async incrementViewCount(postID) {
        try {
            await posts_1.default.updateOne({ postID }, { $inc: { viewCount: 1 } });
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async incrementShareCount(postID) {
        try {
            await posts_1.default.updateOne({ postID }, { $inc: { shareCount: 1 } });
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
}
exports.default = PostsService;
