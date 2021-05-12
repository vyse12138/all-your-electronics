<template>
  <div>
    <br />

    <el-input v-model="username" placeholder="Username" clearable></el-input>
    <br />
    <br />
    <el-input
      v-model="password"
      placeholder="Password"
      show-password
    ></el-input>
    <br />
    <br />
    <el-button @click="handleOnClick"> Login in </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
const username = ref('')
const password = ref('')
const handleOnClick = () => {
  axios.post('http://localhost:3000/').then((res) => {
    console.log(res.data)
  })
}
</script>

<style scoped>
.el-input {
  width: 30%;
}
</style>
