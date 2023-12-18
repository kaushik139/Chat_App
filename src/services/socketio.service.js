import { io } from 'socket.io-client';

class SocketioService {
  socket;

  constructor(roomId) {
    this.socket = io("http://localhost:3000");
    console.log(roomId)
    this.socket.on("connect", () => {
      console.log(this.socket.id); // Log the socket ID after successful connection
      this.socket.emit('joinRoom', {
        token:localStorage.getItem('credential'),
        email:localStorage.getItem('email'),
        roomId: roomId
      });

    });
  }

  getSocket() {
    return this.socket;
  }

  setMessageListener(callback) {
    this.socket.on("message", (message) => {
      callback(message);
    });
  }

  sendMessage({name,msg}){
    this.socket.emit("message",{name,msg})
  }
}

export default SocketioService;
