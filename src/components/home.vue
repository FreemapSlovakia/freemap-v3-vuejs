<template>
  <div class="home">
    <app-header></app-header>
    <app-map></app-map>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {}
  },
  components: {
    'app-header': require('components/header.vue'),
    'app-map': require('components/map.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
