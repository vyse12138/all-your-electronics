<template>
  <div>
    <div class="title">
      <h1>Customer Feedbacks</h1>
      <el-table :data="feedbacks" empty-text="There is no feedback">
        <el-table-column prop="id" label="Feedback ID"> </el-table-column>
        <el-table-column prop="username" label="Customer"> </el-table-column>
        <el-table-column prop="feedback" label="Feedback"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type Feedback from '../../interfaces/Feedback'
import axios from 'axios'

const feedbacks = reactive(Array<Feedback>())
axios.get('http://localhost:3000/api/feedbacks').then((res) => {
  for (const feedback of res.data) {
    feedbacks.push(feedback)
  }
})
</script>
