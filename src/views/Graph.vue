<template>
  <div class="graph">
    <div id="title"><span id="team">{{ name || "あなたのチーム" }}</span>のグラフ</div>
    <radar class="radar"> </radar>
  </div>
</template>

<script>
  import radar from '@/components/radar'
  import store from '@/store'
  export default {
    name: "Graph",
    data(){
      return {
        "name": store.state.result.name
      }
    },
    components: {
      radar
    }
  }
</script>

<style lang="scss" scoped>
  @import "../colors.scss";

  .graph{
    background-color: $bg-pink;
    border: 2px solid black;
    font-weight: bold;
    text-align: left;
    padding-left: 1em;
    padding-bottom: 1em;

    #title {
      margin: 1em 0;

      #team {
        border: 2px solid black;
        background-color: white;
        padding: 0.5em;
        margin-right: 5px;
      }
    }

    .radar {
      display: inline-block;
      background-color: white;
      border: 2px solid black;
      * {
        max-width: 100%;
      }
    }
  }
</style>