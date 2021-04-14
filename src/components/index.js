// Vue Component Install
import IconFont from '@/components/IconFont'
import OptionsMenu from '@/components/OptionsMenu'

const component = {
  install: function (app) {
    app.component(IconFont.name, IconFont)
    app.component(OptionsMenu.name, OptionsMenu)
  }
}

export default component
