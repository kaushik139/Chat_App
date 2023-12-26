import { io } from "socket.io-client";

class SocketioService {
  socket;

  constructor(roomId) {
    this.socket = io("http://localhost:3000");
    this.socket.on("connect", () => {
      this.socket.emit("joinRoom", {
        token: localStorage.getItem("credential"),
        email: localStorage.getItem("email"),
        roomId: roomId,
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

  setMemberListener(callback) {
    this.socket.on("newJoin", (participantList) => {
      callback(participantList);
    });
  }

  sendMessage({ name, msg, roomId }) {
    this.socket.emit("message", {
      email: localStorage.getItem("email"),
      name,
      msg,
      roomId,
    });
  }

  expired() {
    this.$router.push("/home");
  }

  invalidRoom() {
    this.$router.push("/home");
  }
}

export default SocketioService;
