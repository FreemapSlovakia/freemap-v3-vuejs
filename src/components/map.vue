<template>
  <div class="map">
    <div id="leaflet-map"></div>
  </div>
</template>

<script>
export default {
  name: 'map',
  props: ['zoom', 'lat', 'lon'],
  data () {
    return {
    }
  },
  mounted: function () {
    var leafletMap = L.map('leaflet-map').setView([this.lat, this.lon], this.zoom)
    L.tileLayer('http://{s}.freemap.sk/T/{z}/{x}/{y}.jpeg', {
        attribution: '&copy; prispievatelia <a href="http://openstreetmap.org">OpenStreetMap</a>',
        maxZoom: 16
    }).addTo(leafletMap);

    let that = this
    leafletMap.on('moveend', function(e) {
      let c = leafletMap.getCenter()
      that.$router.replace({ name: "home", params: {
        zoom: leafletMap.getZoom(),
        lat: c.lat.toFixed(5),
        lon: c.lng.toFixed(5)
      } })
    });
  }
}
</script>

<style scoped>
  .map #leaflet-map{
    height: calc(100vh - 50px);
    width: 100%; 
  }
</style>
