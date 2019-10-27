<template>
  <div id="app">
    <div id="nav">
      <router-link v-if="!isNaN(store.state.userId)" :to="{ name: 'result', params: { id: store.state.userId }}" class="result">結果</router-link>
      <router-link v-if="!isNaN(store.state.userId)" to="/graph" class="graph">グラフ</router-link>
      <router-link to="/ranking" class="ranking">ランキング</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    props: {
      store: {
      }
    }
  }
</script>

<style lang="scss">
@import "./colors.scss";

@font-face {
  font-family: "LogoTypeGothic";
  src: url("./assets/LogoTypeGothic.otf") format("opentype"),
       url("./assets/07LogoTypeGothic7.ttf") format("truetype");
}

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'LogoTypeGothic', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
  background-color: $bg-common;
  padding: 10px;
  min-height: calc(100vh - 20px);
}
#nav {
  text-align: left;
  a {
    border: 2px solid black;
    border-bottom: none;
    &:nth-child(n+2){
      border-left: none;
    }
    display: inline-block;
    font-weight: bold;
    color: black;
    text-decoration: none;
    padding: 3px 1em;
    &.router-link-active {
      &.result {
        background-color: $bg-yellow;
      }
      &.graph {
        background-color: $bg-pink;
      }
      &.ranking {
        background-color: $bg-blue;
      }
    }
    &:not(.router-link-active) {
      background-color: white;
    }
  }
}
</style>
