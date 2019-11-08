import IEvent from "../types/event";
import Hashtag from "../models/hashtag";
import Event from "../models/event";
import {io} from "../app";

export const createEvent = async (eventData: IEvent) => {
    eventData.hashtags = await Hashtag.retriveHashtags(eventData.hashtags as string[]);

    const event = new Event(eventData as IEvent);
    await event.save();

    io.emit('refreshEvents');
};
