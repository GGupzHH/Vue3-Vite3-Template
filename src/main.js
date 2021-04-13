import { createApp } from 'vue'
import router from '@/router'
import store from '@/store'

import App from './App.vue'

// import widgets from './widgets'


createApp(App)
  // .use(widgets)
  .use(store)
  .use(router)
  .mount('#app')
