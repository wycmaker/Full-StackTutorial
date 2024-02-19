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

  // 僅修改整體orderList對象時可觸發
  watch(orderList, (newValue, oldValue) => {
    console.log('normal', newValue, oldValue)
  })

  /**
   * 加入深度監聽的設定，修改任一索引或異動排序都會觸發
   * 任一索引或異動排序 => 新舊數值為相同的
   * 替換整個物件 => 新舊數值可看出差異
  */
  watch(orderList, (newValue, oldValue) => {
    console.log('deep', newValue, oldValue)
  }, {
    deep: true
  })

</script>

<style lang="scss" scoped>

</style>