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
    },
  }
  
  window.onbeforeunload = function (e) {
    if(window.location.pathname === '/graph') {
      return false
    }
  }
</script>

<style lang="scss" scoped>
  @import "../colors.scss";

  .graph{
    background-color: $bg-pink;
    border: 3px solid black;
    font-weight: bold;
    text-align: left;
    padding: 0 1em 1em 1em;

    #title {
      margin: 1em 0;

      #team {
        border: 3px solid black;
        background-color: white;
        padding: 0.5em;
        margin-right: 5px;
      }
    }

    .radar {
      background-color: white;
      border: 3px solid black;
    }
  }
</style>