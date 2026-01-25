"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usersSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: false
    },
    about: {
        type: String,
        required: false
    },
    profileImageUrl: {
        type: String,
        required: false,
    },
    coverImageUrl: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    authProvider: {
        type: String,
        default: null
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    otp: {
        type: String,
        required: false
    },
    otpExpiry: {
        type: Date,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});
usersSchema.index({ email: 1 }, { unique: true });
usersSchema.pre('save', function () {
    if (!this.isNew)
        return;
    this.profileImageUrl = this.profileImageUrl || `https://placehold.co/400x600?text=${this.username.toUpperCase()[0]}`;
    this.coverImageUrl = `https://placehold.co/400x600?text=Cover Image`;
    if (this.authProvider) {
        this.isVerified = true;
    }
});
const usersModel = (0, mongoose_1.model)('users', usersSchema);
exports.default = usersModel;
