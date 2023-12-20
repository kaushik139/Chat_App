<template>
  <div class="container">
    <h1>Auth View</h1>
    <div class="row justify-content-center m-6">
      <div class="col-md-6">
        <div class="card p-4">
          Connect easily with:
          <button
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
          </button>

          <GoogleLogin class="my-2 mx-auto p-0 border-2" :callback="callback" auto-login />
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
    // console.log("Handle the response", response);
    // Ensure that response.credential contains the ID token
    const idToken = response.credential; // Replace with the correct property containing the ID token
    // Make a POST request to your backend
    const res = await axios.post("http://localhost:3000/auth", { idToken });

    // console.log(res.data);
    // console.log("Handle the response", response.credential);
    // console.log(res.data.user.userEmail);
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
</style>
  