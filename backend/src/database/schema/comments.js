"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const baseCommentSchema = new mongoose_1.Schema({
    postID: {
        type: String,
        required: true
    },
    threadID: {
        type: String,
        required: true,
    },
    parentThreadID: {
        type: String,
        default: null
    },
    commentID: {
        type: String,
        required: true
    },
    commenter: {
        type: mongoose_1.Types.ObjectId,
        ref: "users",
        required: true
    },
    content: {
        type: String
    },
    replyCount: {
        type: Number,
        default: 0
    },
    reactCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
const baseCommentsModel = (0, mongoose_1.model)('comments', baseCommentSchema);
exports.default = baseCommentsModel;
