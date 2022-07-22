import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      //modal
      load_modal: 0,
      //page
      header_clicked: [1, 0, 0, 0, 0, 0],
      page_clicked: [1, 0, 0, 0, 0, 0],
      menu_clicked: [0, 0, 0, 0, 0],
    };
  },
  mutations: {
    load_off(state) {
      state.load_modal = 1;
    },
    header_click(state, payload) {
      for (let i = 0; i < state.header_clicked.length; i++) {
        if (i <= payload) {
          state.page_clicked[i] = 1;
        } else {
          state.page_clicked[i] = 0;
        }
        if (i == payload) {
          state.header_clicked[i] = 1;
        } else {
          state.header_clicked[i] = 0;
        }
      }
    },
    menu_click(state, payload) {
      for (let i = 0; i < state.menu_clicked.length; i++) {
        if (payload == i) {
          if (state.menu_clicked[i] == 1) {
            state.menu_clicked[i] = 0;
          } else {
            state.menu_clicked[i] = 1;
          }
        } else {
          state.menu_clicked[i] = 0;
        }
      }
    },
  },
});

export default store;
