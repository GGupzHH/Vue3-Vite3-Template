<template>
  <el-button
    type="primary"
  >
    <i class="el-icon-setting"></i>asdasdsa
  </el-button>
  <el-radio
    v-model="radio"
    label="1"
  >
    备选项
  </el-radio>
  <el-radio
    v-model="radio"
    label="2"
  >
    备选项
  </el-radio>
  <el-button @click="handle">
    Composition API
  </el-button>
  <div>
    <h1>日历组件</h1>
    <Calendar
      v-model="calendarCurrentYear"
      @dayClick="onclick"
    />
    <h1>日历组件-带区间日期高亮和指定日期错误的配置</h1>
    <Calendar
      v-model="calendarCurrentYear"
      :calendar-data="calendarData"
    />
    <h1>年份控制器-日历组件-带区间日期高亮和指定日期错误的配置</h1>
    <Calendar
      v-model="calendarCurrentYear1"
      :controller="true"
      :calendar-data="calendarData1"
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
import { useRouter } from 'vue-router'
// import DemoTestModule from '@/modules/DemoTest/store'
import { useDemoTest2 } from 'modules/DemoTest/store/index.js'

export default defineComponent({
  name: 'Xx',
  components: {},
  props: {},
  setup () {

    const store = useDemoTest2()
    console.log(store)
    const onclick = (dayItem) => {
      console.log(dayItem)
    }
    const router = useRouter()

    const handle = () => {
      router.push('/composition/api')
    }


    // this  ctx并不能在生产环境使用
    const { proxy } = getCurrentInstance()

    const calendarCurrentYear = 2021 && new Date().getFullYear()

    const calendarCurrentYear1 = 2021 && new Date().getFullYear()

    const calendarData = reactive({
      errorDay: {
        2021: {
          4: [1, 2, 3, 5, 6, 7],
          5: [9],
          10: [3]
        }
      },
      // 高亮日期时间段 这个时间段的年会被当做一年
      startDay: '2021-03-11',
      endDay: '2021-11-20'
      // interval: 可能是多个时间段
    })

    const calendarData1 = reactive({
      errorDay: {
        2021: {
          4: [1, 2, 3, 5],
          5: [9],
          10: [3]
        }
      },
      // 高亮日期时间段 这个时间段的年会被当做一年
      startDay: '2019-03-11',
      endDay: '2021-11-20'
      // interval: 可能是多个时间段
    })

    return {
      onclick,
      calendarCurrentYear,
      calendarData,
      calendarCurrentYear1,
      calendarData1,
      radio: '1',
      handle
    }
  }
})
</script>

<style lang="scss" scoped>
</style>
