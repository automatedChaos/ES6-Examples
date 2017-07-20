<!--

    start: vue init webpack shopping-app

0.  First things first, delete all the links and other content, we will keep the logo as
    it looks kind of nice and reminds us what we are doing this for!
1.  Explore the example component
2.  Now view the component life cycle here: https://vuejs.org/v2/guide/instance.html
3.  Add another div outside the main template div, what happens?
4.  Personalise the welcome message using the returned data object
5.  Add a shopping list array to the data containing objects with name and
    purchased as properties - display list using the v-for directive
6.  Add a form below the list and create a method that handles adding the form data to the list
7.  now use a link within the list to mark an item as purchased.
8.  wrap the list html in a span and change the colour of the text depending on the purchase boolean
9.  add priority to the item objects in array, add exclamation to the li text if the item is a priority. (ternary conditional)
10. finished a very poor todo list app - but should we add some local storage? ...
    of course we should:
    •   Overwrite the created function to load data from the local storage if available
    •   Update the local storage everytime the 'Add Item' button is pressed.


11. Challenge: Add a button at the bottom of the app that empties both the local storage
    and the shoppingList data.

    COMPLETE!

-->

<template>
  <div class="hello">
    <h1>{{ msg }} {{name}}</h1>

    <ul>
      <li v-for="(item, key) in shoppingList" >
        <span v-bind:class="{ purchased: item.purchased }">
          {{item.name}}{{item.priority ? '!' : ''}}
        </span>
        <a href="#" v-on:click.prevent="purchaseItem(key)">X</a>
      </li>
    </ul>

    <div>

      <form v-on:submit.prevent="addItem">
        <input type="text" v-model="newitem" placeholder="Enter your name:" />
        <button type="submit">Add Item</button>
      </form>

    </div>

  </div>

</template>

<script>
export default {
  name: 'hello',
  created: function(){

    // load the data from the local storage if available
    if(localStorage && localStorage.getItem(this.localData)){
      this.shoppingList = JSON.parse(localStorage.getItem(this.localData));
    }
  },
  methods: {
    addItem: function() {

      // if there is an item in the text input
      if (this.newitem && this.newitem !== ''){

        // create a new item obect
        let item = {
          name: this.newitem,
          purchased: false,
          priority: false,
        }

        // add the new item to the shopping list
        this.shoppingList.push(item);

        // clear the text field
        this.newitem = '';

        // update the local storage
        localStorage.setItem(this.localData, JSON.stringify(this.shoppingList));
      }
    },
    purchaseItem: function(key){
      // update the purchased field - the class will be updated accordingly
      this.shoppingList[key].purchased = true;
    }
  },
  data () {
    return {
      localData: 'shopinglist.list',
      msg: 'Welcome to your shopping list, ',
      name: 'Alcwyn',
      shoppingList: [
        {
          name: 'Tea bags',
          purchased: false,
          priority: true
        },
        {
          name: 'Jam',
          purchased: false,
          priority: false
        },
        {
          name: 'Bread',
          purchased: false,
          priority: true
        }
      ],
      newitem: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {

  margin: 0 10px;

}

a {
  color: #42b983;
  text-decoration: none;
  margin-left: 20px;
}

.purchased{
  color: #eee;
}
</style>
