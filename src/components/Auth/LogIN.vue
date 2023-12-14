<template>
    <div class="container">
        <div id="app" class="container mt-5">
  <div class="row justify-content-center">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h4>Log In</h4>
        </div>
        <div class="card-body">
          <form @submit.prevent="signIn">
            <div class="form-group">
              <label for="email">Email address</label>
              <input type="email" class="form-control" id="email" v-model="email" required>
            </div>
            <div class="mt-2 form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" v-model="password" required>
            </div>
            <button type="submit" class="mt-3 btn btn-primary">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
      </template>
      
      <style>
      #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
      }
      
      nav {
        padding: 30px;
      }
      
      nav a {
        font-weight: bold;
        color: #2c3e50;
      }
      
      nav a.router-link-exact-active {
        color: #42b983;
      }
      </style>
      