import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: "/:abc(.*)*",
    component: () => import("views/404.vue")
  },
  {
    path: "/:params",
    component: () => import("../components/paramsRoute/paramsRouteTwo.vue")
  },
  {
    // \d+ 正则匹配数字 如果是字符串需要添加转义符\
    path: "/:id(\\d+)",
    component: () => import("../components/paramsRoute/paramsRouteOne.vue")
  },

  {
    path: "/",
    component: () => import("views/index.vue")
  },
  {
    path: "/test",
    component: () => import("views/test.vue"),
    children: [
      {
        path: "a/bb",
        component: () => import("../components/ChildRoute.vue")
      },
      {
        path: "1",
        component: () => import("../components/ChildRoute.vue")
      }
    ]
  },
  {
    path: "/test/:id",
    component: () => import("../components/ChildRoute.vue"),
    children: [
      {
        path: "a/bb",
        component: () => import("../components/ChildRoute.vue")
      }
    ]
  },
  {
    path: "/test2",
    component: () => import("views/TestTwo.vue")
  },
  {
    path: "/hooks",
    component: () => import("views/hooks.vue")
  },
  {
    path: "/autoimport",
    component: () => import("views/autoImport.vue")
  },
  {
    path: "/upload",
    component: () => import("views/Upload.vue")
  },
  {
    path: "/path1/path2",
    children: [
      {
        path: "path3",
        component: () => import("views/path.vue")
      }
    ]
  },
  {
    path: "/updated",
    component: () => import("views/update.vue")
  }
]
const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})
export default router
