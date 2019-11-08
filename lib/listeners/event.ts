import {Socket} from "socket.io";
import {searchEvent} from "../controllers/event"

export default (socket: Socket) => {
    socket.on('eventSearch', data => searchEvent(socket, data));
}
