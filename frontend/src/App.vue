<template>
  <nav>
    <el-menu default-active="/" mode="horizontal" router>
      <el-menu-item index="/"> Home </el-menu-item>
      <el-menu-item index="/admin"> Admin </el-menu-item>
      <el-menu-item index="/cart"> Cart </el-menu-item>
      <el-menu-item index="/chat"> Chat</el-menu-item>

      <!-- <el-menu-item index="/login"> Login </el-menu-item> -->
      <el-menu-item v-if="store.state.loginState" index="/user" id="user">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </el-menu-item>
      <el-menu-item v-else index="/login" id="user">
        <el-avatar class="el-icon-user"></el-avatar>
      </el-menu-item>
    </el-menu>
  </nav>

  <router-view id="r" />
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { ref, reactive } from 'vue'

const store = useStore()
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
#r {
  width: 960px;
  margin: 0 auto;
}
#user {
  float: right;
}
</style>
