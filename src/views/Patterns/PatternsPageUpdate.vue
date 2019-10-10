<template>
    <div style="text-align: center">
        <div class="buttonBox">
            Name: <input v-model="patternName" class="textInp" placeholder="Name" type="text">
            <button v-on:click="editPattern" class="btnAdd">Edit</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        mounted() {
            //this.pattern = this.getPattern(this.$route.params.patternId)
        },
        name: "PatternsPageUpdate",
        data: () => ({
            pattern: ''
        }),
        methods: {
            getPattern: function (id) {
                axios.get('https://kleasv.azurewebsites.net/api/pattern/' + id).then((response) => this.pattern = response.data)
            },
            editPattern: function () {
                axios.put('https://kleasv.azurewebsites.net/api/pattern/' + this.pattern.id , { id: this.pattern.id, name: this.pattern.name }).then(() =>
                {
                    alert("The pattern with id " + this.pattern.id + " has been changed!")
                });
                this.$router.replace("/patternspage")
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