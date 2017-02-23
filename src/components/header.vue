<template>
  <div class="header">
    <input v-model="searchQuery">
    <button v-on:click="doSearch">Search</button>
  </div>
</template>

<script>

export default {
  name: 'header',
  data () {
    return {
      searchQuery: ''
    }
  },
  methods: {
    doSearch: function(){
      var url = 'http://www.freemap.sk/api/0.1/q/'+this.searchQuery+'&lat=48.32805999999996&lon=19.347240000000422'
      $.get(url).then(response => {
        console.log(response)
      }, errorResponse => {
        console.log(errorResponse)
      });
    }
  }
}
</script>

<style scoped>
  .header{
    height: 50px;
    background-color: green;
  }
</style>
