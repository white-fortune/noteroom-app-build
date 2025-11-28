"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_service_1 = require("../services/jwt.service");
class AuthController {
    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            const token = (0, jwt_service_1.createJWTToken)({
                username: 'test-username',
                email
            });
            res.json({ ok: true, token });
        }
        catch (error) {
            res.json({ ok: false, message: 'Unexpected Server Error' });
        }
    }
    async signup(req, res, next) {
        try {
            const { name, email, password } = req.body;
            res.json({ ok: true });
        }
        catch (error) {
            res.json({ ok: false, message: 'Unexpected Server Error' });
        }
    }
}
exports.default = AuthController;
