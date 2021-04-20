// Vue Component Install
// import IconFont from '@/components/IconFont'
// import OptionsMenu from '@/components/OptionsMenu'
import IconFont from 'comps/IconFont/index.vue'
import OptionsMenu from 'comps/OptionsMenu/index.vue'

const component = {
  install: function (app) {
    app.component(IconFont.name, IconFont)
    app.component(OptionsMenu.name, OptionsMenu)
  }
}

export default component
