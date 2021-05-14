import { createStore } from 'vuex'
import type Product from '../interfaces/Product'
import type CartItem from '../interfaces/CartItem'
const defaultState = {
  loginState: false,
  cart: Array<CartItem>()
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
      let done = false
      for (const item of state.cart) {
        if (item.name === product.name && !done) {
          item.price += product.price
          item.quantity++
          done = true
        }
      }
      if (!done) {
        state.cart.push({
          name: product.name,
          price: product.price,
          quantity: 1
        })
      }
    },
    removeFromCart(state: typeof defaultState, item: CartItem) {
      state.cart = state.cart.filter((cartItem) => {
        return cartItem.name !== item.name
      })
    },
    addOne(state: typeof defaultState, item: CartItem) {
      for (const cartItem of state.cart) {
        if (item.name === cartItem.name) {
          const price = item.price / item.quantity
          cartItem.price += price
          cartItem.quantity++
        }
      }
    },
    removeOne(state: typeof defaultState, item: CartItem) {
      for (const cartItem of state.cart) {
        if (item.name === cartItem.name) {
          if (cartItem.quantity === 1) {
            state.cart = state.cart.filter((cartItem) => {
              return cartItem.name !== item.name
            })
          } else {
            const price = item.price / item.quantity
            cartItem.price -= price
            cartItem.quantity--
          }
        }
      }
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
