<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
@font-face {
  font-family: 'KaushanScript';
  src: url('../src/assets/fonts/KaushanScript-Regular.ttf') format('truetype');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}
@font-face {
  font-family: 'SpaceMono';
  src: url('../src/assets/fonts/SpaceMono-Regular.ttf') format('truetype');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}
#app {
  font-family: SpaceMono, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
}
.fs-7 {
  font-size: 0.8rem !important;
}
</style>
