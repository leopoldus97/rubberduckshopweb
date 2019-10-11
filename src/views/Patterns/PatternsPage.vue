<template>
    <div>
        <h1 style="-webkit-text-fill-color: aqua">Patterns</h1>
        <input v-model="searched" class="searchBar" placeholder="Search">
        <router-link to="/patternspageadd">
            <button class="btnAdd">Add Pattern</button>
        </router-link>

        <div class="patternContainer">
            <ul v-for="(pattern, index) in patterns" v-bind:key="index">
                <li>
                    <div class="patternList">
                        <div>
                            {{pattern.id}}. {{pattern.name}}
                        </div>
                        <div class="patternButtons">
                            <router-link :to="`/patternspageupdate/${pattern.id}`">
                                <i class="fas fa-pencil-alt" v-on:click="updatePattern(pattern.id)"></i>
                            </router-link>
                        </div>
                        <div class="patternButtons">
                            <i class="fas fa-backspace" v-on:click="deletePattern(index, pattern.id)"></i>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Vue from 'vue';

    export default {
        mounted() {
            this.loadPatterns()
        },
        name: "PatternsPage",
        data: () => {
            return {
                patterns: [],
                patternName: ""
            }
        },
        methods: {
            loadPatterns:  function() {
                axios.get('https://kleasv.azurewebsites.net/api/pattern').then(response => this.patterns = response.data)
            },
            deletePattern: function (index, id) {
                if (confirm("Do you want to delete product with " + id)) {
                    axios.delete('https://kleasv.azurewebsites.net/api/pattern/' + id).then(() => {alert("The item with id: " + id + " deleted!")});
                    Vue.delete(this.patterns, index);
                }
            },
            updatePattern: function(id) {
                axios.put('https://kleasv.azurewebsites.net/api/pattern/' + id, this.patternName)
            }
        }
    }
</script>

<style scoped>
    .patternContainer {
        border-top: 2px aqua dashed;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .patternList {
        border: 1px aqua solid;
        border-radius: 25px 25px 25px 25px;
        background-color: black;
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 20px 20px 20px 20px;
        text-align-all: center;
        -webkit-text-fill-color: aqua;
        display: flex;
        width: 400px;
        justify-content: center;
        align-items: center;
    }
    .searchBar {
        border-radius: 25px 25px 25px 25px;
        border: 1px aqua solid;
        background-color: azure;
        align-self: center;
        margin-right: 30px;
        width: 600px;
        height: 50px;
        text-align: center;
        font-size: 25px;
    }
    i:hover {
        -webkit-text-fill-color: black;
        background-color: aqua;
    }
    button:hover {
        background-color: aqua;
        -webkit-text-fill-color: black;
    }
    .btnAdd {
        width: 100px;
        height: 50px;
        background-color: black;
        -webkit-text-fill-color: aqua;
        border-width: 1px;
        border-color: aqua;
        border-radius: 25px 25px 25px 25px;
        float: right;
        margin-right: 300px;
    }
    .patternButtons {
        margin-left: 10px;
        cursor: pointer;
    }
    ul {
        list-style: none;
    }
    text {
        font-size: 20px;
    }
</style>