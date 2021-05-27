<template>
  <div
    :key="year"
    class="wrap-year"
  >
    <CalendarMonth
      v-for="month in months"
      :key="month"
      :month="month"
      :year="year"
      v-bind="attrs"
    />
  </div>
</template>

<script>
import {
  defineComponent,
  getCurrentInstance,
  reactive
} from 'vue'

import { useStore } from 'vuex'
import CalendarMonth from 'comps/Calendar/month/index.vue'
export default defineComponent({
  name: 'Calendar',
  components: {
    CalendarMonth
  },
  props: {
    year: {
      type: Number,
      default: new Date().getFullYear()
    }
  },
  setup (props) {
    // Vuex store
    const store = useStore()

    // this
    const { proxy } = getCurrentInstance()

    return {
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
