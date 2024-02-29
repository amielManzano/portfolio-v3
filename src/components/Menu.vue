<template>
  <div class="menu-modal">
    <div
      class="tab tab-1 animate__animated animate__slideInLeft"
      @click="openPage('home')"
    >
      <div class="info">
        <img :src="home" alt="logo" />
        <span class="text">Home</span>
      </div>
    </div>
    <div
      class="tab tab-2 animate__animated animate__slideInRight"
      @click="openPage('about me')"
    >
      <div class="info">
        <img :src="about" alt="logo" />
        <span class="text">About Me</span>
      </div>
    </div>
    <div class="tab tab-3 animate__animated animate__slideInRight animate__delay-1s">
      <div class="info">
        <img :src="projects" alt="logo" />
        <span class="text">Projects</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuPart",
  data() {
    return {
      home: require("@/assets/home.svg"),
      about: require("@/assets/about.svg"),
      projects: require("@/assets/projects.svg"),
      showMenu: false,
    };
  },
  emits: ["close"],
  methods: {
    openMenu() {
      this.showMenu = true;
    },
    openPage(page) {
      switch (page) {
        case "home":
          this.$router.push("/");
          break;
        case "about me":
          this.$router.push("/about");
          break;
      }

      this.$emit("close");
    },
  },
});
</script>
<style lang="scss" scoped>
.menu-modal {
  height: 100dvh;
  width: 100%;
  background: transparent;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;

      img {
        width: 10%;
      }

      .text {
        font-size: 3dvw;
        font-weight: 300;
      }
    }
  }

  .tab-1 {
    grid-row: 1 / 3;
    background: var(--dark-green);
    animation-duration: 0.5s;

    .text {
      color: var(--washed-white);
    }
  }

  .tab-2 {
    background: var(--semi-dark-green);
    animation-duration: 0.5s;
    animation-delay: 0.5s !important;

    .text {
      color: white;
    }
  }

  .tab-3 {
    background: var(--black);
    animation-duration: 0.5s;

    .text {
      color: var(--light-blue);
    }
  }
}

// mobile
@media (max-width: 768px) {
  .menu-modal {
    display: flex;
    flex-direction: column;
    height: 100dvh;

    .tab {
      .info {
        img {
          width: 12%;
        }

        .text {
          font-size: 7.5dvw;
        }
      }
    }

    .tab-1 {
      height: calc(100% / 3);
    }

    .tab-2 {
      height: calc(100% / 3);
      animation-name: slideInLeft !important;
    }

    .tab-3 {
      height: calc(100% / 3);
      animation-name: slideInLeft !important;
    }
  }
}
</style>
