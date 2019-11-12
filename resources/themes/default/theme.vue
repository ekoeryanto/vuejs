<template>
  <!-- preloader start -->
  <div>
    <vue-page-transition name="fade-in-down">
      <router-view></router-view>
    </vue-page-transition>
  </div>
</template>

<script>
export default {
  name: 'theme.vue'
}
</script>
