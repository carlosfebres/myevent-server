"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hashtag_1 = __importDefault(require("../models/hashtag"));
const event_1 = __importDefault(require("../models/event"));
const app_1 = require("../app");
exports.createEvent = async (eventData) => {
    eventData.hashtags = await hashtag_1.default.retriveHashtags(eventData.hashtags);
    const event = new event_1.default(eventData);
    await event.save();
    app_1.io.emit('refreshEvents');
};
