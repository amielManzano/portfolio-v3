<template>
  <header>
    <nav>
      <div v-if="showMenu" class="menu-modal">
        <menu-part @close="closeMenu" />
      </div>
      <div class="menu animate__animated animate__backInLeft">
        <img
          :src="menu"
          class="menu-img white-img"
          alt="menu"
          @click="openMenu"
        />
        <span class="white-t">MENU</span>
      </div>
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
  position: absolute;
  top: 0;
  width: 100%;

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

      .white-t {
        color: white;
      }

      .white-img {
        -webkit-filter: invert(100%);
        filter: invert(100%);
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
