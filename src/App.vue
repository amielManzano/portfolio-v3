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
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Urbanist:wght@400;500;600;700;800&display=swap");

:root {
  --black: #0b0c10;
  --light-blue: #66fcf1;
  --dark-green: #0e2d2c;
  --semi-dark-green: #45a29f;
  --washed-white: #c4c6c8;
}

* {
  margin: 0;
  box-sizing: border-box;
  font-family: "Manrope", sans-serif;
}

button,
input,
textarea,
select {
  font: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Manrope", sans-serif;
  font-weight: 400;
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
  background: var(--black);
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
