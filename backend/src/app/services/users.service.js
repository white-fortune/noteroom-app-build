"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../../database/schema/users"));
class UsersService {
    static async getAuthenticatedUser(authUser) {
        try {
            const user = await users_1.default.findOne({ ...authUser });
            if (!user) {
                return { ok: true, validAuth: false };
            }
            const userObject = { ...user.toObject() };
            return { ok: true, validAuth: true, user: userObject };
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
}
exports.default = UsersService;
