<template>
  <div class="container">
    <h1>Auth View</h1>
    <!-- <LogIN></LogIN>
    <SignUP></SignUP>
    <component :is="authComponent" :key="authComponent"></component> -->

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

          <GoogleLogin :callback="callback" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const callback = (response) => {
  // This callback will be triggered when the user selects or login to
  // his Google account from the popup
  console.log("Handle the response", response);
};
</script>

<!-- <script>
// import LogIN from '../components/Auth/LogIN.vue';
// import SignUP from '../components/Auth/SignUP.vue';
import { googleSdkLoaded } from "vue3-google-login";
import axios from "axios"; -->






  
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
  




// export default {
    //   components: {
    //     // LogIN,
    //     // SignUP
    //   },
    
    //   computed: {
    //     //     authComponent() {
    //     //         return window.location.href.slice(-1) === 'l' ? 'LogIN' : 'SignUP';
    //     // }
    //     },
    
    //   data: () => ({}),
    
    //   methods: {
    //     // connectGoogle() {
    //     //   console.log("connecting with google...");
    //     //     googleSdkLoaded((google) => {
    //     //       google.accounts.oauth2
    //     //         .initCodeClient({
    //     //           client_id: "104054768589-ooepq3qbdiefotltottvkj8e723l64vd.apps.googleusercontent.com",
    //     //             scope: "email profile openid",
    //     //           project_id: "chat-408107",
    //     //           auth_uri: "https://accounts.google.com/o/oauth2/auth",
    //     //           token_uri: "https://oauth2.googleapis.com/token",
    //     //           auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    //     //           client_secret: "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",
    //     //           redirect_uri: "http://localhost:8080/auth",
    //     //           javascript_origin: "http://localhost:8080",
    //     //           callback: (response) => {
    //     //             if (response.code) {
    //     //               this.sendCodeToBackend(response.code);
    //     //             }
    //     //           },
    //     //         })
    //     //         .requestCode();
    //     //     });
    //     // },
    
    //     // async sendCodeToBackend(code) {
    //     //   try {
    //     //     const response = await axios.post(
    //     //       "https://oauth2.googleapis.com/token",
    //     //       {
    //     //         code,
    //     //           "client_id": "104054768589-ooepq3qbdiefotltottvkj8e723l64vd.apps.googleusercontent.com",
    //     //           "project_id": "chat-408107",
    //     //           "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    //     //           "token_uri": "https://oauth2.googleapis.com/token",
    //     //           "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    //     //           "client_secret": "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",
    //     //           "redirect_uri": '["http://localhost:8080/auth"]',
    //     //           "javascript_origin": "http://localhost:8080",
    //     //           grant_type: "authorization_code",
    //     //       }
    //     //     );
    
    //     //     const accessToken = response.data.access_token;
    //     //     console.log(accessToken);
    
    //     //     // Fetch user details using the access token
    //     //     const userResponse = await axios.get(
    //     //       "https://www.googleapis.com/oauth2/v3/userinfo",
    //     //       {
    //     //         headers: {
    //     //           Authorization: `Bearer ${accessToken}`,
    //     //         },
    //     //       }
    //     //     );
    
    //     //     if (userResponse && userResponse.data) {
    //     //       // Set the userDetails data property to the userResponse object
    //     //       this.userDetails = userResponse.data;
    //     //     } else {
    //     //       // Handle the case where userResponse or userResponse.data is undefined
    //     //       console.error("Failed to fetch user details.");
    //     //     }
    //     //   } catch (error) {
    //     //     console.error("Token exchange failed:", error.response.data);
    //     //   }
    //     // },
    
    //     connectLinkedIn() {},
    //   },
    
    //   async mounted() {
    //     // console.log(window.location.href.slice(-1));
    //   },
    // };
    <!-- // </script> -->
    
    // <!-- <script setup>
    // import { googleSdkLoaded } from "vue3-google-login"
    // import { OAuth2Client } from('google-auth-library')
    // import { OAuth2Client } from 'google-auth-library/build/src/auth/oauth2client';
    
    // const client = new OAuth2Client(
    //   {
    //     clientId: "104054768589-ooepq3qbdiefotltottvkj8e723l64vd.apps.googleusercontent.com",
    //     clientSecret: "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",
    //     redirectUri: "http://localhost:8080/auth"
    //   }
    // )
    
    // // Call this function to validate OAuth2 authorization code sent from client-side
    // async function verifyCode(code) {
    //   let { tokens } = await client.getToken(code)
    //   client.setCredentials({ access_token: tokens.access_token })
    //   const userinfo = await client.request({
    //     url: 'https://www.googleapis.com/oauth2/v3/userinfo'
    //   })
    //   return userinfo.data
    // }
    
    // verifyCode("https://accounts.google.com/o/oauth2/auth").then((userInfo) => {
    //   // use userInfo and do your server-side logics here
    // }).catch((error) => {
    //   // validation failed and userinfo was not obtained
    // }) -->
    // <!-- </script> -->