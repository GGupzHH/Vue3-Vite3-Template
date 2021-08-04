<template>
  <div class="wrap-user-account">
    <img
      class="logo-img"
      src="@/assets/svg/user.svg"
      alt="user"
    >
    <el-dropdown
      trigger="click"
      class="wrap-user-info"
    >
      <span class="el-dropdown-link">
        郝子萌<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item class="wrap-user">
            <h1>黄金糕</h1>
            <p>1239303333939@qq.com</p>
          </el-dropdown-item>
          <el-dropdown-item
            divided
            class="wrap-logout"
            @click="handleLogout"
          >
            退出
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'

// user
const useUserInfo = () => {
  const getUserInfor = () => {}

  const handleLogout = () => {
    console.log('退出')
  }
  return {
    handleLogout
  }
}

export default defineComponent({
  name: 'UserAccount',
  components: {},
  props: {},
  setup () {
    // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()

    return {
      ...useUserInfo()
    }
  }
})
</script>

<style scoped lang="scss">
.wrap-user-account {
  display: flex;
  align-items: center;
  .logo-img {
    width: 12px;
    height: 12px;
  }
  :deep() {
    .wrap-user-info {
      padding-left: 2px;
    }
  }
  .wrap-user-info {
    .el-dropdown-link {
      cursor: pointer;
    }
  }
}
</style>
