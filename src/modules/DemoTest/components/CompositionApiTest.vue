<template>
  <div class="">
    CompositionApiTest
    {{ test }}
  </div>
</template>

<script setup>
import {
  defineComponent,
  getCurrentInstance,
  ref,
  defineExpose
} from 'vue'
import { useStore } from 'vuex'

const test = ref(1)
// defineExpose
// defineExpose({
//   test
// })
</script>

<style scoped lang="scss">

</style>
