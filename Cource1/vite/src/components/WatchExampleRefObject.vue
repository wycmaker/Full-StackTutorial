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

  // 僅修改整體person對象時可觸發
  watch(person, (newValue, oldValue) => {
    console.log('nromal',newValue, oldValue)
  })

  /**
   * 加入深度監聽的設定，修改任一屬性都會觸發
   * 單純更改屬性 => 新舊數值為相同的
   * 替換整個物件 => 新舊數值可看出差異
  */
  watch(person, (newValue, oldValue) => {
    console.log('deep', newValue, oldValue)
  }, {
    deep: true
  })

</script>

<style lang="scss" scoped>

</style>