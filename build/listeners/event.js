"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = require("../controllers/event");
exports.default = (socket) => {
    socket.on('eventSearch', data => event_1.searchEvent(socket, data));
};
