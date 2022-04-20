/**
 * plugin single mounted
 */

// import { filterResponse } from '@/store/utils/mixin'
// import router from '@/router'
import { filterResponse } from '@/store/utils/mixin'
import router from 'router'

const piniaPlugins = (context) => {
  context.store.filterResponse = filterResponse
  context.store.router = router
}

export default piniaPlugins
