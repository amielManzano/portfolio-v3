<template>
  <header>
    <nav>
      <div v-if="showMenu" id="menu-panel" class="menu-modal">
        <menu-part @close="closeMenu" />
      </div>
      <button
        class="menu-control animate__animated animate__backInLeft"
        type="button"
        :aria-label="showMenu ? 'Menu open' : 'Open menu'"
        :aria-expanded="showMenu"
        aria-controls="menu-panel"
        @click="openMenu"
      >
        <span class="menu-icon" aria-hidden="true"><img :src="menu" alt="" /></span>
        <span class="menu-copy"><small>01 / NAVIGATION</small><strong>MENU</strong></span>
        <span class="menu-status" aria-hidden="true"></span>
      </button>
      <img
        :src="logo"
        class="logo animate__animated animate__backInRight"
        alt="logo"
        @click="() => $router.push('/')"
      />
    </nav>
  </header>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MenuPart from "./Menu.vue";

export default defineComponent({
  name: "HeaderPart",
  components: {
    MenuPart,
  },
  data() {
    return {
      text: "sample",
      menu: require("@/assets/menu.svg"),
      logo: require("@/assets/logo.png"),
      showMenu: false,
    };
  },
  computed: {
    isHomePage() {
      return this.$route.name === "home";
    },
  },
  methods: {
    openMenu() {
      this.showMenu = true;
    },
    closeMenu() {
      this.showMenu = false;
    },
  },
});
</script>
<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

  nav {
    padding: 39px 51px 0 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    .menu-modal {
      height: 100dvh;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 2;
    }

    .menu-control {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 164px;
      min-height: 54px;
      padding: 7px 13px 7px 8px;
      border: 1px solid rgba(102, 252, 241, .34);
      border-radius: 3px;
      background: rgba(11, 12, 16, .76);
      color: white;
      text-align: left;
      cursor: pointer;
      z-index: 1;
      transition: border-color .2s ease, background-color .2s ease, transform .2s ease;

      &:hover {
        transform: translateY(-2px);
        border-color: var(--light-blue);
        background: rgba(14, 45, 44, .88);
      }

      &:focus-visible {
        outline: 2px solid var(--light-blue);
        outline-offset: 3px;
      }

      .menu-icon {
        display: grid;
        width: 38px;
        height: 38px;
        flex: 0 0 38px;
        place-items: center;
        border-right: 1px solid rgba(102, 252, 241, .25);
      }

      img {
        width: 20px;
        height: 14px;
        filter: invert(100%);
      }

      .menu-copy {
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 4px;
      }

      small {
        color: var(--semi-dark-green);
        font: 700 7px/1 "Manrope", sans-serif;
        letter-spacing: .12em;
      }

      strong {
        color: var(--washed-white);
        font: 800 11px/1 "Manrope", sans-serif;
        letter-spacing: .16em;
      }

      .menu-status {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: var(--light-blue);
        box-shadow: 0 0 8px rgba(102, 252, 241, .7);
      }
    }

    .logo {
      width: 138px;
      height: 138px;
      cursor: pointer;
    }
  }
}

// mobile
@media (max-width: 768px) {
  header {
    z-index: 1000;

    nav {
      flex-direction: row-reverse;
      padding: 12px 24px 0 18px;

      .menu-control {
        min-width: 110px;
        min-height: 42px;
        gap: 8px;
        padding: 5px 9px 5px 5px;

        .menu-icon {
          width: 30px;
          height: 30px;
          flex-basis: 30px;
        }

        img { width: 17px; height: 12px; }
        small, .menu-status { display: none; }
        strong { font-size: 9px; }
      }

      .logo {
        width: 82px;
        height: 74px;
      }
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  header nav { padding: 24px clamp(28px, 4vw, 40px); }
  header nav .menu-control { min-width: 148px; min-height: 50px; }
  header nav .logo { width: 112px; height: 112px; }
}
</style>
