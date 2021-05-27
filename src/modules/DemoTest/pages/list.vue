<template>
  <div>
    <h1>日历组件</h1>
    <Calendar
      :year="calendarCurrentYear"
    />
    <h1>日历组件-带区间日期高亮和指定日期错误的配置</h1>
    <Calendar
      :year="calendarCurrentYear"
      :calendar-data="calendarData"
    />
  </div>
</template>

<script>
import {
  defineComponent,
  computed,
  watch,
  getCurrentInstance,
  reactive
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

    // this  ctx并不能在生产环境使用
    const { proxy } = getCurrentInstance()

    const calendarCurrentYear = 2021 && new Date().getFullYear()

    const calendarData = reactive({
      errorDay: {
        2021: {
          4: [1, 2, 3, 5],
          5: [9],
          10: [3]
        }
      },
      // 高亮日期时间段 这个时间段的年会被当做一年
      startDay: '2021-03-11',
      endDay: '2021-11-20'
      // interval: 可能是多个时间段
    })

    return {
      demoList,
      calendarCurrentYear,
      calendarData
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
