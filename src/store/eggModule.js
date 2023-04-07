import EGG_DATA from "@/data/egg";

const eggModule = {
  namespaced: true,
  state: {
    items: []
  },
  mutations: {
    ADD_ITEM(state, { id, amount }) {
      let index = state.items.findIndex((item) => item.id == id);
      if (state.items[index]) {
        state.items[index].amount += amount;
      } else {
        state.items.push({ id: id, amount: amount });
      }
    }
  },
  actions: {
    addItem({ commit }, { id, amount }) {
      commit("ADD_ITEM", { id, amount });
    },
    upgradeItem({ commit }, { costId, costAmount, upgradeId, upgradeAmount }) {
      const _costAmount = -costAmount;

      commit("ADD_ITEM", { costId, _costAmount });
      commit("ADD_ITEM", { upgradeId, upgradeAmount });
    }
  },
  getters: {
    getAll(state) {
      let items = EGG_DATA.map((_item) => {
        // This is necessary to not alter the static data
        let item = { ..._item };

        // info from the state, append temp. to the object
        let stateItem = state.items.find((i) => i.id == item.id);
        item.amount = stateItem?.amount ?? 0;

        return item;
      });

      return items;
    },
    getItem: (_state, getters) => (id) => {
      const item = getters.getAll.find((item) => item.id == id);
      return item;
    },
    getByType: (_state, getters) => (type) => {
      const item = getters.getAll.filter((item) => item.type == type);
      return item;
    }
  }
};

export default eggModule;
