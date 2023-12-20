import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router'; 

export default createStore({
  modules: {
  },
  
  state: {
    url: 'http://localhost:3000/',
    roomId: '',
    roomPassKey: '',
    messages: [],

  },
  mutations: {
    roomCodeMutation(state, value) {
      state.roomId = value.roomId;
      state.roomPassKey = value.passkey;
//     },
 socket2
    setPassKey(state,key){
      state.roomPassKey=key;
    setMessagesMutation(state, value) {
      console.log(value);
      state.messages = value;
    }
  },
  actions: {
    async joinRoomAction({ state, commit }, value) {
      
    },

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

 socket2
    async getPassKey({state,commit},roomId){
      console.log("122142515")
      const email = localStorage.getItem("email");
      try{
        const res = await axios.post(`${state.url}getKey`,{
          email,
          roomId
        });
        console.log("**********",res)
        commit('setPassKey',res.data);
      }catch(error){
        console.log(error)
    async getMessages({ state, commit }, value) {
      // console.log(value.roomId);
      // console.log(value.userEmail);
      if (value) {
        try {
          const res = await axios.get(`${state.url}getMessages`, {
            params: {
              roomId: value.roomId,
              userEmail: value.userEmail
            }
          });
          if (res.data) {
            console.log(res.data);
            commit('setMessagesMutation', res.data)
          }
        }catch(err){console.error(err);}
      }
    }
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
    messagesGetter(state) {
      console.log(state.messages);
      return state.messages;
    }
  }


})
