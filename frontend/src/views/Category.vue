<template>
  <div>
    <div class="title">
      <h1>{{ $route.params.name }}</h1>
      <div v-for="product in products">
        {{ product.name }}: ${{ product.price }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const catelog = route.params.name

interface T {
  name: string
  price: number
}
const products: Array<T> = reactive([])

axios.get(`http://localhost:3000/api/catelog/${catelog}`).then((res) => {
  res.data.map((e: T) => {
    products.push(e)
  })
})
</script>
