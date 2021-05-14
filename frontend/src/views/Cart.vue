<template>
  <div>
    <div class="title">
      <h1>{{ store.state.cart }}</h1>

      <el-table :data="store.state.cart" stripe>
        <el-table-column sortable prop="name" label="Product">
        </el-table-column>
        <el-table-column sortable prop="price" label="Price"> </el-table-column>
        <el-table-column sortable prop="quantity" label="Quantity">
        </el-table-column>
        <el-table-column label="Operation">
          <template #default="scope">
            <el-button size="small" type="success" @click="handleAdd(scope.row)"
              >+ 1
            </el-button>
            <el-button
              size="small"
              type="warning"
              @click="handleRemove(scope.row)"
              >- 1
            </el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.row)"
              >Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type CartItem from '../interfaces/CartItem'
import { useStore } from 'vuex'
const store = useStore()
const handleAdd = (item: CartItem) => {
  store.commit('addOne', item)
}
const handleRemove = (item: CartItem) => {
  store.commit('removeOne', item)
}
const handleDelete = (item: CartItem) => {
  store.commit('removeFromCart', item)
}
ref: msg = 'Cart'
</script>
