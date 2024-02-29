<template>
  <header-part />
  <router-view />
  <footer-part />
</template>

<script setup>
import HeaderPart from "./components/Header.vue";
import FooterPart from "./components/Footer.vue";
import "animate.css";
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap");

:root {
  --black: #0b0c10;
  --light-blue: #66fcf1;
  --dark-green: #0e2d2c;
  --semi-dark-green: #45a29f;
  --washed-white: #c4c6c8;
}

* {
  margin: 0;
  font-family: Noto Sans;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100dvh;
  overflow-x: hidden;
}

html {
  background: linear-gradient(180deg, #0b0c10 70.53%, #0e2d2c 92.71%);
  background-repeat: no-repeat;
  min-height: 100dvh;
  height: auto;
  overflow-x: hidden;
}

.naveBtnStyle,
.counterNewStyle,
.CounterPosition,
.CAnewStyle {
  display: none !important;
}
</style>
