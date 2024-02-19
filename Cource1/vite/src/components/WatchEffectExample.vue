<template>
  <div>
    <h2>點擊次數：{{ sum }}</h2>
    <button @click="addHitCount">點擊</button>
    <h2>The brand of Jackson's Car is {{ car1.brand }}, it cost {{ car1.price }}, it's {{ car1.color }} car.</h2>
    <button @click="changeColor1">變換顏色</button>
    <button @click="costPrice1">折舊</button>
    <h2>The brand of Jackson's Car is {{ car2.brand }}, it cost {{ car2.price }}, it's {{ car2.color }} car.</h2>
    <button @click="changeColor2">變換顏色</button>
    <button @click="costPrice2">折舊</button>
  </div>
</template>

<script setup>
  import { ref, reactive, watch, watchEffect } from 'vue'

  const sum = ref(0)

  const car1 = ref({
    brand: 'honda',
    price: 1000000,
    color: 'white',
    idx: 0
  })

  const car2 = reactive({
    brand: 'kia',
    price: 1200000,
    color: 'white',
    idx: 0
  })

  const addHitCount = () => {
    sum.value++
  }

  const changeColor1 = () => {
    car1.value.color = 'black'
  }

  const costPrice1 = () => {
    car1.value.price -= 50000
  }

  const changeColor2 = () => {
    car2.color = 'black'
  }

  const costPrice2 = () => {
    car2.price -= 25000
  }

  watch([sum, () => car1.value.price, () => car2.price], (newValue) => {
    console.log('watch監聽', newValue)
  })

  watchEffect(() => {
    console.log("watchEffect 監聽 ref 資料 = " + sum.value);
    console.log("watchEffect 監聽 ref 物件 = ", car1.value)
    // console.log("watchEffect 監聽 ref 物件 = ", car1.value.price);
    // console.log("watchEffect 監聽 reactive 物件 = ", car2.price);
    // console.log("watchEffect 監聽 ref 物件 = ", car1.value.color)
  });

</script>

<style lang="scss" scoped>

</style>