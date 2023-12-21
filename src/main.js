import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import vue3GoogleLogin from "vue3-google-login";
import "@fortawesome/fontawesome-free/css/all.css";
import * as moment from "moment";

createApp(App)
  .use(store)
  .use(router)
  .use(bootstrap)
  .use(moment)
  .use(vue3GoogleLogin, {
    clientId:
      "104054768589-ooepq3qbdiefotltottvkj8e723l64vd.apps.googleusercontent.com",
  })
  .mount("#app");
