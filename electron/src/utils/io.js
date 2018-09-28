import SocketIOClient from 'socket.io-client';
const io = SocketIOClient('http://localhost:3000');
const socket = io.connect();
socket.on('connect', () => {
  console.log("Connected to Max 8");
});

export default io;