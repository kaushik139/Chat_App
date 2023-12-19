<template>
  <div class="container-fluid m-0 p-0">
    <nav-bar class="m-0 navBaar" :data="navData"></nav-bar>
    <h1>Landing Page</h1>
    <button class="btn btn-primary" @click="$router.push('/auth')">
      Get Started
    </button>
    <Footer class="footer"></Footer>
  </div>
</template>
    
    <script>
import NavBar from "../components/navBar.vue";
import Footer from "../components/footer";

export default {
  components: {
    NavBar,
    Footer,
  },

  computed: {},

  data: () => ({
    navData: {
      showProfileChip: false,
      showLandingPageControls: true
    },
  }),
  async mounted() {},
};
</script>
      
      <style scoped>
      
.container-fluid {
  margin: none;
  width: 100%;
  height: 100%;
  text-align: center;
  
}
.navBaar {
  width: 100%;
}
</style>
      