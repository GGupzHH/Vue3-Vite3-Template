<template>
  <div class="wrap-year">
    <CalendarMonth
      v-for="month in months"
      :key="month"
      :month="month"
      v-bind="attrs"
    />
  </div>
</template>

<script>
import {
  defineComponent,
  computed,
  getCurrentInstance,
  ref
} from 'vue'
import { useStore } from 'vuex'
import CalendarMonth from 'comps/Calendar/month/index.vue'
export default defineComponent({
  name: 'Calendar',
  components: {
    CalendarMonth
  },
  setup () {
    // Vuex store
    const store = useStore()

    // this
    const { ctx } = getCurrentInstance()
    console.log(ctx)
    const attrs = computed(() => ctx.$attrs)
    return {
      months: ref(12),
      attrs
    }
  }
})
</script>

<style scoped lang="scss">
.wrap-year {
  display: grid;
  min-width: 785px;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(3, 33.33%);
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
