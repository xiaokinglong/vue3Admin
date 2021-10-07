import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      theme: false,
    };
  },
  mutations: {
    changeTheme(state, payload) {
      console.log(payload);
      state.theme = payload;
      console.log(state)
    },
  },
});

export default store;
