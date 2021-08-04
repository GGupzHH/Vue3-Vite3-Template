<template>
  <router-link
    to="/"
    class="wrap-navbar"
  >
    <img
      class="logo-img"
      src="@/assets/svg/shinewing-dark.svg"
      alt="LOGO"
    >
    <h1 class="logo-title">
      舞弊识别工具
    </h1>
  </router-link>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'NavBar',
  components: {},
  props: {

  },
  setup () {
    // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()

    return {
    }
  }
})
</script>

<style scoped lang="scss">
.wrap-navbar {
  flex: 1;
  display: flex;
  align-items: center;
  .logo-img {
    width: 56px;
    height: 34px;
  }
  .logo-title {
    font-size: 14px;
    padding-left: 16px;
    color: #303133;
  }
}
</style>
