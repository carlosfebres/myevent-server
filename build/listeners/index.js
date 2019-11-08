"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = __importDefault(require("./event"));
const hashtag_1 = __importDefault(require("./hashtag"));
const app_1 = require("../app");
app_1.io.on("connection", (socket) => {
    console.log("User Connected...");
    event_1.default(socket);
    hashtag_1.default(socket);
});
