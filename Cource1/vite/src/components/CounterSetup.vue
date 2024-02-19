<template>
  <div style="margin: 5px;border: 1px solid #000000;background-color: aquamarine;padding: 15px;height: 200px;display: block;">
    <h2>Current Count: {{ obj.count }}</h2>
    <button type="button" @click="addCount">增加</button>
    <button type="button" @click="reset1">重置(更改屬性)</button>
    <button type="button" @click="reset2">重置(更改整體)</button>
    <button type="button" @click="reset3">重置(直接賦值)</button>
    <button type="button" @click="reset4">重置(定義新的reactive)</button>
  </div>
  <div style="margin: 5px;border: 1px solid #000000;background-color: aquamarine;padding: 15px;height: 200px;display: block;">
    <ul>
      <li v-for="item in arr">{{ item }}</li>
    </ul>
    <button type="button" @click="update1">更新(更改屬性)</button>
    <button type="button" @click="update2">更新(更改整體)</button>
    <button type="button" @click="update3">更新(直接賦值)</button>
    <button type="button" @click="update4">更新(定義新的reactive)</button>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// const count = ref(0)

let obj = reactive({ count: 0 })

const addCount = () => {
  obj.count++
}

// 修改屬性
const reset1 = () => {
  obj.count = 0
}

// 修改整體物件
const reset2 = () => {
  Object.assign(obj, { count: 0 })
}

// 直接賦值
const reset3 = () => {
  obj = { count: 0 }
}

// 重新定義reactive
const reset4 = () => {
  obj = reactive({ count: 0 })
}

let arr = reactive([0, 1, 2])

const update1 = () => {
  arr[0] = 3
}

const update2 = () => {
  Object.assign(arr, [5, 6, 7])
}

const update3 = () => {
  arr = [5, 6, 7]
}

const update4 = () => {
  arr = reactive([5, 6, 7])
}

</script>

<style lang="scss" scoped>

</style>