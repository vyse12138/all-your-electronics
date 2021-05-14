<template>
  <div>
    <h1>Order History</h1>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
ref: message = ''
const store = useStore()
const router = useRouter()
</script>
