import { createStore } from 'vuex'
import type Product from '../interfaces/Product'
import type CartItem from '../interfaces/CartItem'
const defaultState = {
  loginState: false,
  adminState: false,
  cart: Array<CartItem>(),
  username: ''
}

export default createStore({
  state() {
    return defaultState
  },
  mutations: {
    admin(state: typeof defaultState) {
      state.adminState = true
    },
    login(state: typeof defaultState, username: string) {
      state.loginState = true
      state.username = username
    },
    logout(state: typeof defaultState) {
      state.loginState = false
      state.username = ''
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
    clearCart(state: typeof defaultState) {
      state.cart = []
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
  getters: {
    total(state: typeof defaultState) {
      let total = 0
      for (const cartItem of state.cart) {
        total += cartItem.price
      }
      return total
    }
  }
})
