<template>
  <div>
    <h1>{{ person.name }} is {{ person.age }} years old</h1>
    <button @click="changeName">更改名字</button>
    <button @click="changeAge">更改年齡</button>
    <button @click="changeHeight">變矮</button>
    <button @click="changePerson">換人</button>
  </div>
</template>

<script setup>
  import { reactive, watch } from 'vue'

  const person = reactive({
    name: 'Jackson',
    gender: 'male',
    age: 26,
    shape: {
      height: 178,
      weight: 70
    }
  })

  const changeName = () => {
    person.name = 'Alex'
  }

  const changeAge = () => {
    person.age++
  }

  const changeHeight = () => {
    person.shape.height = 175
  }

  const changePerson = () => {
    Object.assign(person, { name: 'Ben', gender: 'male', age: 30, shape: { height: 169, weight: 75 } })
  }

  // 使用reactive定義的數據使用watch時，預設會啟用深度監聽，可以透過配置項手動關閉
  watch(person, (newValue, oldValue) => {
    console.log('預設', newValue, oldValue)
  })

  
  watch(person, (newValue, oldValue) => {
    console.log('關閉深度監聽', newValue, oldValue)
  }, {
    deep: false
  })
</script>

<style lang="scss" scoped>

</style>