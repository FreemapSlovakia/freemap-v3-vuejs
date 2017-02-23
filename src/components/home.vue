<template>
  <div class="home">
    <app-header v-bind:mapType="mapType"
      v-on:userClickedSearch="doSearch"></app-header>
    <app-map v-bind:mapType="mapType"
      v-bind:zoom="zoom" 
      v-bind:lat="lat" 
      v-bind:lon="lon"
      v-bind:searchResults="searchResults">
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
    return {
      searchResults: []
    }
  },
  components: {
    'app-header': require('components/header.vue'),
    'app-map': require('components/map.vue')
  },
  methods: {
    doSearch: function(searchQuery){
      let that = this
      var url = 'http://www.freemap.sk/api/0.1/q/'+searchQuery+'&lat='+this.lat+'&lon='+this.lon
      $.get(url).then(response => {
        that.searchResults = response
      }, errorResponse => {
        console.log(errorResponse)
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
