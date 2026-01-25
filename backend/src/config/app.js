"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.default = {
    port: (0, utils_1.env)("PORT", 3000)
};
