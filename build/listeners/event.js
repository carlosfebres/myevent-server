"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../controllers/event");
const hashtag_1 = require("../controllers/hashtag");
exports.default = (socket) => {
    socket.on('eventSearch', data => event_1.searchEvent(socket, data));
    socket.on('refreshHashtags', () => hashtag_1.getAllHashtags(socket));
};
