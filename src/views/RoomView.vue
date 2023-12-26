<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Room Details</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h6>Room Name: {{roomId}}</h6>
          <h6>Room Key: {{roomKey}}</h6>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="copyToClipboard">Copy</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel2">Room Members</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <ul
          type="none"
          v-for="(person, index) in participant"
          :key="index"
          class="list"
        >
          <li>
            {{ person.name }}
            <span v-if="person.name === hostName">(Host)</span>
          </li>
        </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="copyToClipboard">Copy</button>
        </div>
      </div>
    </div>
  </div>
  
  <div class="cont bg-primary">
    <nav-bar class="mt-0" :data="navData"></nav-bar>
    <div class="row content">
      <!-- ////////////////////Side Menu////////////////////////////////// -->
      <div class="col-md-3 pListContainer">
        <div class="row m-3 pList">
          <h5>Your Rooms</h5>

          <div class="list-group">
            <router-link :to="'room?roomId='+room" :class="['list-group-item', 'list-group-item-action', { 'act-list': room === $route.query.roomId }]" aria-current="true"  v-for="(room,index) in $store.state.currentRooms" :key="index">
              {{room}}
            </router-link>
            <div >
              <button type="button" class="btn btn-info " style="width:100%" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Room Details
              </button>
            </div>
            <div >
              <button type="button" class="btn btn-info " style="width:100%" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                Room Members
              </button>
            </div>
          </div>
        </div>

      </div>
      <!-- ////////////////////////Message Area/////////////////////////////////////// -->
      <div class="col-md-9 msg">
        <div class="msgBodyContainer p-2 bg-success">
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
              <button class="sendBtn btn btn-lg">
                <i class="fas fa-paper-plane fa-xl iconPlane"></i>
              </button>
            </form>
          </div>
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
    copyToClipboard() {
      if ('clipboard' in navigator) {
        navigator.clipboard.writeText(`
        Room Name: ${this.roomId} \n
        Room Key: ${this.roomKey}
        `)
          .then(() => {
            console.log('Text copied to clipboard');
            // Optionally, you can provide user feedback here
          })
          .catch(err => {
            console.error('Unable to copy:', err);
            // Handle errors or provide feedback if copying fails
          });
      } else {
        // Fallback for browsers that don't support navigator.clipboard
        console.log("Copy to clipboard not allowed")
      }
    },
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
    async freshLoad(){
      const roomId = this.$route.query.roomId;
      this.DBMessages=[]
      this.messages=[]
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
    this.$store.dispatch("getCurrentRooms");
    const userEmail = localStorage.getItem("email");
    await this.$store.dispatch("getMessages", {
      roomId: this.roomId,
      userEmail: userEmail,
    });
    if (this.messagesGetter) {
      this.DBMessages = this.messagesGetter;
    }
    }
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
    footerHeight: 81,

  }),

  beforeMount() {
    this.navData.showProfileChip = true;
  },
  // async mounted() {
  //   const userEmail = localStorage.getItem("email");
  //   await this.$store.dispatch("getMessages", {
  //     roomId: this.roomId,
  //     userEmail: userEmail,
  //   });
  //   if (this.messagesGetter) {
  //     this.DBMessages = this.messagesGetter;
  //   }
  // },
  async created() {
    await this.freshLoad()
  },
  watch: {
    async '$route.query.roomId'(){
        await this.freshLoad()
    },
  },


};
</script>

<style scoped>
.cont {
  text-align: center;
  color: white;
  margin: 0px;
  width: 100%;
  min-height: 90vh;
}
.content {
  width: 95%;
  margin: auto;
  padding: 10px;
  height: 80vh;
  text-align: center;
}
.pListContainer{
  background: #8d04b0;
  height: 75vh ;
  border-radius: 30px;
}
.pList {
  height: 70vh ;
  overflow-y:auto;
  overflow-x:hidden;
}
.pList::-webkit-scrollbar {
  width: 8px; 
  max-height: 40%;
}
.pList::-webkit-scrollbar-thumb {
  background: #60076b; 
  /* background: #006eff;  */
  border-radius: 5px;
}
.pList::-webkit-scrollbar-track {
  background: transparent; /* Hide the track */
}
.pList::-webkit-scrollbar-button {
  display: none;
}
.list {
  text-align: left;
  margin-left: 10%;
}
.msgBodyContainer{
  background-image: url("https://www.freevector.com/uploads/vector/preview/2481/FreeVector-Christmas-Doodle-Pattern.jpg");
  background-repeat: repeat;
  background-size: 20%;
  filter: grayscale(40%);
  border-radius: 5%;
  height: 75vh;
}
.msgArea {
  padding: 3%;
  height: 100%;
}
.messages {
  height: 80%;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent !important;
}
.messages::-webkit-scrollbar {
  width: 8px; 
  max-height: 40%;
}
.messages::-webkit-scrollbar-thumb {
  background: #9c9c9c; 
  /* background: #006eff;  */
  border-radius: 5px;
}
.messages::-webkit-scrollbar-track {
  background: transparent; /* Hide the track */
}
.messages::-webkit-scrollbar-button {
  display: none;
}
.msgBody {
  background: rgb(2, 54, 106);
  margin: 15px;
  border-radius: 8px 8px 8px 8px;
  width: 75%;
  position: relative;
  padding:10px;
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
  bottom:5px;
  margin-top: 30px;
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
  height:40px;
  border: 0.5px solid #0490f4;
}
.msgText:focus {
  border-radius: 15px;
  width: 80%;
  padding: 5px;
  border: 2px solid rgb(208, 0, 255);
  outline: none;
}
.sendBtn {
  border-radius: 15px;
  padding: 4px;
  margin-left: -6%;
  margin-top: -0.5%;
}
.iconPlane {
  color: rgb(0, 132, 255);
}
.key {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 15px;
}
.act-list{
  background: greenyellow;
}
</style>