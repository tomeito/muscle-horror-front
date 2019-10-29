<template>
    <div class="buttons">
        <a :href="url" id="tweet" class="tweet" target="_blank" rel="nofollow noopener">ツイートする</a>
        <a href="https://docs.google.com/forms/u/0/" class="enquete" target="_blank" rel="nofollow noopener">アンケートにご協力下さい</a>
    </div>
</template>

<script>
    export default {
        name: "BottomButtons",
        props: ["result"],
        data(){
            return {
                url: String
            }
        },
        watch: {
            result: function() {
                this.url = `https://twitter.com/intent/tweet?text=${this.result.name}の%20%23筋肉ホラー祭り%20の結果はこちら！%20${encodeURI(window.location)}`;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .buttons {
        margin: 1em 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 0.5em;
        a {
            width: 100%;
            padding: 1.5em 0;
            color: black;
            background-color: white;
            border: 2px solid black;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;

        }
    }
</style>