<template>
  <div>
    <h1>ref定義基本數值</h1>
    <h2>Sum is {{ sum }}</h2>
    <button @click="updateSum">增加數值</button>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'

  const sum = ref(0)
  
  const updateSum = () => {
    sum.value++
  }

  const stop = watch(sum, (newValue, oldValue) => {
    console.log(`watch !!\nSum is ${newValue}`)
  }, {
    immediate: true,  // 設為true在頁面渲染時即會觸發一次；設為false需要數據變更才會觸發
    deep: false,
  })

  setTimeout(() => {
    stop()
  }, 1000)
</script>

<style lang="scss" scoped>

</style>