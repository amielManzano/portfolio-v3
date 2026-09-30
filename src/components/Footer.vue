<template>
  <footer :class="isHomePage ? 'absolute' : 'full-width'">
    <div class="container animate__animated animate__backInUp">
      <div class="connect-group">
        <span class="social-label">CONNECT</span>
        <ul class="social-list" aria-label="Social platforms">
          <li v-for="icon in icons" :key="icon.name" :title="icon.name">
            <img :src="icon.src" :alt="icon.name" />
          </li>
        </ul>
      </div>
      <p class="credit"><span class="credit-year">© 2026 </span><strong>AMIEL MANZANO</strong></p>
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
        { name: "LinkedIn", src: require("@/assets/linkedin.svg") },
        { name: "Email", src: require("@/assets/gmail.svg") },
        { name: "Instagram", src: require("@/assets/instagram.svg") },
        { name: "Twitter", src: require("@/assets/twitter.svg") },
        { name: "Facebook", src: require("@/assets/facebook.svg") },
      ],
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
footer {
  width: 100%;
  display: grid;
  grid-template-columns: 50vw 50vw;
  position: sticky;
  bottom: 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    padding: 32px 8.5vw 20px 24px;

    .connect-group {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .social-label {
      padding-right: 14px;
      border-right: 1px solid rgba(102, 252, 241, .3);
      color: var(--semi-dark-green);
      font: 700 8px/1 "Manrope", sans-serif;
      letter-spacing: .14em;
    }

    .social-list {
      display: flex;
      align-items: center;
      gap: 7px;
      margin: 0;
      padding: 0;
      list-style: none;
    }

    li {
      display: grid;
      width: 38px;
      height: 38px;
      place-items: center;
      border: 1px solid rgba(102, 252, 241, .22);
      transition: border-color .2s ease, transform .2s ease;
    }

    li:hover {
      transform: translateY(-2px);
      border-color: var(--light-blue);
    }

    img {
      width: 18px;
      height: 18px;
    }

    .credit {
      margin: 0;
      padding-left: 18px;
      border-left: 1px solid rgba(102, 252, 241, .22);
      color: rgba(196, 198, 200, .62);
      font: 700 8px/1.4 "Manrope", sans-serif;
      letter-spacing: .1em;
      white-space: nowrap;
    }

    .credit strong { color: inherit; font: inherit; }
  }
}
.full-width {
  grid-template-columns: 1fr;
  .container { grid-column: 1; justify-content: center; padding-right: 24px; padding-left: 24px; }
}
.absolute {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  .container { grid-column: 1 / -1; justify-content: center; padding-right: 24px; padding-left: 24px; }
}
@media (max-width: 575px) {
  footer {
    grid-template-columns: 1fr;
    width: 100%;
    .container {
      flex-direction: column;
      justify-content: center;
      gap: 12px;
      padding: 18px 12px 14px;

      .connect-group { flex-direction: column; align-items: center; gap: 7px; }
      .social-label {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0;
        border: 0;
        color: var(--light-blue);
        font-size: 7px;
        letter-spacing: .18em;
      }
      .social-list { gap: 5px; }
      li { width: 32px; height: 32px; }
      img { width: 15px; height: 15px; }
      .credit {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 7px;
        padding: 0;
        border: 0;
        font-size: 8px;
      }
      .credit-year { color: var(--semi-dark-green); font-size: 7px; }
      .credit strong { color: var(--washed-white); font-size: 8px; letter-spacing: .12em; }
    }
  }

  .absolute .container,
  .full-width .container { padding: 18px 12px 14px; }

  footer.full-width { position: relative; }
}
</style>
