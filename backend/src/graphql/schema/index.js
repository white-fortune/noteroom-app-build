"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
require("../modules/user");
require("../modules/post");
require("../modules/comments");
const builder_1 = require("./builder");
exports.schema = builder_1.builder.toSchema({});
