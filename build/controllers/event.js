"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const event_1 = __importDefault(require("../models/event"));
const hashtag_1 = __importDefault(require("../models/hashtag"));
const event_2 = require("../service/event");
/**
 * HTTP Endpoint
 * POST /event
 * Register a new event
 */
exports.addEvent = async (req, res) => {
    try {
        const eventData = req.body;
        await event_2.createEvent(eventData);
        res.json({
            text: "Event Created"
        });
    }
    catch (e) {
        res.status(500).json({ error: "Unexpected Error" });
        throw e;
    }
};
/**
 * WebSocket Event Callback
 * Event: eventSearch
 * Retrieve all events that have at least one of the following hashtags
 * if there are no hashtags, It will retrieve all hashtags
 */
exports.searchEvent = async (socket, hashtags) => {
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
