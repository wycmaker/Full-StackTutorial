<template>
  <div>
    <h1>關於我們頁面</h1>
    <template v-for="item in itemList">
      <!-- <router-link :to="`/about/detail/${item.title}/${item.content}`">{{ item.title }}</router-link> -->
      <router-link :to="`/about/detail?title=${item.title}&content=${item.content}`">{{ item.title }}</router-link>
    </template>
    <br/>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { RouterLink, RouterView } from 'vue-router'

  const itemList = ref([
    { title: 'item1', content: 'test1' },
    { title: 'item2', content: 'test2' },
    { title: 'item3', content: 'test3' },
  ])
</script>

<style lang="scss" scoped>

</style>