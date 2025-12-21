"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../../utils");
const jwtSecretToken = (0, utils_1.config)("services.jwt.secret");
class JWTService {
    static createJWTToken(user) {
        try {
            const token = jsonwebtoken_1.default.sign(user, jwtSecretToken);
            return { ok: true, token };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
    static async verifyToken(token) {
        try {
            const jwtPromise = new Promise(resolve => {
                jsonwebtoken_1.default.verify(token, jwtSecretToken, (_error, jwtUser) => {
                    resolve(jwtUser);
                });
            });
            const jwtUser = await jwtPromise;
            if (!jwtUser) {
                return { ok: true, validAuth: false };
            }
            return { ok: true, validAuth: true, jwtUser };
        }
        catch (error) {
            console.error(error);
            return { ok: false, error };
        }
    }
}
exports.default = JWTService;
