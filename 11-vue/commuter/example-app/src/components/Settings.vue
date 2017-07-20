<template>
  <div class="video">
    <h1>Main Settings</h1>

    <div class="mui--divider-top">
      <br />
      <button
        v-on:click="control.calmLight = !control.calmLight"
        v-bind:class="{ 'mui-btn--primary': control.calmLight }"
        class="control-button mui-btn mui-btn--raised">
          {{control.calmLight ? 'Deactivate' : 'Activate' }} Calm Light
      </button>

      <button
        v-on:click="control.aroma = !control.aroma"
        v-bind:class="{ 'mui-btn--primary': control.aroma }"
        class="control-button mui-btn mui-btn--raised">
          {{control.aroma ? 'Deactivate' : 'Activate' }} Aroma
      </button>

      <button
        v-on:click="control.kettle = !control.kettle"
        v-bind:class="{ 'mui-btn--primary': control.kettle }"
        class="control-button mui-btn mui-btn--raised">
          {{control.kettle ? 'Deactivate' : 'Activate' }} Kettle Control
      </button>

      <button
        v-on:click="control.music = !control.music"
        v-bind:class="{ 'mui-btn--primary': control.music }"
        class="control-button mui-btn mui-btn--raised">
          {{control.music ? 'Deactivate' : 'Activate' }} Music Control
      </button>

      <button
        v-on:click="control.tv = !control.tv"
        v-bind:class="{ 'mui-btn--primary': control.tv }"
        class="control-button mui-btn mui-btn--raised">
          {{control.tv ? 'Deactivate' : 'Activate' }} TV Control
      </button>


    </div>

    </div>
  </div>
</template>

<script>

import axios from 'axios';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export default {
  name: 'video',
  created: function(){
    axios.get(`https://api.mlab.com/api/1/databases/bodmin/collections/settings?apiKey=US2irgmVgDkifkCiZAmT7cBW2XuRYfbv`)
    .then(response => {
      // JSON responses are automatically parsed.
      //console.log(response.data);
      let data = response.data[0].control;
      if (data.calmLight === 'true') this.control.calmLight = true;
      if (data.aroma === 'true') this.control.aroma = true;
      if (data.kettle === 'true') this.control.kettle = true;
      if (data.music === 'true') this.control.music = true;
      if (data.tv === 'true') this.control.tv = true;

      var self = this;

      $('.control-button').on('click', function(){

        let calmLight = "false";
        if (self.control.calmLight) calmLight = "true";

        let aroma = "false";
        if (self.control.aroma) aroma = "true";

        let kettle = "false";
        if (self.control.kettle) kettle = "true";

        let music = "false"
        if (self.control.music) music = "true";

        let tv = "false";
        if (self.control.tv) tv = "true";

        let settings = {
          calmLight : calmLight,
          aroma: aroma,
          kettle: kettle,
          music: music,
          tv: tv
        }

        let url = 'https://api.mlab.com/api/1/databases/bodmin/collections/settings/5964e26d734d1d77802ca0bc?apiKey=US2irgmVgDkifkCiZAmT7cBW2XuRYfbv';
        let data = JSON.stringify( { "$set" : {control : settings }});
        axios.put(url, data)
        .then(response => {
          console.log('update success!');
        })
        .catch(e => {
          this.errors.push(e)
        })
      });
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    updateSettings: function(){
      console.log("changed");
    }
  },
  data () {
    return {
      msg: 'Soothe App',
      control: {
        calmLight: false,
        aroma: false,
        kettle: false,
        music: false,
        tv: false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.control-button{
  width:90%;
  margin-bottom:2%;
}



</style>
