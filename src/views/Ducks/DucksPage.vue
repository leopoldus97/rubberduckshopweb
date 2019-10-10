<template>
    <div>
        <h1 style="-webkit-text-fill-color: aqua">Ducks</h1>
        <input v-model="searched" class="searchBar" placeholder="Search">
        <router-link to="/duckspageadd">
            <button class="btnAdd">Add Duck</button>
        </router-link>

        <div class="duckContainer">
            <ul v-for="(duck, index) in ducks" :key="index">
                <li>
                    <div class="duckList">
                        <div>
                            {{duck.id}}. {{duck.color.name}}, {{duck.costume.name}}, {{duck.pattern.name}}
                        </div>
                        <div class="duckButtons">
                            <router-link :to="`/duckspageupdate/${duck.id}`">
                                <i class="fas fa-pencil-alt" v-on:click="updateDuck(duck.id)"></i>
                            </router-link>
                        </div>
                        <div class="duckButtons">
                            <i class="fas fa-backspace" v-on:click="deleteDuck(duck.id)"></i>
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
            this.loadDucks()
        },
        name: "DucksPage",
        data: () => {
            return {
                ducks: [],
                duckName: ""
            }
        },
        methods: {
            loadDucks:  function() {
                axios.get('https://kleasv.azurewebsites.net/api/duck').then(response => this.ducks = response.data)
            },
            deleteDuck: function (id) {
                if (confirm("Do you want to delete product with " + id)) {
                    axios.delete('https://rubberduckshop.azurewebsites.net/api/duck/' + id).then(() => {alert("The item with id: " + id + " deleted!")});
                    Vue.delete(this.ducks, this.index);
                }
            },
            updateDuck: function(id) {
                axios.put('https://rubberduckshop.azurewebsites.net/api/duck/' + id, this.duckName)
            }
        }
    }
</script>

<style scoped>
    .duckContainer {
        border-top: 2px aqua dashed;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .duckList {
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
    .duckButtons {
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