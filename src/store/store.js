import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    ID: []
  },

  mutations: {
    addID(state, { payload }) {
      state.ID.push(payload);
    },
    deleteID(state,{index}){
        state.ID.splice(index, 1);
    },
    editID(state, {payload}){
        state.ID[payload.index] = {id: payload.id, name: payload.name , url: payload.url};
    }

  },

  actions: {
    addID({ commit }, payload) {
      commit("addID", { payload });
    },
    deleteID({ commit }, index){
        commit("deleteID", { index });
    },
    editID({ commit }, payload){
        commit("editID", { payload })
    }
  },

  getters: {
    ID: state => state.ID
  }
});