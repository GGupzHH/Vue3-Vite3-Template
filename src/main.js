import { createApp } from 'vue'
// import router from '@/router'
// import store from '@/store'
import router from 'router'
import store from 'store'

import App from './App.vue'

import ElementPlus from 'element-plus'
import { sync } from 'vuex-router-sync'
import GlobalComponents from 'comps'
import Mixin from './mixins'
import Widgets from './widgets'

const app = createApp(App)

app
  .use(store)
  .use(router)

sync(store, router)

app
  .use(ElementPlus, {
    size: 'small'
  })
  .use(GlobalComponents)
  .use(Widgets)
  .mixin(Mixin)
  .mount('#app')

export default app
