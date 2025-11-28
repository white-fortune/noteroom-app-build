"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.default = {
    jwt: {
        secret: (0, utils_1.env)("JWT_SECRET")
    }
};
