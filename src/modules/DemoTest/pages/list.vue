<template>
  <div>
    <h1>list</h1>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'
import { mapGetters, useStore } from 'vuex'
// import DemoTestModule from '@/modules/DemoTest/store'
import DemoTestModule from '../store'

export default defineComponent({
  anme: 'Xx',
  setup () {
    const store = useStore()
    console.log(store)
    console.log(store.state)
    console.log(store.state.DemeTest.demoList)
  }
})
// export default {
//   name: 'Xx',
//   computed: {
//     ...mapGetters({
//       demoList: 'DemoTest/demoList'
//     })
//   },
//   async created () {
//     await this.$store.dispatch(DemoTestModule.getAction('GetModuleTestList'))
//     console.log(this.demoList)
//   },
//   setup () {

//   }
// }

</script>

<style lang="scss" scoped>
</style>
