"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postInteractionModel = exports.commentInteractionModel = exports.baseInteractionModel = void 0;
const mongoose_1 = require("mongoose");
const baseInteractionOptions = {
    discriminatorKey: 'interactionType',
    collection: 'interactions'
};
const baseInteractionSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Types.ObjectId,
        ref: "users",
        required: true
    },
    interactionID: {
        type: String,
        required: true,
        unique: true
    },
    interactionType: {
        type: String,
        enum: ["comment", "post"],
        required: true
    }
}, baseInteractionOptions);
const baseInteractionModel = (0, mongoose_1.model)("interactions", baseInteractionSchema);
exports.baseInteractionModel = baseInteractionModel;
const commentInteractionSchema = new mongoose_1.Schema({
    comment: {
        type: mongoose_1.Types.ObjectId,
        ref: "comments",
        required: true
    },
    commentID: {
        type: String,
        required: true
    }
});
const commentInteractionModel = baseInteractionModel.discriminator('comment', commentInteractionSchema);
exports.commentInteractionModel = commentInteractionModel;
const postInteractionSchema = new mongoose_1.Schema({
    post: {
        type: mongoose_1.Types.ObjectId,
        ref: "posts",
        required: true
    },
    postID: {
        type: String,
        required: true
    }
});
const postInteractionModel = baseInteractionModel.discriminator('post', postInteractionSchema);
exports.postInteractionModel = postInteractionModel;
