"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hashtag_1 = require("../controllers/hashtag");
exports.default = (socket) => {
    socket.on('refreshHashtags', () => hashtag_1.getAllHashtags(socket));
};
