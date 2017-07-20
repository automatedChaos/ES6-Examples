<template>

  <div id="header-container">

    <div id="sidedrawer" class="mui--no-user-select">

      <sidedrawer-menu v-on:menu-item-clicked="hideSidedrawer"></sidedrawer-menu>

    </div>

    <header id="header">

      <div class="mui-appbar mui--appbar-line-height">
        <div class="mui-container-fluid">
          <a class="sidedrawer-toggle js-show-sidedrawer"  v-on:click="showSidedrawer();">☰</a>
          <span class="mui--text-title ">{{title}}</span>
        </div>
      </div>
    </header>

  </div>

</template>

<script>

import SidedrawerMenu from './SidedrawerMenu';

export default {
  name: 'app-header',
  data: function() {
    return {
      title: 'Commuter App',
      sidedrawerState: false,
      eventBus: this.eventBus
    }
  },
  components: {SidedrawerMenu},
  computed: {
    sidedrawerElm : () => {return document.getElementById('sidedrawer');},
    headerContainer : () => {return document.getElementById('header-container');},
    overlayEl : () => {return null;}

  },
  methods: {
    showSidedrawer: function() {

      // set overlay options
      let options = {
        'keyboard': true, // teardown when <esc> key is pressed (default: true)
        'static': false, // maintain overlay when clicked (default: false)
        'onclose': function() {
          //this.sidedrawerElm.classList.remove('active');
          //this.headerContainer.appendChild(this.sidedrawerElm);
        }
      };

      this.overlayEl = mui.overlay('on', options, this.sidedrawerElm);
      this.sidedrawerElm.classList.add('active');

    },
    hideSidedrawer: function(){
      mui.overlay('off');
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 2;
  transition: left 0.2s;
}

#sidedrawer {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 200px;
  left: -200px;
  overflow: auto;
  z-index: 2;
  background-color: #fff;
  transition: transform 0.2s;
}

/**
 * Toggle Side drawer
 */
#sidedrawer.active {
  transform: translate(200px);
}


/**
 * Header CSS
 */
.sidedrawer-toggle {
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  line-height: 20px;
  margin-right: 10px;
}

.sidedrawer-toggle:hover {
  color: #fff;
  text-decoration: none;
}




</style>
