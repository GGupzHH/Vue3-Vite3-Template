// Vue Component Install
// import IconFont from '@/components/IconFont'
// import OptionsMenu from '@/components/OptionsMenu'
import IconFont from 'comps/IconFont/index.vue'
import OptionsMenu from 'comps/OptionsMenu/index.vue'
import Calendar from 'comps/Calendar/index.vue'

const component = {
  install: function (app) {
    app.component(IconFont.name, IconFont)
    app.component(OptionsMenu.name, OptionsMenu)
    app.component(Calendar.name, Calendar)
  }
}

export default component
