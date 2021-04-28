<template>
  <div>
    <h1>日历组件</h1>
    <Calendar
      :year="2021"
    />
  </div>
</template>

<script>
import {
  defineComponent,
  computed,
  watch,
  getCurrentInstance
} from 'vue'
import { useStore } from 'vuex'
// import DemoTestModule from '@/modules/DemoTest/store'

export default defineComponent({
  name: 'Xx',
  components: {},
  props: {},
  setup () {
    // Vuex store
    const store = useStore()
    const demoList = computed(() => store.state.DemeTest.demoList)

    // watch
    watch(() => demoList, (list, prevList) => {
      /* --- */
    })

    // this
    const { ctx } = getCurrentInstance()
    console.log(ctx)

    return {
      demoList
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
