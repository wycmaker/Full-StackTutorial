<template>
  <div>
    <h1>ref定義陣列</h1>
    <h2>排隊順序為：{{ orderList.join('=>') }}</h2>
    <button @click="changeFirst">替換第一位</button>
    <button @click="changeOrder">更改順序</button>
    <button @click="insertPerson">插隊</button>
    <button @click="changeAll">替換隊伍</button>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'

  const orderList = ref([ '小明', '小華', '小美' ])

  const changeFirst = () => {
    orderList.value[0] = '小張'
  }

  const changeOrder = () => {
    orderList.value = orderList.value.reverse()
  }

  const insertPerson = () => {
    orderList.value.splice(2, 0, '小李')
  }

  const changeAll = () => {
    orderList.value = [ '小李', '小華', '小美' ]
  }

  // 監聽陣列第一個數值
  watch(() => orderList.value[0], (newValue, oldValue) => {
    console.log('watch first', newValue, oldValue)
  })

  // 透過getter函數監聽整體物件，僅替換整體物件時才會觸發
  watch(() => orderList.value, (newValue, oldValue) => {  // watch(orderList, (...))
    console.log('watch all', newValue, oldValue)
  })

  // 深度監聽，有任何變更接觸發改變
  watch(orderList, (newValue, oldValue) => {
    console.log('watch all deep', newValue, oldValue)
  }, {
    deep: true
  })

</script>

<style lang="scss" scoped>

</style>