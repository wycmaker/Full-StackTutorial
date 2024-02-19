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

  // 監聽name屬性變更
  watch(() => person.name, (newValue, oldValue) => {
    console.log('watch name', newValue, oldValue)
  })

  // 監聽age屬性變更
  watch(() => person.age, (newValue, oldValue) => {
    console.log('watch age', newValue, oldValue)
  })

  // 監聽height屬性變化
  watch(() => person.shape.height, (newValue, oldValue) => {
    console.log('watch height', newValue, oldValue)
  })

  // 透過getter函數監聽整體物件，須設定為deep深度監聽替換物件時才會觸發
  watch(() => person, (newValue, oldValue) => {
    console.log('watch all with getter', newValue, oldValue)
  }, {
    deep: true
  })

  // reactive預設進行深度監聽
  watch(person, (newValue, oldValue) => {
    console.log('watch all deep', newValue, oldValue)
  })

</script>

<style lang="scss" scoped>

</style>