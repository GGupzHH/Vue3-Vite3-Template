<template>
  <div class="wrap-composition-api">
    {{ CompositionApi }}
    asdad

    <CompositionApiTest ref="test1" />
  </div>
</template>

<script setup>
import {
  ref
} from 'vue'
import CompositionApiTest from 'modules/DemoTest/components/CompositionApiTest.vue'

const name = 'CompositionApi'
const CompositionApi = ref('Hello CompositionApi')

// 此时通过ref 获取子组件的组件信息是空
// 只有当子组件内部通过 defineExpose 导出的数据 才可以在这里拿到
const test1 = ref(null)

console.log(test1)
setTimeout(() => {
  console.log(test1.value)
  console.log(test1.value.test)
  test1.value.test = 2
}, 2000)

</script>

<style scoped lang="scss">

</style>
