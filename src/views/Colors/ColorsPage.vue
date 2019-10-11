<template>
    <div>
        <h1 style="-webkit-text-fill-color: aqua">Colors</h1>
        <input v-model="searched" class="searchBar" placeholder="Search">
        <router-link to="/colorspageadd">
            <button class="btnAdd">Add Color</button>
        </router-link>

        <div class="colorContainer">
                <ul v-for="(color, index) in colors" v-bind:key="index">
                    <li>
                        <div class="colorList">
                            <div>
                                {{color.id}}. {{color.name}}
                            </div>
                                <div class="colorButtons">
                                    <router-link :to="`/colorspageupdate/${color.id}`">
                                        <!--<router-link to="/colorspageupdate">-->
                                        <i class="fas fa-pencil-alt" v-on:click="updateColor(color.id)"></i>
                                    </router-link>
                                </div>
                                <div class="colorButtons">
                                    <i class="fas fa-backspace" v-on:click="deleteColor(index, color.id)"></i>
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
            this.loadColors()
        },
        name: "ColorsPage",
        data: () => {
            return {
                colors: [],
                colorName: ""
            }
        },
        methods: {
            loadColors:  function() {
                axios.get('https://kleasv.azurewebsites.net/api/color').then(response => this.colors = response.data)
            },
            deleteColor: function (index, id) {
                if (confirm("Do you want to delete product with " + id)) {
                    axios.delete('https://kleasv.azurewebsites.net/api/color/' + id).then(() =>
                    {
                        alert("The item with id: " + id + " deleted!")
                    });
                    Vue.delete(this.colors, index);
                }
            },
            updateColor: function(id) {
                axios.put('https://kleasv.azurewebsites.net/api/color/' + id, this.colorName)
            }
        }
    }
</script>

<style scoped>
    .colorContainer {
        border-top: 2px aqua dashed;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 30px;
    }
    .colorList {
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
    .colorButtons {
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