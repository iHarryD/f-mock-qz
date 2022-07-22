import { io } from "socket.io-client";
const socket = io("https://b-mock-qz.vercel.app").connect();
export default socket;
