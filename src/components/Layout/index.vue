<template>
  <router-view v-slot="{ Component }">
    <transition
      name="fade"
      mode="out-in"
    >
      <Component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>
