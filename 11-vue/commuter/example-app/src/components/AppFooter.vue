<template>
  <footer id="app-footer">
  <div class="mui-container-fluid">
    <br>
    <a href="http://www.bodmincollege.co.uk/">Bodmin College ♥</a>
  </div>
</footer>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
      msg: 'Soothe App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#app-footer {
  width:100%;
  height: 60px;
  margin-left: 0px;
  transition: margin-left 0.2s;
  position: absolute;
  bottom:0px;

}

#app-footer {
  background-color: #0288D1;
  color: #fff;
}

#app-footer a {
  color: #fff;
  text-decoration: underline;
}
</style>
