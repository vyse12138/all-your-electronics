<template>
  <div id="new">
    <h1>Report</h1>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import axios from 'axios'

ref: product = {
  name: '',
  price: 0,
  category: ''
}
const handleAdd = () => {
  if (product.name === '' || product.category === '' || product.price === 0) {
    ElMessage({
      duration: 1200,
      type: 'error',
      message: `Enter product detail!`
    })
    return
  }

  axios.post('http://localhost:3000/api/product/new', product).then(() => {
    ElMessage({
      duration: 1200,
      type: 'success',
      message: `Add product success!`
    })
  })
}
</script>

<style scoped>
.el-input {
  width: 300px;
}
#new {
  text-align: left;
  padding-left: 300px;
}
</style>
