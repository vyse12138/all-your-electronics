<template>
  <div>
    <h1>Order History</h1>
    <el-table :data="order" empty-text="You have no order">
      <el-table-column sortable prop="Id" label="Order ID"> </el-table-column>
      <el-table-column sortable prop="Price" label="Price($)">
      </el-table-column>
      <el-table-column sortable prop="Products" label="Products">
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { reactive } from 'vue'
import type PurchaseRecord from '../interfaces/PurchaseRecord'
import axios from 'axios'

ref: message = ''
const store = useStore()
const router = useRouter()
const order = reactive(Array<PurchaseRecord>())
axios
  .post('http://localhost:3000/api/order', { username: store.state.username })
  .then((res) => {
    console.log(res.data)
    for (const o of res.data) {
      order.push(o)
    }
  })
</script>
