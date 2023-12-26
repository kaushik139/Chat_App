<template>
  <div class="cont bg-primary">
    <nav-bar class="mt-0" :data="navData"></nav-bar>
    <div class="row content">
      <!-- ////////////////////Side Menu////////////////////////////////// -->
      <div class="col-md-3 mt-4 pList" style="">
        <div class="row m-3">
          <h5>Room Details</h5>
          <h6>
            Room ID: <span class="key">{{ roomId }}</span>
          </h6>
          <h6>
            Room Key: <span class="key">{{ roomKey }}</span>
          </h6>
        </div>
        <!-- ////////////////////Participant's List////////////////////////////////// -->
        <div class="row mt-4">
          <h5>In Room</h5>
          <ul
            type="none"
            v-for="(person, index) in participant"
            :key="index"
            class="list"
          >
            <li>
              <img src="img_avatar.jpg" alt="P.I" width="96" height="96" />
              {{ person.name }}
              <span v-if="person.name === hostName">(Host)</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- ////////////////////////Message Area/////////////////////////////////////// -->
      <div class="col-md-9 msg">
        <div class="msgArea">
          <div class="row messages" ref="msgArea">
            <!-- Messages content -->
            <ul
              type="none"
              class="msgBody"
              v-for="(msg, index) in DBMessages"
              :key="index"
            >
              <li>
                <div class="msgcontent">{{ msg.msg }}</div>
                <div class="msgName">-{{ msg.name }}</div>
                <div class="msgTime">-{{ formattedDate(msg) }}</div>
              </li>
            </ul>
            <!-- bot message -->
            <ul
              type="none"
              class="msgBody"
              v-for="(msg, index) in messages"
              :key="index"
            >
              <li>
                <div class="msgcontent">{{ msg.msg }}</div>
                <div class="msgName">-{{ msg.name }}</div>
                <div class="msgTime">{{ msg.timeStamp }}</div>
              </li>
            </ul>
            <!-- End of Messages content -->
          </div>

          <!-- SenDiv for input and button -->
          <div class="row senDiv">
            <form @submit="sendMessage">
              <input type="text" v-model="msg" class="msgText px-2" />
              <button class="sendBtn btn btn-lg bg-secondary text-primary">
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer class="footer" :height="footerHeight"></Footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import NavBar from "../components/navBar.vue";
import socketioService from "../services/socketio.service";
import Footer from "../components/footer";
import moment from "moment";

export default {
  components: {
    NavBar,
    Footer,
  },

  computed: {
    ...mapGetters(["roomCodeGetter", "messagesGetter"]),
    hostName() {
      const fullName = localStorage.getItem("name") || "";
      const words = fullName.split(" ");
      const firstName = words[0];
      return firstName;
    },
    textRows() {
      if (this.msg.length <= 50) return 1;
      else return this.msg.length / 50 + 1;
    },
    roomKey() {
      return this.$store.state.roomPassKey;
    },
    formattedDate() {
      return (msg) => moment(msg.created_at).format("MMMM Do YYYY, h:mm a");
    },
  },
  methods: {
    sendMessage(e) {
      e.preventDefault();
      this.socketService.sendMessage({
        name: localStorage.getItem("name"),
        msg: this.msg,
        roomId: this.$route.query.roomId,
      });
      this.msg = "";
      this.$refs.msgArea.scrollTop = this.$refs.msgArea.scrollHeight;
    },
  },
  data: () => ({
    navData: {
      showProfileChip: true,
      showLandingPageControls: false,
    },
    roomId: "",
    msg: "",
    passKey: "",
    socketService: null,
    participant: [
      // {
      //   name: "abby",
      // },

    ],
    messages: [
      // {
      //   name: "abby",
      //   msg: "qwerty",
      //   timeStamp: "7:28",
      // },
  
    ],
    DBMessages: [],
    footerHeight: 48,

  }),

  beforeMount() {
    this.navData.showProfileChip = true;
  },
  async mounted() {
    const userEmail = localStorage.getItem("email");
    await this.$store.dispatch("getMessages", {
      roomId: this.roomId,
      userEmail: userEmail,
    });
    if (this.messagesGetter) {
      this.DBMessages = this.messagesGetter;
    }
  },
  async created() {
    const roomId = this.$route.query.roomId;
    this.roomId = roomId;
    this.$store.dispatch("getPassKey", roomId);
    this.rooms = this.$store
    this.socketService = new socketioService(roomId);
    this.participant.push({ name: localStorage.getItem("name") });
    this.socketService.setMessageListener((message) => {
      this.messages.push(message);
    });
    this.socketService.setMemberListener((participantList) => {
      this.participant = participantList;
    });
  },

};
</script>

<style scoped>
.cont {
  text-align: center;
  color: white;
  margin: 0px;
  width: 100%;
  min-height: 50vh;
}
.content {
  width: 95%;
  margin: auto;
  padding: 10px;
  text-align: center;
  /* height: ; */
}
.pList {
  background: #8d04b0;
  height: 75vh;
  border-radius: 30px;
  overflow-y:auto;
  overflow-x:hidden;
}
.pList::-webkit-scrollbar {
  width: 0; /* Remove scrollbar width */
}

.pList::-webkit-scrollbar-track {
  background: purple; /* Track color */
}
.list {
  text-align: left;
  margin-left: 10%;
}
.msgArea {
  background-image: url("https://www.freevector.com/uploads/vector/preview/2481/FreeVector-Christmas-Doodle-Pattern.jpg");
  margin: 3%;
  background-repeat: repeat;
  background-size: 20%;
  filter: grayscale(40%);
  border-radius: 5%;
  padding: 3%;
  position: relative;
  /* height: calc(100vh - 100px); */
  height: 75vh;
  /* overflow-y: auto; */
}
.messages {
  height: 400px;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent !important;
}
.messages::-webkit-scrollbar {
  width: 0; /* Remove scrollbar width */
}

.messages::-webkit-scrollbar-track {
  background: purple; /* Track color */
}
.msgBody {
  background: rgb(2, 54, 106);
  margin: 15px;
  border-radius: 8px 8px 8px 8px;
  width: 75%;
  position: relative;
  /* margin-left: auto; */
}
.msgcontent {
  width: 90%;
  text-align: left;
}
.msgName {
  color: grey;
  font-size: 15px;
  text-align: right;
}
.msgTime {
  color: grey;
  font-size: 12px;
  text-align: right;
}
.senDiv {
  position: sticky;
  margin-top: 10px;
  height: auto;
  width: 100%;
  bottom: 2;
  z-index: 9;
  /* padding: 10px; */
}
.msgText {
  border-radius: 15px;
  width: 80%;
  padding: 5px;
  border: 0.5px solid #0490f4;
}
.msgText:focus {
  border-radius: 15px;
  width: 80%;
  padding: 5px;
  border: 2px solid rgb(2, 54, 106);
  outline: none;
}
.sendBtn {
  color: #0490f4;
  /* margin-top: -25px; */
  margin-left: -10px;
}
.iconPlane {
  color: rgb(2, 54, 106);
  -webkit-text-stroke: 1px #00f2ff; /* Text stroke to create outline */
}
.key {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 15px;
}
</style>