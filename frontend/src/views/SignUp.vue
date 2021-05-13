<template>
  <div>
    <br />
    <el-input
      type="text"
      v-model="username"
      placeholder="Username"
      clearable
    ></el-input>
    <br />
    <br />
    <el-input
      type="text"
      v-model="password"
      placeholder="Password"
      show-password
    ></el-input>
    <br />
    <br />
    <el-input
      type="text"
      v-model="passwordConfirm"
      placeholder="Confirm your password"
      show-password
    ></el-input>
    <br />
    <br />
    <el-alert
      v-if="signupFailed"
      :closable="false"
      title="Username or password is empty!"
      type="error"
    >
    </el-alert>
    <el-alert
      v-if="passwordUnmatched"
      :closable="false"
      title="Password does not match!"
      type="error"
    >
    </el-alert>
    <br />
    <el-button type="success" @click="handleSignUp">Sign Up </el-button>
    <br />
    <br />
    <router-link to="/login">
      <el-button plain type="primary"> or Back to Log In </el-button>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'
const username = ref('')
const password = ref('')
const passwordConfirm = ref('')
const signupFailed = ref(false)
const passwordUnmatched = ref(false)
const handleSignUp = () => {
  if (username.value === '' || password.value === '') {
    signupFailed.value = true
    return
  }
  signupFailed.value = false

  if (password.value !== passwordConfirm.value) {
    passwordUnmatched.value = true
    return
  }
  passwordUnmatched.value = false
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

<style scoped></style>
