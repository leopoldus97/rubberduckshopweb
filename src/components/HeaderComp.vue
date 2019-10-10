<template>
    <div class="container">
        <h1 id="title">Admin</h1>
        <p>
            <router-link to="/duckspage">
                <button>Ducks</button>
            </router-link>
            <router-link to="/colorspage">
                <button >Colors</button>
            </router-link>
            <router-link to="/costumespage">
                <button>Costumes</button>
            </router-link>
            <router-link to="/patternspage">
                <button>Patterns</button>
            </router-link>

        </p>
    </div>
</template>

<script>
    export default {
        name: "HeaderComp"
    }
</script>

<style scoped>
    button {
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
    button:hover {
        background-color: aqua;
        -webkit-text-fill-color: black;
    }
    #title {
        align-self: center;
        -webkit-text-fill-color: aqua;
    }
    .container {
        border-bottom: 1px aqua solid;
    }
</style>