<template>
  <div class="welcome">


  </div>
</template>

<script>

import axios from 'axios';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export default {
  name: 'welcome',
  created: function(){
    axios.get(`http://localhost:8000/api/Resources/`)
    .then(response => {
      console.log(response);
    })
    .catch(e => {
      console.log(e);
    })
  },
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
