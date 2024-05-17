import { createWebHashHistory, createRouter } from 'vue-router'

const routes = [
  {
    path: '/:abc(.*)*',
    component:()=>import('views/404.vue')
  },
  {
    path: '/:params',
    component:()=>import('../components/paramsRoute/paramsRouteTwo.vue')
  },
  {
    // \d+ 正则匹配数字 如果是字符串需要添加转义符\
    path: '/:id(\\d+)',
    component:()=>import('../components/paramsRoute/paramsRouteOne.vue')
  },

  {
    path: '/',
    component:()=>import('views/index.vue')
  },
  {
    path: '/test',
    component:()=>import('views/test.vue')
  },
  {
    path: '/autoimport',
    component:()=>import('views/autoImport.vue')
  },
  {
    path: '/upload',
    component:()=>import('views/Upload.vue')
  },
]
const router = createRouter({
  routes,
  history:createWebHashHistory()
})

router.beforeEach((to, from, next) => {
  console.log(to);
  next()
})
export default router