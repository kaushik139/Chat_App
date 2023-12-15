<template>
  <div class="cont">
    <navBar :showName="true"></navBar>
    <div class="logoDiv">
      <span class="logoHome d-block mb-0">ChatON</span>
      <span class="logoDesc m-0">Room Chats</span>
    </div>
    <div class="container d-flex p-5 mb-5 justify-content-center">
      <!-- ///////////////////////Joined Rooms/////////////////////////////////////////////////// -->
      <div
        class="row d-block p-2 m-4 border border-1 rounded-4 neon"
        style="width: 40%"
      >
        <span class="h4">My Rooms</span>
        <div
          class="col-md-4 p-2"
          v-for="(person, index) in people"
          :key="index"
          style="width: 100%"
        >
          <div class="card p-2">
            <h5 class="card-title">{{ person.name }}</h5>
            <div class="d-flex">
              <div
                class="rounded-circle border profile-pic"
                v-for="(avatar, i) in person.avatars"
                :key="i"
                :style="{ backgroundImage: 'url(' + avatar + ')' }"
              ></div>
              <span class="ml-6 mt-1">{{ person.avatars.length }} members</span>
            </div>
          </div>
        </div>
      </div>

      <!-- /////////////////////join new rooms////////////////////////////////////////////////// -->
      <div
        class="row d-block p-2 m-4 border border-1 rounded-4 neon"
        style="width: 40%"
      >
        <span class="h4">Join Rooms</span>
        <form @submit.prevent="FindByCode">
          <div class="form-group">
            <label for="roomCode">Enter Room Code</label>
            <input
              type="roomCode"
              class="form-control"
              id="roomCode"
              v-model="roomCode"
              required
              style="width: 60%; margin: auto"
            />
          </div>
          <button class="btn btn-success mt-2" style="width: 40%">Join</button>
        </form>
        <span class="d-block my-2">or</span>
        <button class="btn btn-primary" style="width: 40%" @click="createRoom">Create Room</button>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
    
<script>
import navBar from "../components/navBar.vue";
import Footer from "../components/footer";

export default {
  components: {
    navBar,
    Footer,
  },

  computed: {},

  data: () => ({
    people: [
      {
        name: "John Doe",
        avatars: [
          "https://via.placeholder.com/50",
          "https://via.placeholder.com/50",
          "https://via.placeholder.com/50",
        ],
      },
      {
        name: "Jane Smith",
        avatars: [
          "https://via.placeholder.com/50",
          "https://via.placeholder.com/50",
        ],
      },
      // Add more people with their avatars here
    ],
    roomCode: '',

  }),

  methods: {
    async FindByCode() {
      if (this.roomCode !== '') {
        console.log(this.roomCode);
        await this.$store.dispatch('roomCodeAction', this.roomCode);
        return true;
      }
      else return false;
    },

    async createRoom() {
        await this.$store.dispatch('createRoomAction', this.roomCode);
    }
  },

  async mounted() {},
};
</script>
      
<style scoped>
.cont {
  text-align: center;
  background: linear-gradient(to right, #1b5efb, #8d04b0);
  color: white;
  margin: 0px;
  margin-top: 40px;
  height: 90vh;
}
.profile-pic {
  width: 30px;
  height: 30px;
  background-size: cover;
  margin-right: 5px;
}

@keyframes wavy {
  0% {  transform: rotate(5deg); }
  30% { transform: translateY(-5px); }
  60% { transform: translateY(0); }
  60% {  transform: rotate(-5deg); }
  100% {  transform: translateY(0); }
  100% {  transform: rotate(5deg); }
}

.logoHome {
  font-size: 48px;
  margin: 0px;
  /* background: linear-gradient(to right, #1b5efb, #8d04b0); */
  /* -webkit-background-clip: text; Apply gradient as text fill */
  /* background-clip: text; */
  /* color: white; */
  text-shadow: 1px 1px 0 #66c2ff, 2px 2px 0 #0e06fd, 3px 3px 0 #ed2aff;
  color: transparent;
  font-weight: 1000;
  animation: wavy 1s ease-in-out infinite;
  transform: rotate(-5deg);

}
.logoDesc {
  font-family: cursive;
}

.neon{
  border: 2px solid transparent; /* Set a transparent border */
  box-shadow: 0 0 10px #00f2ff, 0 0 20px #00f2ff, 0 0 30px #00f2ff, 0 0 40px #00f2ff; /* Multiple shadows to create the neon effect */

}
</style>
      