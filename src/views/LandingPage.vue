<template>
    <div class="container">
       <h1>Landing Page</h1>
       <button class="btn btn-primary" @click="$router.push('/auth')">Get Started</button>
    </div>
      </template>
    
    <script>
    
    export default {
      components: {
      },
    
      computed: {
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
      