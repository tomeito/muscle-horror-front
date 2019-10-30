<template>
    <div class="recents">
        <ol id="recents" v-if="gotData">
            <li :key="result.id" v-for="result in results"><router-link :to="{name:'result', params:{id: result.id}}">{{ result.name }} </router-link></li>
        </ol>
        <div class="loading" v-else>
            <p>Now Loading…</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Recents",
        data(){
            return {
                results: Array,
                gotData: false
            }
        },
        created(){
            this.$axios.get('https://muscle-horror-api.herokuapp.com/results?per_page=15')
                .then(response => {
                    this.results = response.data.result;
                    this.gotData = true;
                })
        }
    }
</script>

<style lang="scss" scoped>
    @import '../colors.scss';
    .recents {
        text-align: left;
        background-color: $bg-lightgreen;
        border: 3px solid black;
        font-weight: bold;
        padding: 1em;
        color: black;
        ol#recents{
            margin: 0;
            padding-left: 2em;
            li {
                margin-bottom: 0.2em;
            }
        }
    }
</style>