import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router'; 

export default createStore({
  state: {
    url: 'http://localhost:3000/',
    roomId: '',
    roomPassKey: '',

  },
  getters: {
    roomCodeGetter(state) {
      // console.log('roomCodeGetter called:- '+state.roomId);
      // console.log('roomCodeGetter called:- '+state.roomPassKey);
      const roomCode = {
        roomId: state.roomId,
        roomPassKey: state.roomPassKey
      }
      return state.roomCode;
    },
  },
  mutations: {
    roomCodeMutation(state, value) {
      state.roomId = value.roomId;
      state.roomPassKey = value.passkey;
    },
  },
  actions: {

    async createRoomAction({ state, commit }) {
        const credential = localStorage.getItem('credential');
        const email = localStorage.getItem('email');
        // console.log(`${state.url}createroom`);
        try {
          const res = await axios.post(`${state.url}createroom`, {
            credential: credential,
            email: email
          });
          if (res.data.passKey && res.data.roomId) {
            commit('roomCodeMutation', {passkey: res.data.passKey, roomId: res.data.roomId})
            router.push(`/room?roomId=${res.data.roomId}`);
          }
        }catch(err){console.error(err);}
    },
  },
  modules: {
  }
})
