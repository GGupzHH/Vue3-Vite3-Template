import { defineAsyncComponent } from 'vue'

const Layout = () => import('comps/Layout/index.vue')

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
    path: '/composition',
    component: Layout,
    name: 'Composition',
    icon: 'el-icon-attract',
    meta: {
      title: 'Composition-Api'
    },
    hiddenMenu: true,
    redirect: '/composition/api',
    children: [
      {
        path: 'api',
        name: 'CompositionApi',
        component: () => import('@/modules/DemoTest/pages/composition-api.vue'),
        meta: {
          title: 'Composition-Api'
        }
      }
    ]
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
        component: () => import('modules/DemoTest/pages/list.vue'),
        meta: {
          title: 'demo列表'
        }
      },
      {
        path: 'show',
        name: 'DemoTestLoadingShow',
        component: () => import('@/modules/DemoTest/pages/composition-api.vue'),
        meta: {
          title: 'demo-loading-show'
        }
      },
      {
        path: 'hide',
        name: 'DemoTestLoadingHide',
        component: () => import('modules/DemoTest/pages/loading-hide.vue'),
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
    component: defineAsyncComponent(() => import('comps/404.vue'))
  }
]
export default routes
