import { createStore } from "vuex";
import inventoryModule from "@/store/inventoryModule";
import eggModule from "@/store/eggModule";

export default createStore({
  state: {},
  mutations: {},
  actions: {
    doTick({ commit }) {
      commit(
        "inventoryModule/ADD_ITEM",
        { id: "gold", amount: 1 },
        { root: true }
      );
    }
  },
  getters: {},
  modules: {
    inventoryModule,
    eggModule
  }
});
