<template>
  <footer :class="!isHomePage || isMobile ? 'full-width' : 'absolute'">
    <div />
    <div class="container animate__animated animate__backInUp">
      <img v-for="(icon, i) in icons" :key="i" :src="icon" />
    </div>
  </footer>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterPart",
  data() {
    return {
      icons: [
        require("@/assets/instagram.svg"),
        require("@/assets/twitter.svg"),
        require("@/assets/facebook.svg"),
        require("@/assets/linkedin.svg"),
        require("@/assets/gmail.svg"),
      ],
      isMobile: window.innerWidth < 768,
    };
  },
  computed: {
    isHomePage() {
      return this.$route.name === "home";
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  unmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 768;
    },
  },
});
</script>
<style lang="scss" scoped>
footer {
  width: 100%;
  display: grid;
  grid-template-columns: 50vw 50vw;
  position: sticky;
  bottom: 0;
  .container {
    padding: 47px 47px 20px 47px;
    img {
      margin: 0 14px;
      cursor: pointer;
    }
  }
}
.full-width {
  grid-template-columns: 1fr;
}
.absolute {
  position: absolute;
  bottom: 0;
}
@media (max-width: 768px) {
  footer {
    grid-template-columns: 1fr;
    position: relative;
    width: 100%;
    .container {
      padding: 36px 20px 20px 20px;
      img {
        margin: 0 7px;
        width: 27px;
      }
    }
  }
}
</style>
