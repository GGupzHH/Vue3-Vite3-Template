// import ModalWrapper from '@/widgets/ModalWrapper'
// import ModalPrompt from '@/widgets/ModalPrompt'
import ModalWrapper from './ModalWrapper'
import ModalPrompt from './ModalPrompt'

export default {
  install (Vue) {
    Vue.use(ModalWrapper)
    Vue.use(ModalPrompt)
  }
}
