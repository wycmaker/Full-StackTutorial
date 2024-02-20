import { createRouter, createWebHashHistory } from 'vue-router'

// 引入路由頁面
import BasicHeader from '@/layouts/BasicHeader.vue'
import AboutPage from '@/components/AboutPage.vue'
import AboutPageByJS from '@/components/AboutPageByJS.vue'
import DetailPage from '@/components/DetailPage.vue'
const IndexPage = () => import('@/components/IndexPage.vue')

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      // component: IndexPage
      components: {
        header: BasicHeader,
        default: IndexPage
      }
    },
    {
      path: '/about',
      components: {
        header: BasicHeader,
        default: AboutPageByJS
      },
      children: [
        {
          path: 'detail/:title/:content',
          component: DetailPage,
          // 設定為true => 將route.params內容傳遞給組件定義的props
          // props: true
          // 透過函式指定要傳給組件props的內容
          props: (route) => route.query
        }
      ]
    },
    // {
    //   path: '/about',
    //   components: {
    //     header: BasicHeader,
    //     default: AboutPage
    //   },
    //   children: [
    //     {
    //       path: 'detail',
    //       component: DetailPage,
    //       // 設定為true => 將route.params內容傳遞給組件定義的props
    //       // props: true
    //       // 透過函式指定要傳給組件props的內容
    //       props: (route) => route.query
    //     }
    //   ]
    // }
  ]
})

export default router
