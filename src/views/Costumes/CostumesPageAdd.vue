<template>
    <div style="text-align: center">
        <div class="buttonBox">
            Name: <input v-model="costumeName" class="textInp" placeholder="Name" type="text">
            <button v-on:click="addCostume" class="btnAdd">Add</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "CostumesPageAdd",
        data: () => ({
            costumeName: ''
        }),
        methods: {
            addCostume: function () {
                axios.post('https://kleasv.azurewebsites.net/api/costume', this.costumeName);
                this.$router.replace("/costumespage")
            }
        }
    }
</script>

<style scoped>
    .buttonBox {
        border: 1px aqua solid;
        width: 40%;
        height: 30%;
        fill: aqua;
        text-align: center;
        -webkit-text-fill-color: aqua;
        margin-top: 10%;
        padding: 100px 20px 100px 20px;
        display: inline-block;
    }
    button:hover {
        background-color: aqua;
        -webkit-text-fill-color: black;
    }
    .textInp {
        border-radius: 25px 25px 25px 25px;
        margin-left: 15px;
        align-self: center;
        width: 300px;
        height: 30px;
        -webkit-text-fill-color: black;
    }
    .btnAdd {
        background-color: black;
        border-color: aqua;
        border-width: 1px;
        border-radius: 25px 25px 25px 25px;
        width: 150px;
        height: 30px;
        margin-right: 15px;
        margin-left: 15px;
        -webkit-text-fill-color: aqua;
    }
</style>