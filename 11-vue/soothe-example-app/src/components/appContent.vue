<template>

  <div id="app-content">
    <router-view>

    </router-view>
  </div>


</template>

<script>
export default {
  name: 'app-content',
  data () {
    return {
      msg: 'Soothe App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#app-content {
  min-height: 100%;
  overflow-x: hidden;
  margin-left: 0px;
  transition: margin-left 0.2s;

  /* sticky bottom */
  margin-bottom: -160px;
  padding-bottom: 160px;
}


</style>
