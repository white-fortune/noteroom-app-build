"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUsernameFromEmail = generateUsernameFromEmail;
function generateUsernameFromEmail(email) {
    const base = email.split("@")[0].trim().toLowerCase().replace(/[*+~.()'"!:@]/g, "_");
    const suffix_number = Math.floor(1000 + Math.random() * 9000);
    const username = `${base}_${suffix_number}`;
    return username;
}
