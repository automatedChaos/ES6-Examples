<template>
  <div class="video">
    <h1>Audio Settings</h1>
    <h3>Choose your prefered audio: </h3>
    <audio id="audio" controls="controls" autoplay>
      Your browser does not support the <code>audio</code> element.
      <source :src="audio[currentAudioIndex].location" type="audio/mp3">
    </audio>
    <button
      v-on:click="changeAudio(-1);"
      class="control-button mui-btn mui-btn--raised">
      Previous
    </button>

    <button
      v-on:click="changeAudio(1);"
      class="control-button mui-btn mui-btn--raised">
      Next
    </button>
  </div>
</template>

<script>
import axios from 'axios';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export default {
  name: 'video',
  created: function(){
    axios.get(`https://api.mlab.com/api/1/databases/bodmin/collections/audio?apiKey=US2irgmVgDkifkCiZAmT7cBW2XuRYfbv`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.currentAudioIndex = response.data[0].currentAudioIndex;
      this.audio = response.data[0].audio
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    changeAudio: function(dir){

      switch(dir){
        case 1:
          if (this.currentAudioIndex >= this.audio.length - 1){
            this.currentAudioIndex = 0;
          }else{
            this.currentAudioIndex++;
          }
          break;
        case -1:
          if (this.currentAudioIndex <= 0){
            this.currentAudioIndex = this.audio.length - 1;
          }else{
            this.currentAudioIndex--;
          }
          break;
      }

      let audio = document.getElementById('audio');
      audio.load(); //call this to just preload the audio without playing
      audio.play(); //call this to play the song right away
      console.log('changed');

      this.updateCurrentAudioIndex();
    },
    updateCurrentAudioIndex: function(){

      let url = 'https://api.mlab.com/api/1/databases/bodmin/collections/audio/5964da0f734d1d77802c9b4e?apiKey=US2irgmVgDkifkCiZAmT7cBW2XuRYfbv';
      let data = JSON.stringify( { "$set" : { "currentAudioIndex" : this.currentAudioIndex }});

      axios.put(url, data)
        .then(response => {
          console.log('update success!');
        })
        .catch(e => {
            this.errors.push(e)
        });
      }
  },
  data () {
    return {
      msg: 'Soothe App',
      currentAudioIndex: 0,
      audio: [
        {
          name: 'Lanquidity',
          location: '/static/audio/lanquidity.mp3'
        },
        {
          name: 'Love Life',
          location: 'static/audio/lovelife.mp3'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
