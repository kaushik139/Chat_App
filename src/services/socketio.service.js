import { io } from 'socket.io-client';

class SocketioService {
  socket;

  constructor(roomId) {
    this.socket = io("http://localhost:3000");
    console.log(roomId)
    this.socket.on("connect", () => {
      console.log(this.socket.id); // Log the socket ID after successful connection
      this.socket.emit('joinRoom', {
        token: localStorage.getItem('credential'),
        email: localStorage.getItem('email'),
        roomId: roomId
      });

    });
  }

  getSocket() {
    return this.socket;
  }

  setMessageListener(callback) {
    this.socket.on("message", (message) => {
      console.log(message)
      callback(message);
    });
  }

  sendMessage({ name, msg, roomId }) {
    console.log(name, ":::", msg, ";;;", roomId)
    this.socket.emit("message", { email: localStorage.getItem('email'), name, msg, roomId })
  }

  expired() {
    this.$router.push('/home')
  }

  invalidRoom() {
    this.$router.push('/home')
  }

}

export default SocketioService;
