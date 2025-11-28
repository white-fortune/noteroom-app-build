"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const utils_1 = require("./utils");
const routes_1 = __importDefault(require("./routes/routes"));
const path_1 = require("path");
const os_1 = require("os");
const app = (0, express_1.default)();
const port = (0, utils_1.config)("app.port");
const clientStaticPath = (0, path_1.join)(__dirname, "../../frontend");
app.use(express_1.default.static(clientStaticPath));
app.use(express_1.default.json());
app.use((0, express_1.urlencoded)({ extended: true }));
app.use("/api", (0, routes_1.default)());
app.get("/{*splat}", async (req, res) => {
    res.sendFile((0, path_1.join)(clientStaticPath, 'index.html'));
});
app.listen(port, () => {
    console.log(`Local Server: http://localhost:${port}`);
    const wifi = (0, os_1.networkInterfaces)()['Wi-Fi'];
    if (wifi) {
        const networkHost = wifi[1].address;
        console.log(`Network Server: http://${networkHost}:${port}`);
    }
});
