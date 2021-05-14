import { createStore } from 'vuex'
import type Product from '../interfaces/Product'
const defaultState = {
  loginState: false,
  cart: Array<Product>()
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
    },
    addToCart(state: typeof defaultState, product: Product) {
      state.cart.push(product)
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
