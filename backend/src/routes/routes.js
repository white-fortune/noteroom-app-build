"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WebRouter;
const auth_controller_1 = __importDefault(require("../app/controllers/auth.controller"));
const webrouter_1 = require("../lib/webrouter");
const jwtparser_middleware_1 = require("../app/middlewares/jwtparser.middleware");
webrouter_1.RouterGroup.new("/auth", [jwtparser_middleware_1.JWTParser], [
    {
        route: '/login',
        method: 'post',
        handler: [auth_controller_1.default, 'login']
    },
    {
        route: '/signup',
        method: 'post',
        handler: [auth_controller_1.default, 'signup']
    }
]);
function WebRouter() {
    return webrouter_1.MainRouterGroup.all();
}
