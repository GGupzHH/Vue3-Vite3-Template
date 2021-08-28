<template>
  <router-view />
  <!-- <el-config-provider :locale="lang">
  </el-config-provider> -->
</template>

<script>
// import { ElConfigProvider, useLocaleInject } from 'element-plus'
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import en from 'element-plus/lib/locale/lang/en'
import zhTw from 'element-plus/lib/locale/lang/zh-tw'
import { computed, reactive, ref } from '@vue/reactivity'
import { getCurrentInstance } from '@vue/runtime-core'
import { useStore } from 'vuex'

const useLanguage = (store) => {
  const lang = computed(() => {
    let lang = null
    lang = {
      ...zhCn,
      message: {
        pl: '项目列表',
        pc: '新建项目'
      }
    }
    // switch (store.state.UserAccount.lang) {
    //   case 'zh-Cn':
    //     lang = {
    //       ...zhCn,
    //       message: {
    //         pl: '项目列表',
    //         pc: '新建项目'
    //       }
    //     }
    //     break
    //   case 'en-US':
    //     lang = {
    //       ...en,
    //       message: {
    //         pl: 'Project List',
    //         pc: 'Create Project'
    //       }
    //     }
    //     break
    //   case 'zh-Tw':
    //     lang = {
    //       ...zhTw,
    //       message: {
    //         pl: '項目列表',
    //         pc: '創建項目'
    //       }
    //     }
    //     break
    // }
    return lang
  })
  console.log(lang)
  return {
    lang
  }
}

export default {
  name: 'App',
  components: {
    // ElConfigProvider
  },
  setup () {
    const store = useStore()
    return {
      ...useLanguage(store)
    }
  }
}
</script>

<style lang="sass">
@import '@/styles/index.scss'
</style>
