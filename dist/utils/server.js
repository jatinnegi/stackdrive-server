"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
function createServer() {
    const app = (0, express_1.default)();
    app.get("/", (_, res) => {
        res.send(`File uploading system: Typescript + Express`);
    });
    app.use(`/${process.env.STORAGE_PATH}`, express_1.default.static(process.env.STORAGE_PATH));
    app.use(express_1.default.json({ limit: "10mb" }), express_1.default.urlencoded({ limit: "10mb", extended: true }));
    return app;
}
const app = createServer();
exports.default = app;
