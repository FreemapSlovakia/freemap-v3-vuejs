<template>
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">freemap.sk 3.0</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <div class="navbar-form navbar-left">
            <div class="form-group">
              <input type="text" v-model="searchQuery" class="form-control" placeholder="Brusno">
            </div>
            <button type="submit" v-on:click="doSearch"  class="btn btn-default">
              <span class="glyphicon glyphicon-search"></span>
            </button>
          </div>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                 Menu
                 <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">Turistická mapa</a></li>
                <li><a href="#">Cyklomapa</a></li>
                <li><a href="#">Automapa</a></li>
                <li><a href="#">Lyžiarska mapa</a></li>
                <li role="separator" class="divider"></li>
                <li><a href="#">TODO</a></li>
              </ul>
            </li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>
</template>

<script>

export default {
  name: 'navbar',
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
  .navbar {
    margin-bottom: 0
  }
</style>
