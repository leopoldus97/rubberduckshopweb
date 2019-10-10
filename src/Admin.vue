<template>
    <div id="app">
        <header>
            <HeaderComp></HeaderComp>
        </header>
        <body>

        </body>
        <footer>

        </footer>
    </div>
</template>

<script>
    import axios from 'axios';
    import HeaderComp from "@/components/HeaderComp";

    export default {
        name: "Admin",
        components: {HeaderComp},
        component: {
            HeaderComp
        },
        data: () => {
            return {
                ducks: [],
                colors: [],
                costumes: [],
                patterns: []
            }
        },
        methods: {
          loadDucks:  function() {
              axios.get('https://rubberduckshop.azurewebsites.net/api/duck').then(response => this.ducks = response.data)
          },
            loadColors:  function() {
                axios.get('https://rubberduckshop.azurewebsites.net/api/color').then(response => this.colors = response.data)
            },
            loadCostumes:  function() {
                axios.get('https://rubberduckshop.azurewebsites.net/api/costume').then(response => this.costumes = response.data)
            },
            loadPatterns:  function() {
                axios.get('https://rubberduckshop.azurewebsites.net/api/pattern').then(response => this.patterns = response.data)
            }
        }
    }
</script>

<style scoped>

</style>