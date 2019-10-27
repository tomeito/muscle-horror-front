<template>
  <div class="graph">
    <div id="title"><span id="team">{{ name || "あなたのチーム" }}</span>のグラフ</div>
    <radar class="radar"> </radar>
  </div>
</template>

<script>
  import radar from '@/components/radar'
  export default {
    name: "Graph",
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

    #title {
      margin: 1em 0;

      #team {
        border: 1px solid black;
        background-color: white;
        padding: 0.5em;
        margin-right: 5px;
      }
    }

    .radar {
      display: inline-block;
      background-color: white;
      * {
        max-width: 100%;
      }
    }
  }
</style>