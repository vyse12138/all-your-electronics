<template>
  <div v-if="store.state.adminState">
    <el-menu default-active="/" mode="horizontal" router>
      <el-menu-item index="/admin/products"> View Products </el-menu-item>
      <el-menu-item index="/admin/orders"> View Orders </el-menu-item>
      <el-menu-item index="/admin/new"> New Products </el-menu-item>

      <el-menu-item index="/admin/feedback"> Customer Feedbacks </el-menu-item>
      <el-menu-item index="/admin/report"> Report </el-menu-item>
    </el-menu>

    <router-view></router-view>
  </div>
  <div v-else>
    <h2>Log In</h2>
    <el-input v-model="username" placeholder="Username"></el-input>
    <br />
    <br />
    <el-input
      v-model="password"
      placeholder="Password"
      show-password
    ></el-input>
    <br />
    <br />
    <el-button type="primary" @click="handleLogin"> Log In </el-button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
ref: username = ''
ref: password = ''

const handleLogin = () => {
  axios
    .post('http://localhost:3000/api/login/admin', {
      username: username,
      password: password
    })
    .then((res) => {
      if (res.data) {
        store.commit('admin')
        ElMessage({
          duration: 1200,
          type: 'success',
          message: `Admin login success!`
        })
        router.push('/admin/products')
      } else {
        ElMessage({
          duration: 1200,
          type: 'error',
          message: `Admin username or password is invalid!`
        })
      }
    })
}
</script>

<style scoped>
.el-input {
  width: 300px;
}
</style>
