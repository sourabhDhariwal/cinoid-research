import socketIOClient from "socket.io-client";
import config from './config.json';

const socketMiddleware = () => {
    console.log("config.BASE_URL----------",config.BASE_URL)
    const socket = socketIOClient(config.BASE_URL,{
         secure: true,
         reconnection: true, 
         rejectUnauthorized: false 
        });
return socket;
}

export default socketMiddleware();