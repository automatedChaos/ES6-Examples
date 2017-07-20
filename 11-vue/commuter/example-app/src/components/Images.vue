<template>
  <div class="images">
    <h1>Video Settings</h1>
    <h3>Choose your prefered video: </h3>
    <img width="100%" :src="images[currentImageIndex].location" />
    <button
      v-on:click="changeImage(-1);"
      class="control-button mui-btn mui-btn--raised">
      Previous
    </button>

    <button
      v-on:click="changeImage(1);"
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
    axios.get(`https://api.mlab.com/api/1/databases/bodmin/collections/images?apiKey=US2irgmVgDkifkCiZAmT7cBW2XuRYfbv`)
    .then(response => {
      // JSON responses are automatically parsed.
      //console.log(response.data);
      this.currentImageIndex = response.data[0].currentImageIndex;
      this.images = response.data[0].images
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    changeImage: function(dir){

      switch(dir){
        case 1:
          if (this.currentImageIndex >= this.images.length - 1){
            this.currentImageIndex = 0;
          }else{
            this.currentImageIndex++;
          }
          break;
        case -1:
          if (this.currentImageIndex <= 0){
            this.currentImageIndex = this.images.length - 1;
          }else{
            this.currentImageIndex--;
          }
          break;
      }
      this.updateCurrentImageIndex();
    },
    updateCurrentImageIndex: function(){

      let url = 'https://api.mlab.com/api/1/databases/bodmin/collections/images/5964d452734d1d77802c97dd?apiKey=US2irgmVgDkifkCiZAmT7cBW2XuRYfbv';
      let data = JSON.stringify( { "$set" : { "currentImageIndex" : this.currentImageIndex }});
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
      currentImageIndex: 0,
      images: [
        {
            name: 'Calm',
            location: '/static/img/calm.jpg'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>
