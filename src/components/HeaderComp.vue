<template>
    <div>
        <h1 style="align-self: center">Admin</h1>
        <p>
            <button>Ducks</button>
            <button>Colors</button>
            <button>Costumes</button>
            <button>Patterns</button>
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
        background-color: aqua;
        border-color: black;
        border-width: 1px;
        width: 300px;
        height: 150px;
    }
    button:hover {
        background-color: aquamarine;
    }
</style>