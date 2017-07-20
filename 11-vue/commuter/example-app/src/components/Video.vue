<template>
  <div class="video">
    <h1>Video Settings</h1>
    <h3>Choose your prefered video: </h3>
    <iframe width="100%" height="315" :src="videos[currentVideoIndex].location" frameborder="0" allowfullscreen></iframe>
    <button
      v-on:click="changeVideo(-1);"
      class="control-button mui-btn mui-btn--raised">
      Previous
    </button>

    <button
      v-on:click="changeVideo(1);"
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
    axios.get(`https://api.mlab.com/api/1/databases/bodmin/collections/video?apiKey=US2irgmVgDkifkCiZAmT7cBW2XuRYfbv`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.currentVideoIndex = response.data[0].currentVideoIndex;
      this.videos = response.data[0].videos
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    changeVideo: function(dir){

      switch(dir){
        case 1:
          if (this.currentVideoIndex >= this.videos.length - 1){
            this.currentVideoIndex = 0;
          }else{
            this.currentVideoIndex++;
          }
          break;
        case -1:
          if (this.currentVideoIndex <= 0){
            this.currentVideoIndex = this.videos.length - 1;
          }else{
            this.currentVideoIndex--;
          }
          break;
      }

      this.updateCurrentVideoIndex();
    },
    updateCurrentVideoIndex: function(){

      let url = 'https://api.mlab.com/api/1/databases/bodmin/collections/video/5964cc26734d1d77802c91d5?apiKey=US2irgmVgDkifkCiZAmT7cBW2XuRYfbv';
      let data = JSON.stringify( { "$set" : { "currentVideoIndex" : this.currentVideoIndex }});
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
      posts: [],
      errors: [],
      msg: 'Soothe App',
      currentVideoIndex: 1,
      videos: [
        {
            name: 'Nature Sounds',
            location: 'https://www.youtube.com/embed/YrddaP6ml1M'
        },
        {
          name: 'Reef',
          location: 'https://www.youtube.com/embed/4RUGmBxe65U'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
