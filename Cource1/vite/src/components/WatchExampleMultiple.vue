<template>
  <div>
    <h2>點擊次數：{{ sum }}</h2>
    <button @click="addHitCount">點擊</button>
    <h2>The brand of Jackson's Car is {{ car.brand }}, it cost {{ car.price }}, it's {{ car.color }} car.</h2>
    <button @click="changeColor">變換顏色</button>
    <button @click="costPrice">折舊</button>
  </div>
</template>

<script setup>
  import { ref, reactive, watch } from 'vue'

  const sum = ref(0)

  const car = reactive({
    brand: 'kia',
    price: 1200000,
    color: 'white'
  })

  const addHitCount = () => {
    sum.value++
  }

  const changeColor = () => {
    car.color = 'black'
  }

  const costPrice = () => {
    car.price -= 50000
  }

  watch([sum, car, () => car.color], (newValue, oldValue) => {
    console.log(newValue, oldValue)
  })

</script>

<style lang="scss" scoped>

</style>