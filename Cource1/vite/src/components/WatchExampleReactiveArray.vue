<template>
  <div>
    <h1>reactive定義陣列</h1>
    <h2>排隊順序為：{{ orderList.map(r => r.name).join('=>') }}</h2>
    <button @click="changeFirst">替換第一位</button>
    <button @click="changeOrder">更改順序</button>
    <button @click="insertPerson">插隊</button>
    <button @click="changeAll">替換隊伍</button>
  </div>
</template>

<script setup>
  import { reactive, watch } from 'vue'

  const orderList = reactive([ 
    { name: '小明' }, 
    { name: '小華' } , 
    { name: '小美' } ])

  const changeFirst = () => {
    orderList[0].name = '小張'
  }

  const changeOrder = () => {
    orderList.reverse()
  }

  const insertPerson = () => {
    orderList.splice(2, 0, { name: '小李' })
  }

  const changeAll = () => {
    orderList.splice(0)
    Object.assign(orderList, [ 
    { name: '小李' }, 
    { name: '小華' } , 
    { name: '小美' } ])
  }

  // 使用reactive定義的數據使用watch時，預設會啟用深度監聽，可以透過配置項手動關閉
  watch(orderList, (newValue, oldValue) => {
    console.log('預設', newValue, oldValue)
  })

  watch(orderList, (newValue, oldValue) => {
    console.log('關閉深度監聽', newValue, oldValue)
  }, {
    deep: false
  })

</script>

<style lang="scss" scoped>

</style>