<template>
  <div class="map">
    <div id="leaflet-map"></div>
  </div>
</template>

<script>
export default {
  name: 'map',
  data () {
    return {
    }
  },
  mounted: function () {
    var leafletMap = L.map('leaflet-map').setView([48.70714, 19.4995], 8)
    L.tileLayer('http://{s}.freemap.sk/T/{z}/{x}/{y}.jpeg', {
        attribution: '&copy; prispievatelia <a href="http://openstreetmap.org">OpenStreetMap</a>',
        maxZoom: 16
    }).addTo(leafletMap);
  }
}
</script>

<style scoped>
  .map #leaflet-map{
    height: 500px;
    width: 100%; 
  }
</style>
