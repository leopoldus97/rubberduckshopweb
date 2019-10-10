<template>
    <div>
        <div class="buttonBox">
            Name: <input v-model="colorName" class="textInp">
                <router-link to="/colorspage">
                    <button v-on:click="addColor" class="btnAdd">Add</button>
                </router-link>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "ColorsPageAdd",
        data: () => {
            return {
                colorName: {
                    "name": ""
                }
            }
        },
        methods: {
            addColor: function () {
                axios.post('https://kleasv.azurewebsites.net/api/color', this.colorName)
            }
        }
    }
</script>

<style scoped>
    .buttonBox {
        border: 1px aqua;
        width: 400px;
        height: 200px;
        align-self: center;
        fill: aqua;
        text-align: center;
        -webkit-text-fill-color: aqua;
    }
    .textInp {
        border-radius: 25px 25px 25px 25px;
        margin-left: 15px;
        align-self: center;
        width: 200px;
        height: 50px;
        -webkit-text-fill-color: black;
    }
    .btnAdd {
        background-color: black;
        border-color: aqua;
        border-width: 1px;
        border-radius: 25px 25px 25px 25px;
        width: 150px;
        height: 50px;
        margin-right: 15px;
        margin-left: 15px;
        -webkit-text-fill-color: aqua;
    }
</style>