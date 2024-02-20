<template>
  <div>
    <h1>關於我們頁面</h1>
    <template v-for="item in itemList">
      <!-- <router-link :to="`/about/detail/${item.title}/${item.content}`">{{ item.title }}</router-link> -->
      <!-- <router-link :to="`/about/detail?title=${item.title}&content=${item.content}`">{{ item.title }}</router-link> -->
      <button @click="changePage(item.title, item.content)">{{ item.title }}</button>
      
    </template>
    <br/>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import { RouterLink, RouterView, useRouter } from 'vue-router'

  const itemList = ref([
    { title: 'item1', content: 'test1' },
    { title: 'item2', content: 'test2' },
    { title: 'item3', content: 'test3' },
  ])


  const router = useRouter()
  const changePage = (title, content) => {
    if(title === 'item1') router.replace(`/about/detail/${title}/${content}`)
    else router.push(`/about/detail/${title}/${content}`)
  }
</script>

<style lang="scss" scoped>

</style>