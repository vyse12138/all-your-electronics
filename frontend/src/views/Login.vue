<template>
  <div>
    <br />

    <el-input v-model="username" placeholder="Username"></el-input>
    <br />
    <br />
    <el-input
      v-model="password"
      placeholder="Password"
      show-password
    ></el-input>
    <br />

    <el-alert
      v-if="loginFailed"
      :closable="false"
      title="Password does not match!"
      type="error"
    >
    </el-alert>
    <br />

    <el-button type="primary" @click="handleLogin"> Log In </el-button>
    <br />
    <br />
    <router-link to="/signup">
      <el-button plain type="success"> or Sign Up </el-button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
const username = ref('')
const password = ref('')
const loginFailed = ref(false)
const handleLogin = () => {
  axios
    .post('http://localhost:3000/api/login', {
      username: username.value,
      password: password.value
    })
    .then((res) => {
      console.log(res.data)
      loginFailed.value = !res.data
    })
}
</script>

<style scoped></style>
