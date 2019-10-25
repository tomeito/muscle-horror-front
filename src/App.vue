<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

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
  text-align: center;
  color: black;
  background-color: $bg-common;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
