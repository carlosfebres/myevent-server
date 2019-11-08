"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = __importDefault(require("../models/event"));
const hashtag_1 = __importDefault(require("../models/hashtag"));
const app_1 = require("../app");
/**
 * HTTP Endpoint
 * POST /event
 * Register a new event
 */
exports.addEvent = async (req, res) => {
    try {
        const eventData = req.body;
        eventData.hashtags = await hashtag_1.default.retriveHashtags(eventData.hashtags);
        const event = new event_1.default(eventData);
        await event.save();
        res.json({
            text: "Event Created"
        });
        app_1.io.emit('refreshEvents');
    }
    catch (e) {
        throw e;
        res.status(500).json({ error: "Unexpected Error" });
    }
};
/**
 * WebSocket Event Callback
 * Event: eventSearch
 */
exports.searchEvent = async (socket, hashtags) => {
    console.log("Searching Events...");
    let query = {};
    if (hashtags.length) {
        hashtags = await hashtag_1.default.retriveHashtags(hashtags);
        query = {
            $or: hashtags.map(hashtag => ({
                hashtags: hashtag
            }))
        };
    }
    const events = await event_1.default.find(query).exec();
    socket.emit("eventList", events);
};
