// const Layout = () => import('@/components/Layout/index')
// const importModule = (filePath) => {
//   return () => import(`@/modules/${filePath}`)
// }
// import a from '../modules/DemoTest/pages/list'
// import b from '../modules/DemoTest/pages/loading-show./vue'
// import c from '../modules/DemoTest/pages/loading-hide.vue'
const Layout = () => import('../components/Layout/index.vue')
// const importModule = (filePath) => {
//   return () => import(`../modules/${filePath}`)
// }

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
    children: [
      {
        path: 'list',
        name: 'DemoTestList',
        component: Layout,
        meta: {
          title: 'demo列表'
        }
      },
      {
        path: 'show',
        name: 'DemoTestLoadingShow',
        component: Layout,
        meta: {
          title: 'demo-loading-show'
        }
      },
      {
        path: 'hide',
        name: 'DemoTestLoadingHide',
        component: Layout,
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
    // component: () => import('@/components/404')
    component: () => import('../components/404.vue')
  }
]
export default routes
