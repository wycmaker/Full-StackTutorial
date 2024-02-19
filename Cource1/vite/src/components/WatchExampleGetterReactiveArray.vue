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
    orderList.splice(2, 0,  {name: '小李'})
  }

  const changeAll = () => {
    orderList.splice(0)
    Object.assign(orderList, [ 
    { name: '小李' }, 
    { name: '小華' } , 
    { name: '小美' } ])
  }

  // 監聽陣列第一個數值，僅替換整體屬性才觸發
  watch(() => orderList[0], (newValue, oldValue) => {
    console.log('watch first', newValue, oldValue)
  })

  // 監聽陣列第一個數值(深度監聽)，更改任何屬性或物件皆觸發
  watch(() => orderList[0], (newValue, oldValue) => {
    console.log('watch first with deep', newValue, oldValue)
  }, {
    deep: true
  })

  // 監聽陣列第一個數值的name屬性
  watch(() => orderList[0].name, (newValue, oldValue) => {
    console.log('watch first name', newValue, oldValue)
  })

  // 深度監聽，有任何變更接觸發改變
  watch(orderList, (newValue, oldValue) => {
    console.log('watch all', newValue, oldValue)
  })

</script>

<style lang="scss" scoped>

</style>