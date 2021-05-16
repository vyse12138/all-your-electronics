<template>
  <div>
    <h1>Hi, {{ store.state.username }}</h1>

    <h2>If you have any comment, please:</h2>
    <div id="feedback">
      <el-input
        type="textarea"
        placeholder="Please tell us what you think"
        v-model="feedback"
        rows="15"
      >
      </el-input>
      <br />
      <br />
      <el-button @click="handleFeedbackSend">Send your Feedback</el-button>
    </div>

    <el-divider></el-divider>
    <el-button @click="handleLogout" plain type="danger">Log out</el-button>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
ref: feedback = ''
const store = useStore()
const router = useRouter()
const handleLogout = () => {
  store.commit('logout')
  ElMessage({
    duration: 1200,
    type: 'error',
    message: `Logout success! Going to the home page...`
  })
  setTimeout(() => {
    router.push('./')
  }, 1200)
}
const handleFeedbackSend = () => {
  let data = {
    username: store.state.username,
    feedback: feedback
  }
  axios.post('http://localhost:3000/api/feedback', data).then(() => {
    feedback = ''
    ElMessage({
      duration: 1200,
      type: 'success',
      message: `Feedback sent!`
    })
  })
}
</script>

<style scoped>
#feedback {
  margin: 20px auto;
  width: 480px;
}
</style>
