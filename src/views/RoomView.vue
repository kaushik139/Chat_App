<template>
  <div class="cont">
    <div class="try m-5"></div>

    <nav-bar class="mt-0" :show-name="true" :roomName="aa"></nav-bar>
    <div class="row content">
        <!-- ////////////////////Participant's List////////////////////////////////// -->
      <div class="col-md-3 pList">
        <h3>In Room</h3>
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
      <!-- ////////////////////////Message Area/////////////////////////////////////// -->
      <div class="col-md-9 msg">
        <div class="msgArea">
          <ul type="none" class="msgBody" v-for="(msg, index) in messages" :key="index">
            <li>
                <div class="msgcontent">
                    {{ msg.msg }}
                </div>
                <div class="msgTime">-{{ msg.timeStamp }}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
    
    <script>
import NavBar from "../components/navBar.vue";

export default {
  components: {
    NavBar,
  },

  computed: {
    hostName() {
      const fullName = localStorage.getItem("name") || "";
      const words = fullName.split(" ");
      const firstName = words[0];
      return firstName;
    },
  },

  data: () => ({
    participant: [
      {
        name: "abby",
      },
      {
        name: "micquel",
      },
      {
        name: "Kaushik",
      },
      {
        name: "stone",
      },
    ],
    messages: [
      {
        name: "abby",
        msg: "qwerty",
        timeStamp: '7:28'
            },
            {
        name: "abby",
        msg: "qwerty",
        timeStamp: '7:29'
            },
            {
        name: "Kaushik",
        msg: "All hail qwerty!",
        timeStamp: '7:30'
            },
            {
        name: "abby",
        msg: "qwerty",
        timeStamp: '7:31'
      },
    ],
  }),

  async mounted() {
    // console.log(localStorage.getItem('name'));
  },
};
</script>
      
<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  /* color: #2c3e50; */
}

nav a.router-link-exact-active {
  /* color: #42b983; */
}

.cont {
  text-align: center;
  color: white;
  margin: 0px;
  background: rgb(0, 136, 255);
  /* margin-top: 40px; */
  min-height: 90vh;
}

.pList {
  background: #8d04b0;
  min-height: 90vh;
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
  min-height: 92%;
  position: relative;
  padding: 3%;

}
.msgBody{
    background: rgb(2, 54, 106);
    margin: 15px;
    border-radius: 8px 8px 8px 8px;
    width: 75%;
    position: relative;
/* margin-left: auto; */
}
.msgcontent{
    width: 90%;
    text-align: left;
}
.msgTime{
    color: grey;
    font-size: 12px;
    text-align: right; 
    margin: 3%;
    }
</style>
      