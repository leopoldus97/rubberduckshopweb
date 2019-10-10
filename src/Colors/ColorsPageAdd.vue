<template>
    <div>
        <div class="buttonBox">
            Name: <input v-model="colorName">
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "ColorsPageAdd",
        data: () => {
            return {
                colorName: ""
            }
        },
        methods: {
            addColor: function () {
                axios.put('https://rubberduckshop.azurewebsites.net/api/color/', this.colorName)
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
    text-align-all: center;
    fill: aqua;
}
</style>