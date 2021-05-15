<template>
  <div id="new">
    <h1>Add a New Product</h1>
    <label>Product name: </label>
    <el-input v-model="product.name"></el-input>
    <br />
    <br />
    <label>Price: </label>
    <el-input
      v-model="product.price"
      placeholder="Product price"
      type="number"
    ></el-input>
    <br />
    <br />

    <label>Category: </label>

    <el-select v-model="product.category" placeholder="category">
      <el-option value="phone">Phone</el-option>
      <el-option value="computer">Computer</el-option>
      <el-option value="TV">TV</el-option>
      <el-option value="camera">Camera</el-option>
      <el-option value="pad">Pad</el-option>
      <el-option value="headphone">Headphone</el-option>
    </el-select>
    <br /><br />
    <el-button @click="handleAdd"> Add Product </el-button>
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
