import FirsetRouterVue from "@/views/router/FirsetRouter.vue"
import RouterTest from "@/views/RouterTest.vue"
import { createWebHistory, createRouter } from "vue-router"
import async from "@/views/asyncVue.vue"
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
    path: "/async",
    // 路由不能使用异步组件
    component: () => import("views/asyncVue.vue")
  },
  {
    // \d+ 正则匹配数字 如果是字符串需要添加转义符\
    path: "/:id(\\d+)",
    component: () => import("../components/paramsRoute/paramsRouteOne.vue")
  },
  {
    path: "/router",
    component: RouterTest,
    children: [
      {
        // path: "/router/child",
        // component: () => import("views/router/FirsetRouter.vue"),
        path: "/router/child",
        component: FirsetRouterVue,
        children: [
          {
            path: "/router/child/child",
            component: () => import("views/router/SecondRouter.vue")
          }
        ]
      }
    ]
  },
  {
    path: "/",
    component: () => import("views/index.vue"),
    children: [
      {
        path: "/r",
        component: () => import("views/RouterTest.vue")
      }
    ]
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
    path: "/test3",
    component: () => import("views/TestThree.vue")
  },
  {
    path: "/test4",
    component: () => import("views/TestFour.vue")
  },
  {
    path: "/test5",
    component: () => import("views/TestFive.vue")
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
  },
  {
    path: "/el-test",
    component: () => import("views/ElTest.vue"),
    children: [
      {
        path: "el-tree",
        component: () => import("views/el/ElTreeTest.vue")
      },
      {
        path: "el-table",
        component: () => import("views/el/ElTableTest.vue")
      },
      {
        path: "el-form",
        component: () => import("views/el/ElFormTest.vue")
      },
      {
        path: "el-skeleton",
        component: () => import("views/el/ElSkeletonTest.vue")
      },
      {
        path: "el-input-number",
        component: () => import("views/el/ElInputNumberTest.vue")
      }
    ]
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
