<template>
  <header class="wrap-navigation">
    <NavBar v-if="!breadcrumb" />
    <BreadCrumbs v-else />
    <UserAccount />
  </header>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
import BreadCrumbs from 'comps/Navigation/BreadCrumbs.vue'
import NavBar from 'comps/Navigation/NavBar.vue'
import UserAccount from 'comps/Navigation/UserAccount.vue'

export default defineComponent({
  name: 'Navigation',
  components: {
    NavBar,
    BreadCrumbs,
    UserAccount
  },
  props: {
    breadcrumb: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {

    // this
    const { ctx, proxy } = getCurrentInstance()
    return {
    }
  }
})
</script>

<style scoped lang="scss">
.wrap-navigation {
  width: 100%;
  height: 56px;
  background-color: #fff;
  padding: 0px 24px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #DCDFE6;
  // position: fixed;
  // top: 0px;
}
</style>
