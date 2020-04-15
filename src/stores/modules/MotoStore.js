import Api from '@/services'

export default {
  namespaced: true,

  state: {
    dataState: {
      list: [],
      detail: null
    }
  },

  getters: {

  },

  mutations: {
    storeDetail (state, payload) {
      state.dataState.detail = payload
    },

    addData (state, payload) {
      state.dataState.list.push(payload)
    },

    storeData (state, payload) {
      state.dataState.list = payload.data
    }

  },

  actions: {

    async getDataList ({ commit }) {
      try {
        let res = await Api.todoList()
        commit('storeData', res)
      } catch (err) {
        throw err
      }
    }
  }

}
