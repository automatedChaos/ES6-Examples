<template>
  <div class="welcome">
    <img class="logo" width="60%" src="/static/img/logo.png">

    <button
      v-on:click="activateSoothe();"
      class="control-button mui-btn mui-btn--raised mui-btn--danger">  Activate Soothe
    </button>
    <p>
      <br /><br />
      The Soothe App has helped to calm you down {{panicNum}} times.
    </p>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export default {
  name: 'welcome',
  created: function(){
    axios.get(`https://api.mlab.com/api/1/databases/bodmin/collections/proxy?apiKey=US2irgmVgDkifkCiZAmT7cBW2XuRYfbv`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.panicNum = response.data[0].panic;
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    activateSoothe: function(){
      this.panicNum++;

      let url = 'https://api.mlab.com/api/1/databases/bodmin/collections/proxy/5964dda5734d1d77802c9df7?apiKey=US2irgmVgDkifkCiZAmT7cBW2XuRYfbv';
      let data = JSON.stringify( { "$set" : { panic : this.panicNum }});
      axios.put(url, data)
      .then(response => {
        console.log('update success!');
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  },
  data () {
    return {
      msg: 'Soothe App',
      panicNum:0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo{
  margin-top:13%;

}


</style>
