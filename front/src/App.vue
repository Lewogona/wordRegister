<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
$primary: rgb(88, 44, 88);
$red: rgb(150, 6, 6);

@import '../node_modules/bootstrap/scss/bootstrap';
@import '../node_modules/bootstrap-vue/src/index.scss';

html, body {
  height: 100%;
  background-color: rgba(180, 150, 170, 0.1);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;
  margin: auto;
  height: 100%;
  width: 100%;
    @include media-breakpoint-up(xl) {
        width: 980px;
    }
}

a {
  text-decoration: none;
  color: black;
}

nav {
  padding: 30px;
  font-weight: bold;
}

input:read-only {
  background-color: rgba(180, 150, 170, 0.1)!important;
}
</style>
