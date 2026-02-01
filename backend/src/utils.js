"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = env;
exports.config = config;
const dotenv_1 = require("dotenv");
const path_1 = require("path");
(0, dotenv_1.config)({ path: (0, path_1.join)(__dirname, "../.env") });
function env(key, default_) {
    const value = process.env[key];
    if (value) {
        return value;
    }
    else {
        if (default_) {
            return default_;
        }
        else {
            throw new Error(`Env key ${key} not found`);
        }
    }
}
function config(path, default_) {
    try {
        const [configFile, ...rest] = path.split(".");
        const key = rest[rest.length - 1];
        let paths = rest.slice(0, rest.length - 1);
        let configs = require(`./config/${configFile}`).default;
        while (paths.length !== 0) {
            configs = configs[paths[0]];
            paths.shift();
        }
        if (configs[key]) {
            return configs[key];
        }
        else {
            if (default_) {
                return default_;
            }
            throw new Error(`No config found in ${path}`);
        }
    }
    catch (error) {
        if (default_) {
            return default_;
        }
        throw new Error(`No config found in ${path}`);
    }
}
