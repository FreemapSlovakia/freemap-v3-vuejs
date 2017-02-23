<template>
  <div class="home">
    <app-header v-bind:mapType="mapType"
      v-bind:lat="lat" 
      v-bind:lon="lon"></app-header>
    <app-map v-bind:mapType="mapType"
      v-bind:zoom="zoom" 
      v-bind:lat="lat" 
      v-bind:lon="lon">
    </app-map>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    mapType: { default: 'T'},
    zoom: { default: 8},
    lat: { default: 48.70714},
    lon: { default: 19.4995},
  },
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
