<template>
  <div style="margin: 5px;border: 1px solid #000000;background-color: aquamarine;padding: 15px;min-height: 200px;display: block;">
    <p>Jack is {{ age }} years old.</p>
    <p>Is he a old man? {{ isOldMan }}</p>
    <p>Is he a old man? {{ isOldMan }}</p>
    <p>Is he a old man? {{ isOldMan }}</p>
    <p>Is he a old man? {{ oldManCheck() }}</p>
    <p>Is he a old man? {{ oldManCheck() }}</p>
    <p>Is he a old man? {{ oldManCheck() }}</p>
    <button type="button" @click="addAge">增加年齡</button>
  </div>
  <div style="margin: 5px;border: 1px solid #000000;background-color: aquamarine;padding: 15px;min-height: 200px;display: block;">
    <p>Jack is {{ bindValue }} years old.</p>
    <p>Is he a old man? {{ isOldMan }}</p>
    <p>Is he a old man? {{ isOldMan }}</p>
    <p>Is he a old man? {{ isOldMan }}</p>
    <p>Is he a old man? {{ oldManCheck() }}</p>
    <p>Is he a old man? {{ oldManCheck() }}</p>
    <p>Is he a old man? {{ oldManCheck() }}</p>
    <button type="button" @click="addAgeByComputed">增加年齡</button>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';

  const age = ref(50)

  const isOldMan = computed(() => {
    console.log('computed')
    return age.value > 60 ? 'Yes' : 'No'
  })

  const oldManCheck = () => {
    console.log('method')
    return age.value > 60 ? 'Yes' : 'No'
  }

  const addAge = () => {
    age.value += 5
  }

  const bindValue = computed({
    get() {
      return age.value
    },
    set(updateValue) { // 更新後數值
      age.value = updateValue
    }
  })

  const addAgeByComputed = () => {
    bindValue.value += 5
  }
</script>

<style lang="scss" scoped>

</style>