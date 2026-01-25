"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = WebRouter;
const path_1 = require("path");
const auth_controller_1 = __importDefault(require("../app/controllers/auth.controller"));
const express_1 = require("express");
const graphql_yoga_1 = require("graphql-yoga");
const schema_1 = require("../graphql/schema");
const gqlContext_1 = require("../graphql/gqlContext");
const multer_1 = __importDefault(require("multer"));
const mediahandler_controller_1 = __importDefault(require("../app/controllers/mediahandler.controller"));
const express_2 = __importDefault(require("express"));
const jwt_service_1 = __importDefault(require("../app/services/jwt.service"));
const webRouter = (0, express_1.Router)();
function AuthRouter() {
    const authRouter = (0, express_1.Router)();
    authRouter.post("/login", auth_controller_1.default.login);
    authRouter.post("/signup", auth_controller_1.default.signup);
    authRouter.post("/verify-email", auth_controller_1.default.verifyEmail);
    authRouter.post("/resend-otp", auth_controller_1.default.resendOTP);
    authRouter.post("/me", auth_controller_1.default.me);
    authRouter.post("/google", auth_controller_1.default.googleAuth);
    return authRouter;
}
function MediaHandlerRouter() {
    const mediaHandlerRouter = (0, express_1.Router)();
    const storage = multer_1.default.diskStorage({
        destination: (0, path_1.join)(__dirname, "../../../uploads"),
        filename: function (_req, file, cb) {
            const ext = (0, path_1.extname)(file.originalname);
            cb(null, Date.now() + "-" + Math.random() + ext);
        }
    });
    const upload = (0, multer_1.default)({ storage });
    mediaHandlerRouter.post("/user", upload.fields([
        { name: "user-profile-pic", maxCount: 1 },
        { name: "user-cover-pic", maxCount: 1 },
    ]), mediahandler_controller_1.default.updateUserImages);
    mediaHandlerRouter.post("/post", upload.array("media"), mediahandler_controller_1.default.updatePostMedia);
    return mediaHandlerRouter;
}
function GQLRouter() {
    const gqlRouter = (0, express_1.Router)();
    const yoga = (0, graphql_yoga_1.createYoga)({
        schema: schema_1.schema,
        context: gqlContext_1.createContext,
        landingPage: false
    });
    gqlRouter.use("/", yoga);
    return gqlRouter;
}
function WebRouter() {
    webRouter.use("/auth", AuthRouter());
    webRouter.use("/uploads", express_2.default.static((0, path_1.join)(__dirname, "../../../uploads")));
    webRouter.use(async (req, res, next) => {
        const token = req.headers["token"];
        if (!token) {
            return res.json({ ok: false });
        }
        const jwtResponse = await jwt_service_1.default.verifyToken(token);
        if (!jwtResponse.ok) {
            return res.json({ ok: false });
        }
        const validAuth = jwtResponse.validAuth;
        if (!validAuth) {
            return res.json({ ok: false });
        }
        const authUser = jwtResponse.jwtUser;
        req = Object.assign(req, { authUser });
        next();
    });
    webRouter.use("/graphql", GQLRouter());
    webRouter.use("/media", MediaHandlerRouter());
    return webRouter;
}
