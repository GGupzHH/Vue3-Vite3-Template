<template>
  <div class="wrap-calendar-month">
    <h1 class="month-title">
      {{ currentMonth }}月
    </h1>
    <div class="wrap-month-content">
      <div class="wrap-week">
        <span
          v-for="(weekItem, weekIndex) in week"
          :key="weekIndex"
          class="week-day"
        >
          {{ weekItem }}
        </span>
      </div>
      <div class="wrap-day">
        <span
          v-for="(dayItem, datIndex) in monthList"
          :key="datIndex"
          class="month-day"
        >
          {{ dayItem.content }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  reactive
} from 'vue'
import { useStore } from 'vuex'

const useCalendarMonth = (currentYear, currentMonth) => {
  const week = reactive(['日', '一', '二', '三', '四', '五', '六'])

  const getCurrentMonthDays = (year, month) => {
    return new Date(year, month, 0).getDate()
  }

  const getCurrentWeek = (year, month) => {
    return new Date(year, month - 1, 1).getDay()
  }

  const currentMonthDays = getCurrentMonthDays(currentYear, currentMonth)
  const startWeek = getCurrentWeek(currentYear, currentMonth)

  const handleMonthEmptyDays = (currentMonthDays, startWeek) => {
    return new Array(currentMonthDays + startWeek).fill(
      {
        content: ''
      },
      0
    )
  }

  const handleMonthDays = (currentMonthDays, startWeek) => {
    return handleMonthEmptyDays(currentMonthDays, startWeek).map((dayItem, index) => {
      if (index >= startWeek) {
        return {
          content: index - startWeek + 1
        }
      } else {
        return dayItem
      }
    })
  }

  const monthList = handleMonthDays(currentMonthDays, startWeek)

  // console.log(currentYear, currentMonth)
  // console.log('当前月多少天', currentMonthDays)
  // console.log('当前月第一天是周几', startWeek)
  // console.log('这个月', monthList)
  return {
    week,
    currentMonth,
    monthList
  }
}
export default defineComponent({
  name: 'CalendarMonth',
  props: {
    year: {
      type: Number,
      default: new Date().getFullYear()
    },
    month: {
      type: Number,
      default: new Date().getMonth() + 1
    }
  },
  setup (props) {
    // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()

    return {
      ...useCalendarMonth(props.year, props.month)
    }
  }
})
</script>

<style scoped lang="scss">
.wrap-calendar-month {
  width: 175px;
  .month-title {
    width: 100%;
    height: 25px;
    line-height: 25px;
    padding: 0px 8px;
    font-size: 12px;
    color: #333;
  }
  .wrap-month-content {
    width: 100%;
    text-align: center;
    line-height: 25px;
    font-size: 12px;
    .wrap-week {
      height: 25px;
      display: flex;
      align-items: center;
      .week-day {
        flex: 1;
      }
    }
    .wrap-day {
      display: flex;
      flex-wrap: wrap;
      .month-day {
        width: 25px;
        height: 25px;
        color: #D7D7D7;
      }
    }
  }
}
</style>
