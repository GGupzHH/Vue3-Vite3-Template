<template>
  <div
    v-if="controller"
    class="calendar-controller"
  >
    <span>选择年份:</span>
    <el-select
      v-model="currentYear"
      placeholder="请选择"
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
    :key="currentYear"
    class="wrap-year"
  >
    <CalendarMonth
      v-for="month in months"
      :key="month"
      :month="month"
      :year="currentYear.value"
      v-bind="attrs"
    />
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  getCurrentInstance,
  reactive,
  ref,
  toRef,
  toRefs,
  watch
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

  return {
    calendarYearList
  }
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
    },
    calendarData: {
      type: Object,
      default: () => (reactive({}))
    }
  },
  emits: ['update:modelValue'],
  setup (props) {
    // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()

    const { modelValue } = toRefs(props)
    const currentYear = computed

    watch(() => modelValue, () => {
      console.log(modelValue)
      currentYear.value = modelValue.value
    }, {
      immediate: true
    })

    watch(() => currentYear.value, () => {
      console.log(currentYear.value)
      proxy.$emit('update:modelValue', currentYear.value)
      console.log(modelValue)
    })

    const { startDay, endDay } = toRefs(props.calendarData)

    return {
      ...useController(
        new Date(startDay.value).getFullYear(),
        new Date(endDay.value).getFullYear()
      ),
      currentYear,
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
      attrs: {
        ...props,
        ...proxy.$attrs
      }
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
