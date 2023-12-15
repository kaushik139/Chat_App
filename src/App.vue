<template>
  <router-view/>
</template>

<script>
import { mapGetters } from 'vuex';
import SocketioService from './services/socketio.service.js';

export default {
  components: {
  },
  name: "App",

  computed: {
  },

  created() {
    SocketioService.setupSocketConnection();
  },
  beforeUnmount() {
    SocketioService.disconnect();
  },

  watch: {
  },

  data: () => ({
  }),
  
  async mounted() {
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
</style>
