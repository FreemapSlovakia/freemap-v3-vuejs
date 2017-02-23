<template>
  <div class="map">
    <div id="leaflet-map"></div>
  </div>
</template>

<script>
export default {
  name: 'map',
  props: ['mapType', 'zoom', 'lat', 'lon'],
  watch : {
    mapType : function (value) {
      this.refreshMapLayer()
    }
  },  
  data () {
    return {
      leafletMap: null,
      leafletMapLayer: null
    }
  },
  mounted: function () {
    this.leafletMap = L.map('leaflet-map').setView([this.lat, this.lon], this.zoom)
    this.refreshMapLayer()
    let that = this
    this.leafletMap.on('moveend', function(e) {
      let c = that.leafletMap.getCenter()
      that.$router.replace({ name: "home", params: {
        zoom: that.leafletMap.getZoom(),
        lat: c.lat.toFixed(5),
        lon: c.lng.toFixed(5)
      } })
    });
  },

  methods: {
    refreshMapLayer : function(){
      if(this.leafletMapLayer)
        this.leafletMap.removeLayer(this.leafletMapLayer)

      this.leafletMapLayer = L.tileLayer('http://{s}.freemap.sk/'+this.mapType+'/{z}/{x}/{y}.jpeg', {
          attribution: '&copy; prispievatelia <a href="http://openstreetmap.org">OpenStreetMap</a>',
          maxZoom: 16
      })
      
      this.leafletMapLayer.addTo(this.leafletMap);
    }
  }
}
</script>

<style scoped>
  .map #leaflet-map{
    height: calc(100vh - 50px);
    width: 100%; 
  }
</style>
