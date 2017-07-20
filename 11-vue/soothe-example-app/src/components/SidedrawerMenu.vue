<template>
  <div>
    <div id="sidedrawer-menu" class="mui--appbar-line-height">
      <span class="mui--text-title">Options</span>
    </div>
    <div class="mui-divider"></div>
    <ul>
      <li><router-link @click.native="hideSidedrawer();" to="/"><strong>Home</strong></router-link></li>
      <li><router-link @click.native="hideSidedrawer();" to="/video"><strong>Video</strong></router-link></li>
      <li><router-link @click.native="hideSidedrawer();" to="/audio"><strong>Audio</strong></router-link></li>
      <li><router-link @click.native="hideSidedrawer();" to="/images"><strong>Images</strong></router-link></li>
      <li><router-link @click.native="hideSidedrawer();" to="/settings"><strong>Settings</strong></router-link></li>
    </ul>

    </div>
  </div>
</template>

<script>
export default {
  name: 'sidedrawer-menu',
  methods: {
    hideSidedrawer: function() {    // do not use a fat arrow here - scope is lost
      this.$emit('menu-item-clicked');
    }
  },
  data () {
    return {
      msg: 'Soothe App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#sidedrawer-menu {
padding-left: 20px;
}

#sidedrawer ul {
list-style: none;
}

#sidedrawer > ul {
padding-left: 0px;
}

#sidedrawer > ul > li:first-child {
padding-top: 15px;
}

#sidedrawer strong {
display: block;
padding: 15px 22px;
cursor: pointer;
}

#sidedrawer strong:hover {
background-color: #E0E0E0;
}

#sidedrawer strong + ul > li {
padding: 6px 0px;
}
</style>
