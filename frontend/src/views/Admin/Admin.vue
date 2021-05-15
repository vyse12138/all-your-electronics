<template>
  <div>
    <el-menu default-active="/" mode="horizontal" router>
      <el-menu-item index="/admin/products"> View Products </el-menu-item>
      <el-menu-item index="/admin/orders"> View Orders </el-menu-item>
    </el-menu>

    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('Admin')
</script>
