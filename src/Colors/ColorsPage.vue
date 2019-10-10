<template>
    <div>
        <h1 style="-webkit-text-fill-color: aqua">Colors</h1>
        <input v-model="searched" id="searchBar">
        <router-link to="/colorspageadd">
            <button>Add Color</button>
        </router-link>

        <div id="colorContainer">
            <div id="colorList">
                <ul v-for="color in colors" v-bind:key="color.id">
                    <li>
                        <div>
                            {{color.id}}. {{color.name}}
                        </div>
                        <div>
                            <div id="hidden" hidden>
                                Name: <input v-model="colorName">
                            </div>
                            <i class="fas fa-pencil-alt" v-on:dblclick="openUpdateColor" v-on:click="updateColor(color.id)"></i>
                            <i class="fas fa-backspace" v-on:click="deleteColor(color.id)"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "ColorsPage",
        data: () => {
            return {
                colors: [],
                colorName: ""
            }
        },
        methods: {
            loadColors:  function() {
                axios.get('https://rubberduckshop.azurewebsites.net/api/color').then(response => this.colors = response.data)
            },
            deleteColor: function (id) {
                if (confirm("Do you want to delete product with " + id)) {
                    axios.delete('https://rubberduckshop.azurewebsites.net/api/color/' + id)
                }
            },
            openUpdateColor: function () {
                $("#hidden").show
            },
            updateColor: function(id) {
                axios.put('https://rubberduckshop.azurewebsites.net/api/color/' + id, this.colorName)
            }
        }
    }
</script>

<style scoped>
    #colorContainer {
        border: 1px aqua;
        background-color: black;
    }
    #colorList {
        border: 1px aqua;
        background-color: black;
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 5px 5px 5px 5px;
        text-align-all: center;
        -webkit-text-fill-color: aqua;
    }
    #searchBar {
        border-radius: 25px 25px 25px 25px;
        border: 1px aqua;
        background-color: azure;
        align-self: center;
        margin-right: 30px;
        margin-bottom: 15px;
        margin-top: 15px;
        -webkit-text-fill-color: aqua;
    }
</style>