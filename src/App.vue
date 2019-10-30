<template>
  <div id="app">
    <img src="./assets/muscle_horror_logo.png" alt="筋肉ホラー祭り" class="header_logo"/>
    <nav id="nav">
      <router-link v-if="!isNaN(store.state.userId)" :to="{ name: 'result', params: { id: store.state.userId }}" class="result">結果</router-link>
      <router-link v-if="!isNaN(store.state.userId)" to="/graph" class="graph">グラフ</router-link>
      <router-link to="/ranking" class="ranking">ランキング</router-link>
    </div>
    <router-view @result-changed="resultChanged" />
    <bottom-buttons :result="result"></bottom-buttons>
  </div>
</template>

<script>
  import BottomButtons from "./components/BottomButtons";
  export default {
    components: {BottomButtons},
    props:["store"],
    data(){
      return {
        result: this.store.state.result
      }
    },
    methods: {
      resultChanged: function(){
        this.result = this.store.state.result;
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

  .header_logo {
    width: 100%;
  }
}
#nav {
  text-align: left;
  a {
    border: 3px solid black;
    border-bottom: none;
    &:nth-child(n+2){
      border-left: none;
    }
    display: inline-block;
    font-weight: bold;
    color: black;
    text-decoration: none;
    padding: 3px 1em;
    transition: 0.25s ease-in-out;
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
      &.recents {
        background-color: $bg-lightgreen;
      }
    }
    &:not(.router-link-active) {
      background-color: white;
    }
  }
}


@media screen and (min-width: 850px ){
  #app .header_logo {
    max-height: 180px;
    object-fit: scale-down;
  }
}
</style>