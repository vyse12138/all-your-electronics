<template>
  <div>
    <div class="title">
      <h1>Shopping Cart</h1>
      <el-table :data="store.state.cart" empty-text="Your cart is empty">
        <el-table-column sortable prop="name" label="Product">
        </el-table-column>
        <el-table-column sortable prop="price" label="Price($)">
        </el-table-column>
        <el-table-column sortable prop="quantity" label="Quantity">
        </el-table-column>
        <el-table-column label="Operation">
          <template #default="scope">
            <el-button
              plain
              size="small"
              type="success"
              @click="handleAdd(scope.row)"
              >+ 1
            </el-button>
            <el-button
              plain
              size="small"
              type="warning"
              @click="handleRemove(scope.row)"
              >- 1
            </el-button>
            <el-button
              plain
              size="small"
              type="danger"
              @click="handleDelete(scope.row)"
              >Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <h2>Total: ${{ store.getters.total }}</h2>
      <el-button plain type="primary" @click="handleCheckOut"
        >Check Out</el-button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import type CartItem from '../interfaces/CartItem'
import { useRouter } from 'vue-router'

import axios from 'axios'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
const handleAdd = (item: CartItem) => {
  store.commit('addOne', item)
}
const handleRemove = (item: CartItem) => {
  store.commit('removeOne', item)
}
const handleDelete = (item: CartItem) => {
  store.commit('removeFromCart', item)
}
const handleCheckOut = () => {
  if (store.state.loginState === false || store.state.username === '') {
    ElMessage({
      duration: 1200,
      type: 'error',
      message: `You need to login first! Going to login page...`
    })
    setTimeout(() => {
      router.push('./login')
    }, 1200)
    return
  }
  let data = {
    username: store.state.username,
    price: store.getters.total,
    item: store.state.cart
      .map((item: CartItem) => {
        return item.name
      })
      .join()
  }
  axios.post('http://localhost:3000/api/checkout', data).then(() => {
    store.commit('clearCart')
    ElMessage({
      duration: 2000,
      type: 'success',
      message: `Check out success!`
    })
  })
}
</script>
