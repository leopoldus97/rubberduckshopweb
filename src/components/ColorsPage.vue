<template>
    <div>
        <h1>Colors</h1>
        <div class="colorContainer">
            <div class="colorList">
                <ul v-for="color in colors" v-bind:key="color.id">
                    <li>
                        <div>
                            {{color.id}}. {{color.name}}
                        </div>
                        <div>
                            <i class="fas fa-pencil-alt"></i>
                            <i class="fas fa-backspace"></i>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "ColorsPage",
        data: () => {
            return {
                colors: []
            }
        },
        methods: {
            loadColors:  function() {
                axios.get('https://rubberduckshop.azurewebsites.net/api/color').then(response => this.colors = response.data)
            }
        }
    }
</script>

<style scoped>
    .colorContainer {
        border: 1px aqua;
        background-color: black;
    }
    .colorList {
        border: 1px aqua;
        background-color: black;
        margin-top: 15px;
        margin-bottom: 15px;
        padding: 5px 5px 5px 5px;
        text-align-all: center;
        fill: aqua;
    }
</style>