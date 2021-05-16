<template>
  <div id="new">
    <h1>Report</h1>
    <el-date-picker
      v-model="dateRange"
      type="daterange"
      range-separator="to"
      start-placeholder="start date"
      end-placeholder="end date"
      @change="handleChange"
    >
    </el-date-picker>
    <h2>Product Sold</h2>
    <ul>
      <li v-for="item in report">{{ item[0] }} : {{ item[1] }}</li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { mapActions, useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'
import { reactive } from 'vue'
import type PurchaseRecord from '../../interfaces/PurchaseRecord'
import axios from 'axios'

const orders = reactive(Array<PurchaseRecord>())
axios.get('http://localhost:3000/api/orders').then((res) => {
  for (const o of res.data) {
    orders.push(o)
  }
})

const products = reactive(Array<PurchaseRecord>())
axios.get('http://localhost:3000/api/product').then((res) => {
  for (const p of res.data) {
    products.push(p)
  }
})

ref: report = new Map()
ref: orderInRange = Array<PurchaseRecord>()
ref: dateRange = Array<Date>()

const handleChange = () => {
  orderInRange = orders.filter((order) => {
    return (
      new Date(order.date).valueOf() > dateRange[0].valueOf() &&
      new Date(order.date).valueOf() < dateRange[1].valueOf()
    )
  })

  let allOrder = Array<any>()
  let allProduct = Array<any>()

  orderInRange.forEach((order) => {
    let products = order.products.split(', ')
    allOrder.push(...products)
  })

  allOrder.forEach((order) => {
    allProduct.push(order.split(' x '))
  })
  report = new Map()
  allProduct.forEach((product) => {
    if (report.has(product[1])) {
      report.set(product[1], report.get(product[1]) + Number(product[0]))
    } else {
      report.set(product[1], Number(product[0]))
    }
  })
}
</script>

<style scoped>
li {
  margin-left: 300px;
  text-align: left;
}
</style>
