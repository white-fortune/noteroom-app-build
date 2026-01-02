"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const interactions_1 = require("../../database/schema/interactions");
const comments_1 = __importDefault(require("../../database/schema/comments"));
const posts_1 = __importDefault(require("../../database/schema/posts"));
class InteractionsService {
    static async addReactToComment(interaction) {
        try {
            const existingInteraction = await interactions_1.commentInteractionModel.findOne({ user: interaction.user, comment: interaction.comment });
            if (existingInteraction)
                return { ok: true, interactionID: existingInteraction.interactionID };
            const createdInteraction = await interactions_1.commentInteractionModel.create(interaction);
            await comments_1.default.updateOne({ _id: interaction.comment }, { $inc: { reactCount: 1 } });
            return { ok: true, interactionID: createdInteraction.interactionID };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async removeCommentInteraction(commentID, actionUserID) {
        try {
            const deletedInteraction = await interactions_1.commentInteractionModel.findOneAndDelete({ commentID, user: actionUserID });
            if (!deletedInteraction)
                return { ok: true, deleted: false };
            await comments_1.default.updateOne({ commentID }, { $inc: { reactCount: -1 } });
            return { ok: true, deleted: true, interactionID: deletedInteraction.interactionID };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async addReactToPost(interaction) {
        try {
            const existingInteraction = await interactions_1.postInteractionModel.findOne({ user: interaction.user, post: interaction.post });
            if (existingInteraction)
                return { ok: true, interactionID: existingInteraction.interactionID };
            const createdInteraction = await interactions_1.postInteractionModel.create(interaction);
            await posts_1.default.updateOne({ _id: interaction.post }, { $inc: { reactCount: 1 } });
            return { ok: true, interactionID: createdInteraction.interactionID };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async removePostInteraction(postID, actionUserID) {
        try {
            const deletedInteraction = await interactions_1.postInteractionModel.findOneAndDelete({ postID, user: actionUserID });
            if (!deletedInteraction)
                return { ok: true, deleted: false };
            await posts_1.default.updateOne({ postID }, { $inc: { reactCount: -1 } });
            return { ok: true, deleted: true, interactionID: deletedInteraction.interactionID };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
}
exports.default = InteractionsService;
