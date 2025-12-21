"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = __importDefault(require("../../database/schema/users"));
const users_service_1 = __importDefault(require("../services/users.service"));
const jwt_service_1 = __importDefault(require("../services/jwt.service"));
const users_2 = __importDefault(require("../../database/schema/users"));
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
            const base = email.split("@")[0].trim().toLowerCase().replace(/[*+~.()'"!:@]/g, "_");
            const suffix_number = Math.floor(1000 + Math.random() * 9000);
            const username = `${base}_${suffix_number}`;
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
}
exports.default = AuthController;
