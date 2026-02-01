"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaPostModel = void 0;
const mongoose_1 = require("mongoose");
const basePostOptions = {
    discriminatorKey: 'postType',
    collection: 'posts'
};
const basePostSchema = new mongoose_1.Schema({
    postID: {
        type: String,
        unique: true
    },
    author: {
        type: mongoose_1.Types.ObjectId,
        ref: "users",
        required: true
    },
    title: {
        type: String,
        required: true
    },
    titleSlug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: null
    },
    richContent: {
        type: mongoose_1.Schema.Types.Mixed,
        default: null
    },
    replyCount: {
        type: Number,
        default: 0
    },
    reactCount: {
        type: Number,
        default: 0
    },
    shareCount: {
        type: Number,
        default: 0
    },
    viewCount: {
        type: Number,
        default: 0
    },
    tags: {
        type: [String],
        default: []
    }
}, basePostOptions);
const basePostsModel = (0, mongoose_1.model)('posts', basePostSchema);
const mediaPostSchema = new mongoose_1.Schema({
    media: {
        type: [String],
        required: true
    }
});
exports.mediaPostModel = basePostsModel.discriminator('media', mediaPostSchema);
exports.default = basePostsModel;
