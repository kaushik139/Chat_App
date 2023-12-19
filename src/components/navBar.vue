<template>
        <nav class="navbar bg-body-tertiary p-0">
  <div class="container-fluid bg-primary">
    <router-link to="/home" class="navbar-brand logo">
      ChatON
    </router-link>
          <div v-if="data.showLandingPageControls" class="navOptions d-flex">
            <a class="nav-link m-2" aria-current="page" href="#">Login</a>
          <!-- <a class="nav-link m-2" href="#">Signup</a> -->
          </div>
    <div v-if="showProfileChip" class="chip ml-auto bg-primary px-3 py-1 rounded-pill text-dark">
  <img src="img_avatar.jpg" alt="P.I" width="96" height="96">
  {{name}}
</div>
  </div>
</nav>
</template>
  
<script>

export default {
  name: 'nav',

  props: {
    data: Object,
  },
    
  computed: {
    name() {
      const fullName = localStorage.getItem('name') || '';
      const words = fullName.split(" "); 
      const firstName = words[0];
      return firstName;
    },
    showProfileChip() {
      return this.data.showProfileChip;
      }
    },

    data: () => ({ }),

  mounted() {
  }
}
</script>
    
  <style scoped>
.navbar{
  max-height: 50px;
  padding-bottom: 40px;
  margin-top: -45px;
}
.chip:hover {
  cursor: pointer;
}
.logo{
  font-size: 30px;
  text-shadow: 1px 1px 0 #66c2ff, 2px 2px 0 #0e06fd, 3px 3px 0 #ed2aff;
  color: transparent; /* Make the original text color transparent */

}

.logo:hover{
  color: #b42aff;
}
  </style>
  