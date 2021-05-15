<template>
  <div>
    <div class="title">
      <h1>{{ $route.params.name }}</h1>
      <el-divider></el-divider>
      <div v-for="product in products">
        <h2>
          {{ product.name }}
        </h2>
        <h3>Price: ${{ product.price }}</h3>
        <el-button @click="handleAddToCart(product)">Add to Cart</el-button>
        <el-divider></el-divider>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
import type Product from '../interfaces/Product'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'

const store = useStore()
const route = useRoute()
const catelog = route.params.name
const products: Array<Product> = reactive([])

axios.get(`http://localhost:3000/api/catelog/${catelog}`).then((res) => {
  console.log(res.data)
  res.data.map((e: Product) => {
    products.push(e)
  })
})

const handleAddToCart = (product: Product) => {
  store.commit('addToCart', product)
  ElMessage({
    duration: 1200,
    type: 'success',
    message: `${product.name} has been added to the cart`
  })
}
</script>
