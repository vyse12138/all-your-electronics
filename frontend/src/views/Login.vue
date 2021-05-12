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
    <el-button type="primary" @click="handleLogin"> Login In </el-button>
    <br />
    <br />
    <el-button type="success" @click="handleSignUp"> Or Sign Up </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
const username = ref('')
const password = ref('')
const handleLogin = () => {
  axios
    .post('http://localhost:3000/api/login', {
      username: username.value,
      password: password.value
    })
    .then((res) => {
      console.log(res.data)
    })
}
const handleSignUp = () => {
  axios
    .post('http://localhost:3000/api/signup', {
      username: username.value,
      password: password.value
    })
    .then((res) => {
      console.log(res.data)
    })
}
</script>

<style scoped>
.el-input {
  width: 30%;
}
</style>
