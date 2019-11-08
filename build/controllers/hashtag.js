"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hashtag_1 = __importDefault(require("../models/hashtag"));
/**
 * WebSocket Event Callback
 * Event: refreshHashtags
 */
exports.getAllHashtags = async (socket) => {
    const hashtags = await hashtag_1.default.find({}).exec();
    const hashtagNames = hashtags.map(obj => obj.name);
    socket.emit('hashtagList', hashtagNames);
};
