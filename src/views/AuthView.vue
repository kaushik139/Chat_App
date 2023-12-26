<template>
  <div class="container">
    <div class="nav">
      <router-link to="/home" class="logo"> ChatON </router-link>
    </div>
    <div class="row justify-content-center m-6 cont">
      <div class="col-md-6">
        <div class="card p-4">
          Connect easily with:
          <!-- <button
            class="my-2 btn d-block border-2 border-danger text-danger"
            style="width: 60%; margin: auto"
            @click="connectGoogle"
          >
            Google
          </button>
          <button
            class="my-2 btn d-block border-2 border-primary text-primary"
            style="width: 60%; margin: auto"
            @click="connectLinkedIn"
          >
            LinkedIN
          </button> -->

          <GoogleLogin
            class="my-4 mx-auto p-0 border-2"
            :callback="callback"
            auto-login
          />
          <div class="foot text-center mt-4">
          <a class="text">&copy; ChatON 2023</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const callback = async (response) => {
  try {
    const idToken = response.credential; 
    const res = await axios.post("http://localhost:3000/auth", { idToken });

    if (res.data.success === true) {
      localStorage.setItem("credential", response.credential);
      localStorage.setItem("email", res.data.user.userEmail);
      localStorage.setItem("name", res.data.user.userName);
      await router.push("/home"); // Use await to ensure the navigation completes before proceeding
    }
  } catch (error) {
    console.error("Error occurred during POST request:", error);
  }
};
</script>

<style scoped>
.cont{
  margin: auto;
  margin-top: 16%;
}
.logo {
  margin: auto;
  font-size: 50px;
  text-shadow:
    1px 1px 0 #66c2ff,
    2px 2px 0 #0e06fd,
    3px 3px 0 #ed2aff;
  color: transparent; /* Make the original text color transparent */
}

.logo:hover {
  color: #b42aff;
}
a {
  text-decoration: none;
  color: grey;
  font-size: 12px;
}
</style>
