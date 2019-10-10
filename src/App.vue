<template>
  <div id="app">
    <ul>
      <li v-for="context in contexts" v-bind:key="context.id">{{context}}</li>
    </ul>
    <button v-on:click="loadContext()">Load</button>
    <input v-model="del">
    <button v-on:click="deleteContext()">Delete</button>
    <button v-on:click="addContext()">Add</button>
    <button v-on:click="editContext()">Edit</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  //mounted() {
  //  this.loadContent()
  //},
  data: () => {
    return {
      del: "",
      contexts: [],
      rubberDuck: {
        "id": 16,
        "duckColor": { "id": 1, "name": "Yellow" },
        "duckPattern": { "id": 1, "name": "Spotted" },
        "duckSize": 3,
        "price": 678,
        "duckGender": 1,
        "duckCostume": { "id": 1, "name": "Navy" }
      },
      editRubberDuck: {
        "id": 16,
        "duckColor": { "id": 1, "name": "Yellow" },
        "duckPattern": { "id": 1, "name": "Spotted" },
        "duckSize": 3,
        "price": 100,
        "duckGender": 1,
        "duckCostume": { "id": 1, "name": "Navy" }
      }
    }
  },
  methods: {
    loadContext: function() {
      axios.get('https://rubberduckshop.azurewebsites.net/api/duck').then(response => (this.contexts = response.data))
    },
    deleteContext: function() {
      axios.delete('https://rubberduckshop.azurewebsites.net/api/duck/' + this.del)
    },
    addContext: function () {
      axios.post('https://rubberduckshop.azurewebsites.net/api/duck', this.rubberDuck)
    },
    editContext: function () {
      axios.put('https://rubberduckshop.azurewebsites.net/api/duck/16', this.editRubberDuck)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
