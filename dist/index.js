"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./utils/server"));
const PORT = process.env.APP_PORT;
server_1.default.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}...`);
});
