<template>
  <div id="app">
    <ul>
      <li v-for="context in contexts" v-bind:key="context.id">{{context.duckColor.name}}</li>
    </ul>
    <input v-model="del">
    <button v-on:click="deleteContext()">Delete</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'app',
  mounted() {
    this.loadContent()
  },
  data: () => {
    return {
      del: "",
      contexts: []
    }
  },
  methods: {
    loadContent: function() {
      axios.get('https://rubberduckshop.azurewebsites.net/api/duck').then(response => (this.contexts = response.data))
    },
    deleteContext: function() {
      axios.delete('https://rubberduckshop.azurewebsites.net/api/duck/' + this.del)
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
