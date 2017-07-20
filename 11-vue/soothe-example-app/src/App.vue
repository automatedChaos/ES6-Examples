<template>
  <div id="app">

    <app-header> </app-header>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppContent from './components/AppContent.vue';

export default {
  name: 'app',
  created: function(){
    console.log("APP CREATED!");
  },
  components: {
    AppFooter, AppHeader, AppContent
  }
}
</script>

<style>
html,
body {
  height: 100%;
  width:100%;
  animation: colorchange 5s infinite; /* animation-name followed by duration in seconds*/
         /* you could also use milliseconds (ms) or something like 2.5s */
  -webkit-animation: colorchange 5s infinite; /* Chrome and Safari */
}
@keyframes colorchange
{
  0%  {background: #9bffc6;}
  50%  {background: #f5edfc;}
  100% {background: #9bffc6;}
}

@-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */
{
  0%  {background: #9bffc6;}
  50%  {background: #f5edfc;}
  100% {background: #9bffc6;}
}



html,
body,
input,
textarea,
buttons {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height:100%;
  width:100%;
}

</style>
