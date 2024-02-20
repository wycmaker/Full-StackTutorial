<template>
  <div>
    <h1>我是細節</h1>
    <p>Title is {{ props.title }}</p> 
    <p>Content is {{ props.content }}</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    }
  })
</script>

<style lang="scss" scoped>

</style>