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
const name = 'CompositionApiTests'
const test = ref(1)
// defineExpose
defineExpose({
  test
})
</script>

<style scoped lang="scss">

</style>
