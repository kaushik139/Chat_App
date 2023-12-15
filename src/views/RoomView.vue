<template>
  <div class="cont">
    <nav-bar class="mt-0" :show-name="true" :roomName="aa"></nav-bar>
    <div class="row content">
      <div class="col-md-3 pList">
        <h3>In Room</h3>
        <ul type="none" v-for="(person, index) in participant" :key="index" class="list">
          <li>
            <img src="img_avatar.jpg" alt="P.I" width="96" height="96" />
            {{ person.name }}
            <span v-if="person.name === hostName">(Host)</span>
          </li>
        </ul>
      </div>
      <div class="col-md-9 msg">
        Lorem ipsum dolor sit amlorem tempore est ullam reiciendis blanditiis
        vitae. Quibusdam porro reiciendis impedit, doloribus corporis
        recusandae!
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
                    const fullName = localStorage.getItem('name') || '';
      const words = fullName.split(" "); 
      const firstName = words[0];
      return firstName;    }
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

.list{
    text-align: left;
    margin-left: 10%;
}
</style>
      