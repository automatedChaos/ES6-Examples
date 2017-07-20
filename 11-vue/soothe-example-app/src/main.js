/**
* @Author: Alcwyn Parker <alcwynparker>
* @Date:   2017-07-10T17:54:41+01:00
* @Email:  alcwynparker@gmail.com
* @Project: Soothe
* @Filename: main.js
* @Last modified by:   alcwynparker
* @Last modified time: 2017-07-11T13:14:07+01:00
*/

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
var soothe = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

Vue.prototype.accessKey = function(){ return 'US2irgmVgDkifkCiZAmT7cBW2XuRYfbv'};

// databases
//https://api.mlab.com/api/1/databases?apiKey=2E81PUmPFI84t7UIc_5YdldAp1ruUPKye

//https://api.mlab.com/api/1/databases/bodmin/collections/stats?apiKey=US2irgmVgDkifkCiZAmT7cBW2XuRYfbv
// databases/{database}/collections/{collection}
//

//https://api.mlab.com/api/1/databases/bodmin/collections/settings?apiKey=US2irgmVgDkifkCiZAmT7cBW2XuRYfbv
