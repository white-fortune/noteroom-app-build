"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LinkController {
    async getLinkPreview(req, res) {
        const url = req.query.url;
        if (!url) {
            return res.status(400).json({ success: 0, message: "URL is required" });
        }
        try {
            const response = await fetch(url);
            const html = await response.text();
            const title = this.extractMeta(html, /<title>(.*?)<\/title>/i) || "";
            const description = this.extractMeta(html, /<meta name="description" content="(.*?)"/i) ||
                this.extractMeta(html, /<meta property="og:description" content="(.*?)"/i) || "";
            const image = this.extractMeta(html, /<meta property="og:image" content="(.*?)"/i) ||
                this.extractMeta(html, /<meta name="twitter:image" content="(.*?)"/i) || "";
            return res.json({
                success: 1,
                meta: {
                    title,
                    description,
                    image: {
                        url: image,
                    },
                },
            });
        }
        catch (error) {
            console.error("Link preview error:", error);
            return res.json({
                success: 0,
                message: "Failed to fetch link preview",
            });
        }
    }
    extractMeta(html, regex) {
        const match = html.match(regex);
        return match ? match[1] : null;
    }
}
exports.default = new LinkController();
