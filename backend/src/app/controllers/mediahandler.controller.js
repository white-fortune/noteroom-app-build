"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_service_1 = __importDefault(require("../services/users.service"));
const posts_1 = require("../../database/schema/posts");
class MediaHandlerController {
    static async updateUserImages(req, res, next) {
        try {
            const authUser = req.authUser;
            const query = { ...req.query };
            const files = req.files;
            if (!files)
                return res.json({ ok: true });
            const userImageEdits = {};
            for (const fileName in files) {
                const file = files[fileName][0].filename;
                if (fileName === "user-profile-pic") {
                    userImageEdits.profileImageUrl = `/api/uploads/${file}`;
                }
                else {
                    userImageEdits.coverImageUrl = `/api/uploads/${file}`;
                }
            }
            if (query.action === "removeCoverImg") {
                userImageEdits.coverImageUrl = null;
            }
            await users_service_1.default.updateUserByUsername(authUser.username, userImageEdits);
            res.json({ ok: true });
        }
        catch (error) {
            res.json({ ok: false });
        }
    }
    static async updatePostMedia(req, res, next) {
        try {
            const files = req.files;
            const body = { ...req.body };
            const filePaths = files.map(file => `/api/uploads/${file.filename}`);
            const postID = body.postID;
            await posts_1.mediaPostModel.updateOne({ postID }, { $push: { media: { $each: filePaths } } });
            res.json({ ok: true });
        }
        catch (error) {
            res.json({ ok: false });
        }
    }
    static async uploadEditorImage(req, res) {
        try {
            const file = req.file;
            if (!file) {
                return res.json({ success: 0, message: "No file uploaded" });
            }
            res.json({
                success: 1,
                file: {
                    url: `/api/uploads/${file.filename}`
                }
            });
        }
        catch (error) {
            console.error("Editor image upload error:", error);
            res.json({ success: 0, message: "Upload failed" });
        }
    }
    static async uploadEditorImageByUrl(req, res) {
        try {
            const { url } = req.body;
            if (!url) {
                return res.json({ success: 0, message: "No URL provided" });
            }
            res.json({
                success: 1,
                file: {
                    url: url
                }
            });
        }
        catch (error) {
            console.error("Editor image by URL error:", error);
            res.json({ success: 0, message: "Upload failed" });
        }
    }
}
exports.default = MediaHandlerController;
