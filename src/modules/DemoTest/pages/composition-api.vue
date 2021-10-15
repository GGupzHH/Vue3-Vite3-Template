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

const test1 = ref(null)

console.log(test1)

</script>

<style scoped lang="scss">

</style>
