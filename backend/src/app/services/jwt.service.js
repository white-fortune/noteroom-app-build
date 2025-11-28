"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJWTToken = createJWTToken;
exports.verifyToken = verifyToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const utils_1 = require("../../utils");
const jwtSecretToken = (0, utils_1.config)("services.jwt.secret");
function createJWTToken(user) {
    return jsonwebtoken_1.default.sign(user, jwtSecretToken);
}
function verifyToken(token) {
    try {
        const data = jsonwebtoken_1.default.verify(token, jwtSecretToken);
        return data;
    }
    catch (error) {
        return null;
    }
}
