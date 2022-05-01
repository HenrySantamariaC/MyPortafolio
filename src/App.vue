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
}
body {
  margin: 0;
  color: #000;
}
.theme-violet {
  --bg-primary: #22027a;
  --bg-primary-light: #22027ada;
}
.theme-yellow {
  --bg-primary: #FF9000;
  --bg-primary-light: #FF9000da;
}
.theme-dark {
  --bg-primary: #0F0E0E;
  --bg-primary-light: #0F0E0Eda;
}
.theme-blue {
  --bg-primary: #0A1931;
  --bg-primary-light: #0A1931da;
}
.theme-white {
  --bg-primary: #FFFFFF;
  --bg-primary-light: #FFFFFFda;
}
.theme-red {
  --bg-primary: #BA1F22;
  --bg-primary-light: #BA1F22da;
}
.theme-white .text-white {
  color: #000 !important;
}
.theme-white .square-content {
  border: 2px #000 solid;
}
.bg-violet {
  background: #22027a !important;
}
.bg-yellow {
  background: #FF9000 !important;
}
.bg-dark {
  background: #0F0E0E !important;
}
.bg-blue {
  background: #0A1931 !important;
}
.bg-white {
  background: #FFFFFF !important;
}
.bg-red {
  background: #BA1F22 !important;
}
.fs-7 {
  font-size: 0.8rem !important;
}
</style>
