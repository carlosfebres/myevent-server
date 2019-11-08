import {Request, Response} from "express";
import Event from "../models/event";
import Hashtag from "../models/hashtag";
import {io} from "../app";
import {Socket} from "socket.io";
import IEvent from "../types/event";
import {createEvent} from "../service/event";

/**
 * HTTP Endpoint
 * POST /event
 * Register a new event
 */
export const addEvent = async (req: Request, res: Response) => {
    try {
        const eventData = req.body;

        await createEvent(eventData);

        res.json({
            text: "Event Created"
        });
    } catch (e) {
        res.status(500).json({error: "Unexpected Error"});
        throw e;
    }
};

/**
 * WebSocket Event Callback
 * Event: eventSearch
 * Retrieve all events that have at least one of the following hashtags
 * if there are no hashtags, It will retrieve all hashtags
 */
export const searchEvent = async (socket: Socket, hashtags: any[]) => {
    let query = {};
    if (hashtags.length) {
        hashtags = await Hashtag.retriveHashtags(hashtags);
        query = {
            $or: hashtags.map(hashtag => ({
                hashtags: hashtag
            }))
        }
    }
    const events = await Event.find(query).exec();
    socket.emit("eventList", events)
};
