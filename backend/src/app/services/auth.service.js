"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const google_auth_library_1 = require("google-auth-library");
const utils_1 = require("../../utils");
const google_client_id = (0, utils_1.config)("auth.google.google_client_id");
class AuthService {
    static async verifyGoogleCredential(credential) {
        try {
            const client = new google_auth_library_1.OAuth2Client(google_client_id);
            const token = await client.verifyIdToken({
                idToken: credential,
                audience: google_client_id
            });
            const payload = token.getPayload();
            if (!payload) {
                return { ok: true, tokenVerified: false };
            }
            return { ok: true, tokenVerified: true, payload: token.getPayload() };
        }
        catch (error) {
            return { ok: false, error };
        }
    }
}
exports.default = AuthService;
