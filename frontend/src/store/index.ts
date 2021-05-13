import { createStore } from 'vuex'

const defaultState = {
  loginState: false
}

export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    login(state: typeof defaultState) {
      state.loginState = true
    },
    logout(state: typeof defaultState) {
      state.loginState = false
    }
  },
  actions: {
    login(context) {
      context.commit('login')
    },
    logout(context) {
      context.commit('logout')
    }
  },
  getters: {}
})
