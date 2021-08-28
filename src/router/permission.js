import router from '@/router'
import store from '@/store'
import Cookie from 'js-cookie'
import { allowlist } from '@/router/auth-list'
// import HomeModule from '@/modules/Home/store'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  showSpinner: false
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()

  document.title = `${to.meta.title || ''} - 信永中和`
  if (
    allowlist.find(
      name => to.name === name
    )
  ) {
    // return
  }

  next()
  // const { error, data } = await store.dispatch(HomeModule.getAction('getUserInfo'))

  // if (error === 0) {
  //   Cookie.set('name', data.uName)
  //   next()
  //   return
  // }

  // if (error === 401 && !to.query.token) {
  //   Cookie.remove('name')
  //   Cookie.remove('token')
  //   window.location.href = `${import.meta.env.VITE_BASE_API}/login`
  // } else {
  //   const { error, data, msg } = await store.dispatch(HomeModule.getAction('login'), {
  //     ticket: to.query.token
  //   })
  //   if (error) {
  //     alert(msg)
  //     window.location.href = `${import.meta.env.VITE_BASE_API}/login`
  //     return
  //   }

  //   Cookie.set('token', data.authorization)
  //   next()
  // }
})

router.afterEach((to) => {
  NProgress.done()
  // eslint-disable-next-line no-undef
  // if (_hmt) {
  //   if (to.path) {
  //     // eslint-disable-next-line no-undef
  //     _hmt.push(['_trackPageview', to.fullPath])
  //   }
  // }
})
