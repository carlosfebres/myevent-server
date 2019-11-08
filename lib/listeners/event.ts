import {Socket} from "socket.io";
import {searchEvent} from "../controllers/event"
import {getAllHashtags} from "../controllers/hashtag";

export default (socket: Socket) => {
    socket.on('eventSearch', data => searchEvent(socket, data));
    socket.on('refreshHashtags', () => getAllHashtags(socket));
}
