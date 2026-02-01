"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../../database/schema/users"));
const follows_1 = __importDefault(require("../../database/schema/follows"));
const mongoose_1 = require("mongoose");
class UsersService {
    static async getAuthenticatedUser(authUser) {
        try {
            const user = await users_1.default.findOne({ ...authUser });
            if (!user) {
                return { ok: true, code: "NOT_VALID_AUTH" };
            }
            if (!user.isVerified) {
                return { ok: true, code: "EMAIL_NOT_VERIFIED" };
            }
            const userObject = { ...user.toObject() };
            return { ok: true, user: userObject };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async getUserByUsername(username) {
        try {
            const user = await users_1.default.findOne({ username });
            return { ok: true, user: user?.toObject() };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async updateUserByUsername(username, data) {
        try {
            const user = await users_1.default.findOneAndUpdate({ username }, { ...data }, { new: true, runValidators: true });
            return { ok: true, user: user?.toObject() };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async searchUsers(query, limit = 10) {
        try {
            const users = await users_1.default.find({
                $or: [
                    { username: { $regex: query, $options: "i" } },
                    { name: { $regex: query, $options: "i" } },
                ],
            })
                .limit(limit)
                .select("-password");
            return { ok: true, users: users.map((u) => u.toObject()) };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async followUser(followerID, followingID) {
        try {
            if (followerID === followingID) {
                return { ok: true, code: "CANNOT_FOLLOW_SELF" };
            }
            await follows_1.default.create({
                follower: new mongoose_1.Types.ObjectId(followerID),
                following: new mongoose_1.Types.ObjectId(followingID),
            });
            return { ok: true };
        }
        catch (error) {
            if (error.code === 11000) {
                return { ok: true, code: "ALREADY_FOLLOWING" };
            }
            return { ok: false, error };
        }
    }
    static async unfollowUser(followerID, followingID) {
        try {
            await follows_1.default.deleteOne({
                follower: new mongoose_1.Types.ObjectId(followerID),
                following: new mongoose_1.Types.ObjectId(followingID),
            });
            return { ok: true };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async isFollowing(followerID, followingID) {
        try {
            const follow = await follows_1.default.findOne({
                follower: new mongoose_1.Types.ObjectId(followerID),
                following: new mongoose_1.Types.ObjectId(followingID),
            });
            return !!follow;
        }
        catch (error) {
            return false;
        }
    }
    static async getFollowStats(userID) {
        try {
            const [followersCount, followingCount] = await Promise.all([
                follows_1.default.countDocuments({ following: userID }),
                follows_1.default.countDocuments({ follower: userID }),
            ]);
            return { followersCount, followingCount };
        }
        catch (error) {
            return { followersCount: 0, followingCount: 0 };
        }
    }
}
exports.default = UsersService;
