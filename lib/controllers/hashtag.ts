import Hashtag from "../models/hashtag";
import {Socket} from "socket.io";


/**
 * WebSocket Event Callback
 * Event: refreshHashtags
 * Retrive all hashtags and send it to client.
 */
export const getAllHashtags = async (socket: Socket) => {
    const hashtags = await Hashtag.find({}).exec();
    const hashtagNames = hashtags.map(obj => obj.name);
    socket.emit('hashtagList', hashtagNames)
};
