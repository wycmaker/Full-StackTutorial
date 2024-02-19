<template>
  <div>
    <h1>ref定義物件</h1>
    <h2>{{ person.name }} is {{ person.age }} years old</h2>
    <button @click="changeName">更改名字</button>
    <button @click="changeAge">更改年齡</button>
    <button @click="changePerson">換人</button>
  </div>
</template>

<script setup>
  import { ref, watch } from 'vue'

  const person = ref({
    name: 'Jackson',
    gender: 'male',
    age: 26
  })

  const changeName = () => {
    person.value.name = 'Alex'
  }

  const changeAge = () => {
    person.value.age++
  }

  const changePerson = () => {
    person.value = { name: 'Ben', gender: 'male', age: 30 }
  }

  // 監聽name屬性變更
  watch(() => person.value.name, (newValue, oldValue) => {
    console.log('watch name', newValue, oldValue)
  })

  // 監聽age屬性變更
  watch(() => person.value.age, (newValue, oldValue) => {
    console.log('watch age', newValue, oldValue)
  })

  // 透過getter函數監聽整體物件，僅替換整體物件時才會觸發
  watch(() => person.value, (newValue, oldValue) => { // watch(person, (...))
    console.log('watch all', newValue, oldValue)
  })

  // 深度監聽，有任何變更接觸發改變
  watch(person, (newValue, oldValue) => {
    console.log('watch all deep', newValue, oldValue)
  }, {
    deep: true
  })

</script>

<style lang="scss" scoped>

</style>