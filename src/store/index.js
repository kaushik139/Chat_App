import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    url: 'http://localhost:3000/',
    roomCode: '',

  },
  getters: {
    roomCodeGetter(state) {
      return state.roomCode;
    },
  },
  mutations: {
    roomCodeMutation(state, value) {
      state.roomCode = value;
    },
  },
  actions: {

    async createRoomAction({ state }) {
        const credential = localStorage.getItem('credential');
        const email = localStorage.getItem('email');
        console.log(`${state.url}createroom`);
        try {
          const res = await axios.post(`${state.url}createroom`, {
            credential: credential,
            email: email
          });
          if (res) {
            console.log(res);
          }
        }catch(err){console.error(err);}
    },
  },
  modules: {
  }
})
