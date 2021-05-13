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
    <el-alert
      v-if="signUpSuccessed"
      :closable="false"
      title="Sign up success! Returning to login page..."
      type="success"
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
import { useRouter } from 'vue-router'
const router = useRouter()
import axios from 'axios'
const username = ref('')
const password = ref('')
const passwordConfirm = ref('')
const signupFailed = ref(false)
const passwordUnmatched = ref(false)
const signUpSuccessed = ref(false)
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
    .then(() => {
      signUpSuccessed.value = true
      setTimeout(() => {
        router.push('./login')
      }, 2000)
    })
}
</script>

<style scoped>
.el-input {
  width: 300px;
}
.el-alert {
  width: 300px;
  margin: 0 auto;
}
</style>
