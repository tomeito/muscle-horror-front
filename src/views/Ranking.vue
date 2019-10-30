<template>
    <div class="ranking">
        <ul id="results" v-if="gotData">
            <li v-bind:key="result.id" v-for="(result, index) in results">
                {{ index + 1 }}位 {{ result.name }} {{ result.score }}
            </li>
        </ul>
        <div class="loading" v-else>
            <p>Now Loading…</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
    name: "Ranking",
    methods: {
        getVals(){
            axios.get('https://muscle-horror-api.herokuapp.com/ranking?per_page=1000')
                .then(response => {
                    this.results = response.data.result;
                    this.gotData = true;
                })
        }
    },
    data(){
        return {
            results: Array,
            gotData: false
        }
    },
    created(){
        this.getVals();
    }
  }
</script>

<style lang="scss" scoped>
    @import "../colors.scss";
    .ranking {
        text-align: left;
        background-color: $bg-blue;
        border: 3px solid black;
        font-weight: bold;
        padding: 1em;
        color: black;
        ul#results{
            margin: 0;
            padding-left: 1em;
            li {
                list-style: none;
                margin-bottom: 0.2em;
            }
        }
    }
</style>