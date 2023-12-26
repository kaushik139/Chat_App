import { createStore } from "vuex";
import axios from "axios";
import router from "@/router";

export default createStore({
  modules: {},
  state: {
    url: "http://localhost:3000/",
    roomId: "",
    roomPassKey: "",
    messages: [],
    selfRooms: [],
    currentRooms:[]
  },
  mutations: {
    roomCodeMutation(state, value) {
      state.roomId = value.roomId;
      state.roomPassKey = value.passkey;
    },
    setPassKey(state, key) {
      state.roomPassKey = key;
    },
    setMessagesMutation(state, value) {
      state.messages = value;
    },
    setSelfRooms(state,value){
      state.selfRooms = value.rooms;
    },
    setCurrentRooms(state,value){
      state.currentRooms = value;
    }
  },
  actions: {
    async joinRoomAction({ state, commit }, value) {
      try {
        const res = await axios.post(`${state.url}join`, {
          roomId: value.roomId,
          roomKey: value.roomKey,
          email: localStorage.getItem("email"),
        });
        return res.data;
      } catch (error) {
        alert("We ran into an error");
      }
    },
    async createRoomAction({ state, commit }) {
      const credential = localStorage.getItem("credential");
      const email = localStorage.getItem("email");
      try {
        const res = await axios.post(`${state.url}createroom`, {
          credential: credential,
          email: email,
        });
        if (res.data.passKey && res.data.roomId) {
          commit("roomCodeMutation", {
            passkey: res.data.passKey,
            roomId: res.data.roomId,
          });
          router.push(`/room?roomId=${res.data.roomId}`);
        }
      } catch (err) {
        console.error(err);
      }
    },
    async getPassKey({ state, commit }, roomId) {
      const email = localStorage.getItem("email");
      try {
        const res = await axios.post(`${state.url}getKey`, {
          email: email,
          roomId: roomId,
        });
        commit("setPassKey", res.data);
      } catch (error) {
      }
    },
    async getMessages({ state, commit }, value) {
      if (value) {
        try {
          const res = await axios.post(`${state.url}getMessages`, {
            roomId: value.roomId,
            userEmail: value.userEmail,
          });
          if (res.data) {
            const messages = res.data.map((x) => {
              return {
                name: x.name,
                msg: x.message,
                timeStamp: x.created_at,
              };
            });
            commit("setMessagesMutation", messages);
          }
        } catch (err) {
        }
      }
    },

    async getRooms({state,commit}){
      const res = await axios.post(`${state.url}getRooms`,{
        email:localStorage.getItem("email")
      })
      return res.data
      // commit("setSelfRooms",res.data)
    },

    async getCurrentRooms({state,commit}){
      const res = await axios.post(`${state.url}userRooms`,{
        userId:localStorage.getItem("email")
      })
      console.log(res)
      commit("setCurrentRooms",res.data);
    }
  },
  getters: {
    roomCodeGetter(state) {
      const roomCode = {
        roomId: state.roomId,
        roomPassKey: state.roomPassKey,
      };
      return roomCode;
    },
    messagesGetter(state) {
      return state.messages;
    },
  },
});
