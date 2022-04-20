import { createApp } from 'vue'

import router from 'router'
import 'router/permission'


import App from './App.vue'

import ElementPlus from 'element-plus'

// import 'element-plus/lib/theme-chalk/index.css'
// element 国际化
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'

import '@/assets/fonts'

import GlobalComponents from 'comps'
import Mixin from './mixins'
import Widgets from './widgets'

import pinia from '@/store'
const app = createApp(App)

app
  .use(pinia)
  .use(router)


app
  .use(ElementPlus, {
    size: 'small',
    locale
  })
  .use(GlobalComponents)
  .use(Widgets)
  .mixin(Mixin)
  .mount('#app')

export default app
