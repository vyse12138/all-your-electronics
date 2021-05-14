<template>
  <div>
    <h1>Chat with our staff</h1>
    <div id="chat">
      <el-input type="textarea" v-model="message" rows="5"> </el-input>
      <br />
      <br />
      <el-button @click="handleFeedbackSend">Send</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
ref: message = ''
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

const handleFeedbackSend = () => {}
</script>

<style scoped>
#chat {
  margin: 20px auto;
  width: 480px;
}
</style>
