<template>
  <div style="margin: 5px;border: 1px solid #000000;background-color: aquamarine;padding: 15px;height: 200px;display: block;">
    <h2>Current Count: {{ count }}</h2>
    <button type="button" @click="addCount">增加</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)

const addCount = () => {
  count.value++
}
</script>

<style lang="scss" scoped>

</style>