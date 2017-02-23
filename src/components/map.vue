<template>
  <div class="map">
    <div id="leaflet-map"></div>
  </div>
</template>

<script>
export default {
  name: 'map',
  props: ['mapType', 'zoom', 'lat', 'lon', 'searchResults'],
  watch : {
    mapType : function (value) {
      this.refreshMapLayer()
    },
    searchResults : function (results) {
      if(this.searchResultMarkersGroup)
        this.leafletMap.removeLayer(this.searchResultMarkersGroup)

      this.searchResultMarkersGroup = L.layerGroup()
      this.searchResultMarkersGroup.addTo(this.leafletMap)

      var that = this
      results.forEach((r) => {
        var m = L.marker([r.lat, r.lon], {title: r.name})
        m.addTo(that.searchResultMarkersGroup)
      })

      if(results.length > 0){
        var firstResult = results[0]
        this.leafletMap.setView(new L.LatLng(firstResult.lat, firstResult.lon), 15);
      }
    }
  },  
  data () {
    return {
      leafletMap: null,
      leafletMapLayer: null,
      searchResultMarkersGroup: null
    }
  },
  mounted: function () {
    this.leafletMap = L.map('leaflet-map').setView([this.lat, this.lon], this.zoom)
    this.refreshMapLayer()
    let that = this
    this.leafletMap.on('moveend', function(e) {
      that.refreshURLparams()
    });
    that.refreshURLparams()
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
    },

    refreshURLparams: function(){
      let that = this
      let c = that.leafletMap.getCenter()
      that.$router.replace({ name: "home", params: {
        zoom: that.leafletMap.getZoom(),
        lat: c.lat.toFixed(5),
        lon: c.lng.toFixed(5),
        mapType: that.mapType
      } })
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
