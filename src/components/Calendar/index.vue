<template>
  <div
    v-if="controller"
    class="calendar-controller"
  >
    <span>选择年份:</span>
    <el-select
      v-model="modelValue"
      placeholder="请选择"
      @change="$emit('update:modelValue', $event.target)"
    >
      <el-option
        v-for="item in calendarYearList"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
  </div>
  <div
    :key="modelValue"
    class="wrap-year"
  >
    <CalendarMonth
      v-for="month in months"
      :key="month"
      :month="month"
      :year="modelValue"
      v-bind="attrs"
    />
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  reactive,
  toRef,
  toRefs
} from 'vue'

import { useStore } from 'vuex'
import CalendarMonth from 'comps/Calendar/month/index.vue'

const useController = (startYear, endYear) => {
  const calendarYearList = reactive([])

  // 年份列表

  for (let i = 0; i <= (endYear - startYear); i++) {
    calendarYearList.push(startYear + i)
  }
  console.log(startYear, endYear)
  console.log(calendarYearList)

  // calendarYearList = reactive(yearList)
}

export default defineComponent({
  name: 'Calendar',
  components: {
    CalendarMonth
  },
  props: {
    modelValue: {
      type: Number,
      default: new Date().getFullYear()
    },
    year: {
      type: Number,
      default: new Date().getFullYear()
    },
    controller: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup (props) {
    // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()
    console.log(proxy.$attrs)
    console.log(proxy.$attrs['calendar-data'])
    console.log(proxy.$attrs['calendar-data'].startDay)

    const { startDay, endDay } = toRefs(proxy.$attrs['calendar-data'])

    return {
      ...useController(
        new Date(startDay.value).getFullYear(),
        new Date(endDay.value).getFullYear()
      ),
      months: reactive([
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12'
      ]),
      attrs: proxy.$attrs
    }
  }
})
</script>

<style scoped lang="scss">
.calendar-controller {
  padding-bottom: 12px;
  padding-left: 26px;
  span {
    margin-right: 8px;
  }
  .el-input__inner {
    width: 100px;
  }
}
.wrap-year {
  display: grid;
  min-width: 785px;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(3, calc(33.33% - 18px));
  justify-items: center;
  align-items: center;
  grid-row-gap: 18px;
  // flex-wrap: wrap;
  &:deep(.wrap-calendar-month) {
    width: 175px;
    height: 200px;
  }
}
</style>
