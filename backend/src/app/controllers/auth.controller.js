"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../../database/schema/users"));
const users_service_1 = __importDefault(require("../services/users.service"));
const jwt_service_1 = __importDefault(require("../services/jwt.service"));
const users_2 = __importDefault(require("../../database/schema/users"));
const auth_service_1 = __importDefault(require("../services/auth.service"));
const utils_1 = require("../utils");
class AuthController {
    static async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const response = await users_service_1.default.getAuthenticatedUser({ email, password });
            if (!response.ok) {
                return res.json({ ok: false, message: 'Unexpected Server Error' });
            }
            if (!response.validAuth) {
                return res.json({ ok: true, validAuth: false });
            }
            const { user } = response;
            const jwtResponse = jwt_service_1.default.createJWTToken({
                email,
                name: user.username,
                username: user.username,
                _id: user._id
            });
            if (!jwtResponse.ok) {
                return res.json({ ok: false, message: "Couldn't create authentication token. Try again a bit later" });
            }
            const token = jwtResponse.token;
            res.json({ ok: true, validAuth: true, token, user });
        }
        catch (error) {
            res.json({ ok: false, message: 'Unexpected Server Error' });
        }
    }
    static async signup(req, res, next) {
        try {
            const { name, email, password } = req.body;
            const username = (0, utils_1.generateUsernameFromEmail)(email);
            const user = await users_1.default.create({ username, email, name, password });
            const jwtUser = {
                name,
                email,
                username,
                _id: user._id
            };
            const jwtResponse = jwt_service_1.default.createJWTToken(jwtUser);
            if (!jwtResponse.ok) {
                return res.json({ ok: false, message: "Couldn't create authentication token. Try again a bit later" });
            }
            const token = jwtResponse.token;
            res.json({ ok: true, token, user });
        }
        catch (error) {
            if (error.code === 11000) {
                const duplicate_key = Object.keys(error.keyValue)[0];
                if (duplicate_key === "email") {
                    res.json({ ok: false, message: 'An account associated with the email already exists' });
                }
            }
            else {
                res.json({ ok: false, message: 'Unexpected Server Error' });
            }
        }
    }
    static async me(req, res, next) {
        try {
            const { token } = req.body;
            const jwtResponse = await jwt_service_1.default.verifyToken(token);
            if (!jwtResponse.ok) {
                return res.json({ ok: false, message: "Couldn't create authentication token. Try again a bit later" });
            }
            const validAuth = jwtResponse.validAuth;
            if (!validAuth) {
                return res.json({ ok: true, validAuth: false });
            }
            const jwtUser = jwtResponse.jwtUser;
            const user = await users_2.default.findOne({ username: jwtUser.username });
            if (!user) {
                return res.json({ ok: true, validAuth: false });
            }
            res.json({ ok: true, validAuth: true, user: { ...user.toObject() } });
        }
        catch (error) {
            console.error(error);
            res.json({ ok: false, message: "Unexpected Server Error" });
        }
    }
    static async googleAuth(req, res, next) {
        try {
            const { credential } = req.body;
            const response = await auth_service_1.default.verifyGoogleCredential(credential);
            if (!response.ok) {
                return res.json({ ok: false, message: "Couldn't verify google signin" });
            }
            const { tokenVerified } = response;
            if (!tokenVerified) {
                return res.json({ ok: false, message: "Couldn't verify google signin" });
            }
            const { email, name, picture } = response.payload;
            const username = (0, utils_1.generateUsernameFromEmail)(email);
            let user = await users_1.default.findOne({ email: email });
            if (!user) {
                user = await users_1.default.create({ username, email, name, authProvider: "google", profileImageUrl: picture });
            }
            const authProvider = user.authProvider;
            if (!authProvider) {
                return res.json({ ok: false, message: "An account with this email already exists using a different sign-in method." });
            }
            const jwtUser = {
                name: user.name,
                email: user.email,
                username: user.username,
                _id: user._id
            };
            const jwtResponse = jwt_service_1.default.createJWTToken(jwtUser);
            if (!jwtResponse.ok) {
                return res.json({ ok: false, message: "Couldn't create authentication token. Try again a bit later" });
            }
            const token = jwtResponse.token;
            res.json({ ok: true, token, user });
        }
        catch (error) {
            res.json({ ok: false, message: 'Unexpected Server Error' });
        }
    }
}
exports.default = AuthController;
