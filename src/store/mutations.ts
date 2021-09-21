const mutations = {
  changeAppTitle(state, payload) => {
    state.app = payload.title;
  }
};

export default mutations