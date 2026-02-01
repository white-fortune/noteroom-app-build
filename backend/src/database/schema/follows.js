"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const followsSchema = new mongoose_1.Schema({
    follower: {
        type: mongoose_1.Types.ObjectId,
        ref: 'users',
        required: true
    },
    following: {
        type: mongoose_1.Types.ObjectId,
        ref: 'users',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
followsSchema.index({ follower: 1, following: 1 }, { unique: true });
const followsModel = (0, mongoose_1.model)('follows', followsSchema);
exports.default = followsModel;
