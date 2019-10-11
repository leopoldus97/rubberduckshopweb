<template>
    <div>
        <h1 style="-webkit-text-fill-color: aqua">Costumes</h1>
        <input v-model="searched" class="searchBar" placeholder="Search">
        <router-link to="/costumespageadd">
            <button class="btnAdd">Add Costume</button>
        </router-link>

        <div class="costumeContainer">
            <ul v-for="(costume, index) in costumes" :key="index">
                <li>
                    <div class="costumeList">
                        <div>
                            {{costume.id}}. {{costume.name}}
                        </div>
                        <div class="costumeButtons">
                            <router-link :to="`/costumespageupdate/${costume.id}`">
                                <i class="fas fa-pencil-alt"  v-on:click="updateCostume(costume.id)"></i>
                            </router-link>
                        </div>
                        <div class="costumeButtons">
                            <i class="fas fa-backspace" v-on:click="deleteCostume(costume.id)"></i>
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
        name: "CostumesPage",
        mounted() {
            this.loadCostume();
        },
        data: () => {
            return {
                costumes: [],
                costumeName: ""
            }
        },
        methods: {
            loadCostume:  function() {
                axios.get('https://kleasv.azurewebsites.net/api/costume').then(response => this.costumes = response.data)
            },
            deleteCostume: function (id) {
                if (confirm("Do you want to delete product with " + id)) {
                    axios.delete('https://kleasv.azurewebsites.net/api/costume/' + id).then(() => {alert("The item with id: " + id + " deleted!")});
                    Vue.delete(this.colors, this.index);
                }
            },
            updateCostume: function(id) {
                axios.put('https://kleasv.azurewebsites.net/api/costume/' + id, this.costumeName)
            }
        }
    }
</script>

<style scoped>
    .costumeContainer {
        border-top: 2px aqua dashed;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .costumeList {
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
    .costumeButtons {
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