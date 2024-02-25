<template>
  <header>
    <nav>
      <!-- <div v-if="isHomePage" /> -->
      <div class="menu animate__animated animate__backInLeft">
        <img :src="menu" class="menu-img" alt="menu" />
        <span>MENU</span>
      </div>
      <img :src="logo" class="logo animate__animated animate__backInRight" alt="logo" />
    </nav>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HeaderPart",
  data() {
    return {
      text: "sample",
      menu: require("@/assets/menu.svg"),
      logo: require("@/assets/logo.png"),
    };
  },
  computed: {
    isHomePage() {
      return this.$route.name === "home";
    },
  },
});
</script>
<style lang="scss" scoped>
header {
  position: absolute;
  top: 0;
  width: 100%;

  nav {
    padding: 39px 51px 0 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .menu {
      display: flex;
      align-items: center;
      z-index: 1;

      .menu-img {
        width: 57px;
        height: 40px;
        margin-right: 15px;
        cursor: pointer;
      }

      span {
        font-size: 22px;
        font-weight: 400;
        line-height: 37px;
        letter-spacing: 0em;
        text-align: center;
        color: var(--black);
      }
    }

    .logo {
      width: 138px;
      height: 138px;
    }
  }
}

// mobile
@media (max-width: 768px) {
  header {
    z-index: 1;

    nav {
      flex-direction: row-reverse;
      padding: 12px 24px 0 18px;

      .menu {
        .menu-img {
          width: 35.63px;
          height: 25px;
        }

        span {
          display: none;
        }
      }

      .logo {
        width: 82px;
        height: 74px;
      }
    }
  }
}
</style>
