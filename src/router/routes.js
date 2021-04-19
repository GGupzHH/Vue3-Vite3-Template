import { defineAsyncComponent } from 'vue'

const Layout = () => import('../components/Layout/index.vue')

// 动态路由加载方式 defineAsyncComponent
const importModule = (filePath) => {
  return defineAsyncComponent(() => import(`../modules/${filePath}`))
}

/**
 * 为渲染菜单添加的测试路由
 * hiddenMenu: true 表示不在菜单中显示
 * 若含有 children 路由，则需要将 redirect 设置为 children[0] 的 path 路径
 */

const routes = [
  {
    path: '/',
    redirect: '/demo-test'
  },
  {
    path: '/demo-test',
    component: Layout,
    name: 'DemoTest',
    icon: 'el-icon-attract',
    meta: {
      title: 'demo 管理'
    },
    hiddenMenu: true,
    redirect: '/demo-test/list',
    children: [
      {
        path: 'list',
        name: 'DemoTestList',
        component: importModule('DemoTest/pages/list.vue'),
        meta: {
          title: 'demo列表'
        }
      },
      {
        path: 'show',
        name: 'DemoTestLoadingShow',
        component: importModule('DemoTest/pages/loading-show.vue'),
        meta: {
          title: 'demo-loading-show'
        }
      },
      {
        path: 'hide',
        name: 'DemoTestLoadingHide',
        component: importModule('DemoTest/pages/loading-hide.vue'),
        meta: {
          title: 'demo-loading-hide'
        }
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    hiddenMenu: true,
    component: defineAsyncComponent(() => import('../components/404.vue'))
  }
]
export default routes
