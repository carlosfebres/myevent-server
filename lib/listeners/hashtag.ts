import {getAllHashtags} from "../controllers/hashtag";

import {Socket} from "socket.io";

export default (socket: Socket) => {
    socket.on('refreshHashtags', () => getAllHashtags(socket));
}
