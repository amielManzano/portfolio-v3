<template>
  <div class="menu-modal">
    <header class="menu-header">
      <div class="brand-lockup">
        
      </div>
      <button
        class="close-control"
        type="button"
        aria-label="Close menu"
        @click="$emit('close')"
      >
        <span>ESC</span>
        <strong>CLOSE</strong>
        <i aria-hidden="true"></i>
      </button>
    </header>

    <nav class="menu-nav" aria-label="Main navigation">
      <button class="tab" type="button" @click="openPage('home')">
        <span class="tab-number">01</span>
        <span class="tab-name">HOME</span>
        <span class="tab-action">OPEN <i aria-hidden="true"></i></span>
      </button>
      <button class="tab" type="button" @click="openPage('about me')">
        <span class="tab-number">02</span>
        <span class="tab-name">ABOUT ME</span>
        <span class="tab-action">OPEN <i aria-hidden="true"></i></span>
      </button>
      <button class="tab" type="button" @click="openPage('projects')">
        <span class="tab-number">03</span>
        <span class="tab-name">PROJECTS</span>
        <span class="tab-action">OPEN <i aria-hidden="true"></i></span>
      </button>
    </nav>

  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuPart",
  data() {
    return {
      showMenu: false,
    };
  },
  emits: ["close"],
  methods: {
    openMenu() {
      this.showMenu = true;
    },
    openPage(page: string) {
      switch (page) {
        case "home":
          this.$router.push("/");
          break;
        case "about me":
          this.$router.push("/about");
          break;
        case "projects":
          this.$router.push("/projects");
          break;
      }

      this.$emit("close");
    },
  },
});
</script>
<style lang="scss" scoped>
.menu-modal {
  position: fixed;
  inset: 0;
  display: grid;
  grid-template-rows: auto minmax(0, 1fr) auto;
  width: 100vw;
  min-height: 100dvh;
  height: 100dvh;
  overflow: auto;
  padding: clamp(24px, 5vw, 64px) clamp(20px, 5vw, 72px) 24px;
  background: var(--black);
  color: var(--washed-white);

  &::before {
    position: absolute;
    z-index: -1;
    inset: 0;
    background-image: linear-gradient(
        rgba(102, 252, 241, 0.07) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(102, 252, 241, 0.07) 1px, transparent 1px);
    background-size: 56px 56px;
    content: "";
    mask-image: linear-gradient(135deg, black, transparent 80%);
    pointer-events: none;
  }

  .menu-header,
  .brand-lockup,
  .close-control,
  .tab,
  .menu-footer {
    display: flex;
    align-items: center;
  }

  .menu-header {
    position: absolute;
    z-index: 3;
    top: clamp(16px, 4vh, 36px);
    right: clamp(16px, 4vw, 48px);
    justify-content: space-between;
    gap: 24px;
    animation: menu-header-enter 0.42s ease-out both;
  }

  .brand-copy {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  .brand-copy strong {
    display: flex;
    align-items: center;
    gap: 8px;
    color: white;
    font: 800 13px/1 "Manrope", sans-serif;
    letter-spacing: 0.1em;
  }
  .brand-copy .brand-first {
    color: var(--washed-white);
  }
  .brand-copy .brand-last {
    color: var(--light-blue);
  }
  .brand-copy strong i {
    color: var(--semi-dark-green);
    font-style: normal;
  }
  .brand-copy .brand-meta {
    color: var(--semi-dark-green);
    font: 700 7px/1 "Manrope", sans-serif;
    letter-spacing: 0.14em;
  }
  .brand-copy .brand-meta i {
    padding: 0 3px;
    color: var(--light-blue);
    font-style: normal;
  }

  .close-control {
    gap: 10px;
    min-height: 40px;
    padding: 0 12px;
    border: 1px solid rgba(102, 252, 241, 0.24);
    border-radius: 2px;
    background: rgba(11, 12, 16, 0.7);
    color: var(--washed-white);
    cursor: pointer;
    transition: border-color 0.2s ease, background-color 0.2s ease;
  }

  .close-control:hover,
  .close-control:focus-visible {
    border-color: var(--light-blue);
    background: var(--dark-green);
  }
  .close-control:focus-visible,
  .tab:focus-visible {
    outline: 2px solid var(--light-blue);
    outline-offset: 3px;
  }
  .close-control span {
    color: var(--semi-dark-green);
    font: 700 7px/1 "Manrope", sans-serif;
  }
  .close-control strong {
    font: 700 8px/1 "Manrope", sans-serif;
    letter-spacing: 0.12em;
  }
  .close-control i {
    position: relative;
    width: 12px;
    height: 12px;
  }
  .close-control i::before,
  .close-control i::after {
    position: absolute;
    top: 5px;
    left: 0;
    width: 12px;
    height: 1px;
    background: var(--light-blue);
    content: "";
    transform: rotate(45deg);
  }
  .close-control i::after {
    transform: rotate(-45deg);
  }

  .menu-nav {
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-rows: repeat(3, minmax(0, 1fr));
    width: 100%;
    margin: 0;
  }

  .tab {
    position: relative;
    display: grid;
    flex: none;
    grid-template-columns: 48px minmax(0, 1fr) 74px;
    align-items: center;
    gap: 18px;
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 12px clamp(20px, 8vw, 120px);
    border: 0;
    border-top: 1px solid rgba(196, 198, 200, 0.18);
    background: transparent;
    color: white;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s ease;
    animation: menu-row-enter 0.48s cubic-bezier(0.22, 0.68, 0.2, 1) both;

    &:nth-child(1) {
      animation-delay: 0.06s;
    }
    &:nth-child(2) {
      animation-delay: 0.14s;
    }
    &:nth-child(3) {
      animation-delay: 0.22s;
    }
    &:last-child {
      border-bottom: 1px solid rgba(196, 198, 200, 0.18);
    }
    &:hover {
      background: linear-gradient(90deg, rgba(14, 45, 44, 0.72), transparent);
    }
    &:hover .tab-name {
      color: var(--light-blue);
    }
    &:hover .tab-action {
      opacity: 1;
      transform: translateX(4px);
    }

    .tab-number {
      color: var(--semi-dark-green);
      font: 700 10px/1 "Manrope", sans-serif;
      letter-spacing: 0.08em;
    }

    .tab-icon {
      position: relative;
      display: grid;
      width: 42px;
      height: 42px;
      place-items: center;
      border: 1px solid rgba(102, 252, 241, 0.2);
      background: rgba(11, 12, 16, 0.55);

      .tab-glyph {
        color: transparent;
        font: 800 15px/1 "Manrope", sans-serif;
        -webkit-text-stroke: 0.8px var(--light-blue);
      }

      i {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 6px;
        height: 1px;
        background: var(--semi-dark-green);
      }
    }

    .tab-name {
      color: var(--washed-white);
      font: 700 clamp(32px, 5vw, 64px) / 1 "Manrope", sans-serif;
      letter-spacing: 0;
      white-space: nowrap;
      transition: color 0.2s ease;
    }

    .tab-action {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
      color: var(--semi-dark-green);
      font: 700 7px/1 "Manrope", sans-serif;
      letter-spacing: 0.12em;
      opacity: 0.62;
      transition: opacity 0.2s ease, transform 0.2s ease;
    }

    .tab-action i {
      width: 8px;
      height: 8px;
      border-top: 1px solid var(--light-blue);
      border-right: 1px solid var(--light-blue);
      transform: rotate(45deg);
    }
  }

  .menu-footer {
    display: none;
    justify-content: space-between;
    gap: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(102, 252, 241, 0.16);
    color: var(--semi-dark-green);
    font: 700 7px/1.2 "Manrope", sans-serif;
    letter-spacing: 0.14em;
  }
}

@keyframes menu-header-enter {
  from {
    opacity: 0;
    transform: translateY(-8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes menu-row-enter {
  from {
    opacity: 0;
    transform: translateX(-18px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .menu-modal {
    min-height: 100dvh;
    padding: 20px 20px 18px;
  }

  .menu-modal .menu-header {
    margin-bottom: 0;
  }
  .menu-modal .brand-copy strong {
    gap: 5px;
    font-size: 10px;
  }
  .menu-modal .close-control {
    min-height: 36px;
    gap: 8px;
    padding: 0 9px;
  }
  .menu-modal .close-control span {
    display: none;
  }
  .menu-modal .menu-nav {
    inset: 0;
    margin: 0;
  }
  .menu-modal .tab {
    grid-template-columns: 26px minmax(0, 1fr) 16px;
    gap: 10px;
    min-height: 0;
    padding: 10px 20px;
  }
  .menu-modal .tab-icon {
    width: 34px;
    height: 34px;
  }
  .menu-modal .tab-icon .tab-glyph {
    font-size: 13px;
  }
  .menu-modal .tab-name {
    font-size: clamp(28px, 8vw, 42px);
  }
  .menu-modal .tab-action {
    font-size: 0;
    opacity: 0.8;
  }
  .menu-modal .tab-action i {
    width: 7px;
    height: 7px;
  }
  .menu-modal .menu-footer {
    display: flex;
    margin-top: auto;
    font-size: 6px;
  }

  @media (max-height: 620px) {
    .menu-modal .menu-header {
      margin-bottom: 0;
    }
    .menu-modal .tab {
      min-height: 0;
    }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .menu-modal {
    padding: 32px clamp(32px, 6vw, 64px) 24px;
  }

  .menu-modal .menu-nav { margin: 0; }
  .menu-modal .tab {
    grid-template-columns: 42px minmax(0, 1fr) 68px;
    gap: 16px;
    min-height: 0;
    padding: 12px clamp(24px, 4vw, 48px);
  }
  .menu-modal .tab-name { font-size: clamp(36px, 5vw, 54px); }
}

@media (prefers-reduced-motion: reduce) {
  .menu-modal .menu-header,
  .menu-modal .tab {
    animation: none;
  }
}
</style>
