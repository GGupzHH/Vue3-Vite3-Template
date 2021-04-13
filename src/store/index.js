import { createStore }  from 'vuex'

/**
 * plugins mount
 */
import plugins from '@/store/plugins'


/**
 * modules mount
 */
import DemoTestModule from '@/modules/DemoTest/store'

const store = createStore({
  modules: {
    DemeTest: DemoTestModule
  },
  plugins
})

export default store
