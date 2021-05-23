<template>
  <div id="chat">
    <h1>Reply your customers</h1>
    <div id="chat">
      <div>
        <h3 v-for="message in chat">
          {{ message }}
        </h3>
      </div>
      <el-input type="textarea" v-model="message" @input="handleInput" rows="5">
      </el-input>
      <br />
      <br />
      <el-button type="primary" :disabled="disable" @click="handleChatSend">
        Send
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import socketio from 'socket.io-client'

const socket = socketio('http://localhost:3000')

socket.on('chat', function (message) {
  chat.push(message)
})

ref: message = ''
ref: chat = Array<string>()
ref: disable = true
const store = useStore()
const router = useRouter()

const handleInput = () => {
  disable = message.length ? false : true
}

const handleChatSend = () => {
  socket.emit('chat', 'Staff: ' + message)
  message = ''
  disable = true
}
</script>

<style scoped>
#chat {
  margin: 20px auto;
  width: 480px;
}
#chat {
  text-align: left;
}
</style>
