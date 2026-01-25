"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
class EmailService {
    static async sendOTPEmail(email, name, otp) {
        try {
            if (!this.BREVO_KEY) {
                console.error("Brevo API key is missing");
                return { ok: false, error: new Error("Mail configuration error") };
            }
            const response = await fetch(this.BREVO_API_URL, {
                method: "POST",
                headers: {
                    "api-key": this.BREVO_KEY,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    to: [{ email, name }],
                    templateId: this.TEMPLATE_ID,
                    params: {
                        OTP: otp,
                        NAME: name
                    }
                }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                console.error("Brevo API Error:", errorData);
                return { ok: false, error: new Error("Failed to send email") };
            }
            const data = await response.json();
            return { ok: true, messageId: data.messageId };
        }
        catch (error) {
            console.error("Email Service Error:", error);
            return { ok: false, error };
        }
    }
}
EmailService.BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
EmailService.BREVO_KEY = (0, utils_1.env)("BREVO_API_KEY");
EmailService.TEMPLATE_ID = parseInt((0, utils_1.env)("BREVO_VERIFY_EMAIL_TEMPLATE_ID") || "0");
exports.default = EmailService;
