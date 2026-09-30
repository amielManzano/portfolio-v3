<template>
  <div class="home">
    <div class="grid-overlay" aria-hidden="true"></div>
    <main class="hero-content">
      <p class="eyebrow"><span class="eyebrow-mark" aria-hidden="true"></span> LEAD SOFTWARE ENGINEER <span class="eyebrow-divider">/</span> PRODUCT BUILDER</p>
      <h1 class="name"><span>Amiel</span><em>Manzano</em></h1>
      <p class="sub-name">
        I build thoughtful digital products and lead the teams that bring them to life.
      </p>
      <div class="buttons">
        <button class="download" @click="downloadPDF">
          <span class="button-index">01</span>
          <span class="button-label">Download CV</span>
          <span class="button-icon"><img :src="download" alt="" /></span>
        </button>
        <button class="view-portfolio" @click="() => $router.push('/projects')">
          <span class="button-index">02</span>
          <span class="button-label">Explore work</span>
          <span class="button-icon"><img :src="view" alt="" /></span>
        </button>
      </div>
      <div class="focus-list" aria-label="Areas of focus">
        <span>Product thinking</span>
        <span>Web engineering</span>
        <span>Team leadership</span>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import VueAIcarousel from "vue-ai-carousel";

export default defineComponent({
  name: "HomeView",
  components: {},
  data() {
    return {
      download: require("@/assets/download.svg"),
      view: require("@/assets/view.svg"),
    };
  },
  methods: {
    downloadPDF() {
      const pdfUrl = "AmielManzanoResume.pdf";
      const anchor = document.createElement("a");
      anchor.href = pdfUrl;
      anchor.download = "AmielManzanoResume.pdf";
      anchor.click();
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 50% 50%;

  .left-side {
    height: 100dvh;
    width: 100%;
    object-fit: cover;
    object-position: bottom;

    // .left-side-img {
    //  object-fit: cover;
    //  width: 50dvw;
    //  height: 100dvh;
    // }
  }

  .right-side {
    display: flex;
    justify-content: center;
    align-items: center;

    .container {
      padding: 0 50px;

      .name {
        color: var(--light-blue);
        font-family: "DM Serif Display", serif;
        font-size: 6.8vw;
        font-weight: 400;
        letter-spacing: -0.035em;
        line-height: 100%;
        text-align: left;
      }

      .sub-name {
        font-family: "Manrope", sans-serif;
        font-size: 1.55vw;
        font-weight: 500;
        letter-spacing: 0.02em;
        line-height: 34px;
        text-align: left;
        margin-top: 17.5px;
        color: white;
      }

      .buttons {
        display: flex;
        justify-content: center;
        margin-top: 50px;

        button {
          margin: 0 14.5px;
          padding: 12px 26px;
          border: 3px solid var(--dark-green);
          border-radius: 15px;
          font-size: 20px;
          font-family: "Manrope", sans-serif;
          font-weight: 700;
          letter-spacing: 0.01em;
          min-width: 204px;
          display: flex;
          align-items: center;
          cursor: pointer;

          img {
            margin-left: 6px;
          }
        }

        .download {
          color: var(--light-blue);
          background: transparent;

          &::after {
          }
        }

        .view-portfolio {
          background: var(--dark-green);
          color: white;
        }
      }
    }
  }
}

.naveBtnStyle,
.counterNewStyle,
.CounterPosition,
.CAnewStyle {
  display: none !important;
}

@media (max-width: 768px) {
  .home {
    grid-template-columns: 1fr;
    justify-items: center;

    .left-side {
      height: auto;
      width: 80%;
      margin-top: 100px;
    }

    .right-side {
      .container {
        padding: 30px 36px 36px 36px;
        width: 100%;

        .name {
          font-size: 14vw;
        }

        .sub-name {
          margin-top: 5px;
          font-size: 3.2vw;
        }

        .buttons {
          display: flex;
          justify-content: center;
          margin-top: 26px;

          button {
            margin: 0 5px;
            font-size: 12px;
            min-width: 130px;
            padding: 12px 23px;

            img {
              width: 12px;
            }
          }

          .download {
            color: var(--light-blue);
            background: transparent;

            &::after {
            }
          }

          .view-portfolio {
            background: var(--dark-green);
            color: white;
          }
        }
      }
    }
  }
}
/* Photo-free technical hero */
.home {
  min-height: 100dvh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--black);

  .system-panel {
    min-height: 100dvh;
    padding: 145px 8vw 48px;
    position: relative;
    overflow: hidden;
    background: var(--dark-green);
    border-right: 1px solid rgba(102, 252, 241, .18);

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      opacity: .2;
      background-image: linear-gradient(rgba(102, 252, 241, .18) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 252, 241, .18) 1px, transparent 1px);
      background-size: 46px 46px;
      mask-image: linear-gradient(to bottom, black, transparent 85%);
    }

    .panel-topline, .panel-bottomline { position: relative; z-index: 1; display: flex; justify-content: space-between; color: var(--washed-white); font: 700 9px/1.2 "Manrope", sans-serif; letter-spacing: .13em; text-transform: uppercase; }
    .status { color: var(--light-blue); }
    .status i { display: inline-block; width: 6px; height: 6px; margin-right: 6px; border-radius: 50%; background: var(--light-blue); box-shadow: 0 0 12px var(--light-blue); }
    .panel-bottomline { color: var(--semi-dark-green); margin-top: 30px; }

    .system-art { position: relative; height: 58vh; min-height: 390px; max-height: 620px; margin: 35px 0 10px; display: grid; place-items: center; }
    .orbit { position: absolute; border: 1px solid rgba(102, 252, 241, .42); border-radius: 50%; transform: rotate(-18deg); }
    .orbit-large { width: min(34vw, 430px); height: min(34vw, 430px); border-right-color: transparent; border-bottom-color: var(--semi-dark-green); }
    .orbit-small { width: min(23vw, 280px); height: min(23vw, 280px); border-color: rgba(69, 162, 159, .55); transform: rotate(48deg); }
    .core { width: 135px; height: 135px; border: 1px solid var(--light-blue); background: rgba(11, 12, 16, .72); display: grid; place-content: center; text-align: center; transform: rotate(45deg); box-shadow: 0 0 45px rgba(102, 252, 241, .12); }
    .core span, .core small { transform: rotate(-45deg); }
    .core span { color: var(--light-blue); font: 700 36px/1 "Manrope", sans-serif; letter-spacing: -.08em; }
    .core small { color: var(--washed-white); font: 700 6px/1 "Manrope", sans-serif; letter-spacing: .14em; margin-top: 10px; }
    .axis { position: absolute; background: rgba(102, 252, 241, .25); }
    .axis-horizontal { width: 100%; height: 1px; }
    .axis-vertical { height: 100%; width: 1px; }
    .crosshair { position: absolute; width: 16px; height: 16px; border: 1px solid var(--light-blue); }
    .crosshair-top { top: 8%; right: 13%; border-left: 0; border-bottom: 0; }
    .crosshair-bottom { bottom: 8%; left: 13%; border-right: 0; border-top: 0; }
    .coordinate { position: absolute; color: var(--semi-dark-green); font: 600 9px/1 "Manrope", sans-serif; letter-spacing: .1em; }
    .coordinate-one { top: 16%; left: 4%; }
    .coordinate-two { right: 3%; bottom: 14%; }
    .code-card { position: relative; z-index: 1; width: min(280px, 100%); padding: 16px 18px; border-left: 2px solid var(--light-blue); background: rgba(11, 12, 16, .48); color: var(--washed-white); font: 500 10px/1.8 "Manrope", sans-serif; }
    .code-card b { color: var(--light-blue); font-weight: 700; }
    .code-card em { color: var(--semi-dark-green); font-style: normal; }
    .code-card .indent { display: block; padding-left: 18px; }
  }

  .right-side {
    .container { padding: 0 7vw; max-width: 720px; width: 100%; }
    .eyebrow { color: var(--semi-dark-green); font: 700 10px/1.2 "Manrope", sans-serif; letter-spacing: .17em; text-transform: uppercase; margin-bottom: 32px; }
    .name { color: white; font-family: "Manrope", sans-serif; font-size: clamp(52px, 6vw, 94px); font-weight: 800; letter-spacing: -.08em; line-height: .95; text-align: left; }
    .name em { color: var(--light-blue); font-style: normal; }
    .sub-name { color: var(--washed-white); font: 500 clamp(14px, 1.3vw, 18px)/1.7 "Manrope", sans-serif; max-width: 480px; text-align: left; margin-top: 28px; }
    .buttons { justify-content: flex-start; margin-top: 40px; }
    .buttons button { margin: 0 10px 0 0; padding: 15px 20px; border: 1px solid var(--semi-dark-green); border-radius: 0; min-width: 150px; justify-content: center; font: 700 11px/1.2 "Manrope", sans-serif; letter-spacing: .01em; }
    .buttons .view-portfolio { background: var(--dark-green); }
    .capabilities { display: flex; gap: 24px; border-top: 1px solid rgba(196, 198, 200, .2); margin-top: 72px; padding-top: 18px; color: var(--washed-white); font: 500 9px/1.4 "Manrope", sans-serif; text-align: left; }
    .capabilities span { flex: 1; }
    .capabilities b { display: block; color: var(--light-blue); font-size: 9px; margin-bottom: 7px; }
  }
}

@media (max-width: 768px) {
  .home { display: block; .system-panel { min-height: 55dvh; padding: 105px 22px 28px; border-right: 0; border-bottom: 1px solid rgba(102, 252, 241, .18); .system-art { height: 36dvh; min-height: 250px; margin: 22px 0 0; } .orbit-large { width: 70vw; height: 70vw; } .orbit-small { width: 48vw; height: 48vw; } .core { width: 92px; height: 92px; } .core span { font-size: 26px; } .code-card { font-size: 9px; } .panel-bottomline { margin-top: 20px; } } .right-side .container { padding: 58px 26px 38px; } .right-side .eyebrow { font-size: 8px; margin-bottom: 24px; } .right-side .name { font-size: 15vw; } .right-side .sub-name { margin-top: 22px; font-size: 14px; } .right-side .buttons { margin-top: 30px; } .right-side .buttons button { margin-right: 6px; min-width: 0; flex: 1; padding: 13px 10px; font-size: 10px; } .right-side .capabilities { gap: 12px; margin-top: 52px; font-size: 8px; } }
}
/* Full-bleed image and grid composition */
.home {
  min-height: 100dvh;
  height: 100dvh;
  display: block;
  position: relative;
  overflow: hidden;
  background: var(--black);
  color: white;

  .hero-image, .image-shade, .grid-overlay { position: absolute; inset: 0; width: 100%; height: 100%; }
  .hero-image { object-fit: cover; object-position: center 28%; filter: saturate(.7) contrast(1.08); }
  .image-shade { background: linear-gradient(90deg, rgba(11, 12, 16, .88) 0%, rgba(11, 12, 16, .47) 46%, rgba(11, 12, 16, .18) 100%), linear-gradient(0deg, rgba(11, 12, 16, .76), transparent 42%); }
  .grid-overlay { opacity: .28; background-image: linear-gradient(rgba(102, 252, 241, .3) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 252, 241, .3) 1px, transparent 1px); background-size: 74px 74px; mask-image: linear-gradient(90deg, black, transparent 85%); pointer-events: none; }
  .hero-topline, .hero-footerline, .tech-readout, .hero-content { position: absolute; z-index: 1; }
  .hero-topline { top: 144px; left: 7vw; right: 7vw; display: flex; justify-content: space-between; color: var(--washed-white); font: 700 9px/1.2 "Manrope", sans-serif; letter-spacing: .14em; text-transform: uppercase; }
  .status { color: var(--light-blue); }
  .status i { display: inline-block; width: 6px; height: 6px; margin-right: 6px; border-radius: 50%; background: var(--light-blue); box-shadow: 0 0 12px var(--light-blue); }
  .hero-content { left: 7vw; top: 50%; width: min(690px, 62vw); transform: translateY(-42%); text-align: left; }
  .eyebrow { color: var(--light-blue); font: 700 10px/1.2 "Manrope", sans-serif; letter-spacing: .17em; text-transform: uppercase; margin-bottom: 28px; }
  .name { color: white; font: 800 clamp(62px, 8vw, 132px)/.88 "Manrope", sans-serif; letter-spacing: -.09em; }
  .name em { color: var(--light-blue); font-style: normal; }
  .sub-name { color: var(--washed-white); font: 500 clamp(14px, 1.35vw, 19px)/1.7 "Manrope", sans-serif; max-width: 480px; margin-top: 30px; }
  .buttons { display: flex; margin-top: 38px; }
  .buttons button { display: flex; align-items: center; justify-content: center; min-width: 148px; margin-right: 10px; padding: 15px 18px; border: 1px solid var(--semi-dark-green); border-radius: 0; cursor: pointer; font: 700 10px/1.2 "Manrope", sans-serif; letter-spacing: .02em; transition: background .2s ease, transform .2s ease; }
  .buttons button:hover { transform: translateY(-3px); }
  .buttons img { width: 12px; margin-left: 12px; }
  .buttons .download { color: var(--light-blue); background: rgba(11, 12, 16, .32); }
  .buttons .view-portfolio { color: white; background: var(--dark-green); }
  .tech-readout { right: 7vw; bottom: 17%; width: 180px; border-left: 1px solid var(--light-blue); padding-left: 18px; font: 500 10px/1.5 "Manrope", sans-serif; }
  .tech-readout div { display: flex; gap: 12px; margin-bottom: 12px; color: white; }
  .tech-readout b { color: var(--light-blue); font-size: 9px; }
  .tech-readout small { display: block; color: var(--semi-dark-green); font-size: 8px; letter-spacing: .08em; margin-top: 24px; }
  .hero-footerline { bottom: 28px; left: 7vw; right: 7vw; display: flex; justify-content: space-between; color: var(--washed-white); font: 700 8px/1.2 "Manrope", sans-serif; letter-spacing: .14em; }
  .hero-footerline strong { color: var(--light-blue); font-size: 14px; margin-left: 8px; }
}

@media (max-width: 768px) {
  .home { height: 100svh; min-height: 680px; .hero-image { object-position: 62% center; } .grid-overlay { background-size: 46px 46px; mask-image: linear-gradient(180deg, black, transparent 90%); } .hero-topline { top: 100px; left: 22px; right: 22px; font-size: 8px; .status { display: none; } } .hero-content { left: 22px; top: 49%; width: calc(100% - 44px); transform: translateY(-35%); } .eyebrow { font-size: 8px; margin-bottom: 22px; } .name { font-size: 17vw; letter-spacing: -.1em; } .sub-name { font-size: 14px; margin-top: 22px; } .buttons { margin-top: 28px; } .buttons button { min-width: 0; flex: 1; padding: 13px 8px; margin-right: 6px; font-size: 9px; } .tech-readout { right: 22px; bottom: 16%; width: 128px; padding-left: 12px; font-size: 8px; } .tech-readout div { margin-bottom: 8px; } .tech-readout small { font-size: 6px; margin-top: 16px; } .hero-footerline { left: 22px; right: 22px; bottom: 18px; font-size: 7px; } .hero-footerline span:last-child { display: none; } }
}
.home {
  background: var(--black);
  .hero-image, .image-shade { display: none; }
  .system-visual { position: absolute; z-index: 0; top: 50%; right: -18%; width: min(68vw, 900px); height: min(68vw, 900px); transform: translateY(-50%); display: grid; place-items: center; }
  .visual-axis { position: absolute; background: rgba(102, 252, 241, .2); }
  .visual-axis.axis-horizontal { width: 100%; height: 1px; }
  .visual-axis.axis-vertical { height: 100%; width: 1px; }
  .visual-orbit { position: absolute; border: 1px solid rgba(102, 252, 241, .48); border-radius: 50%; transform: rotate(-20deg); }
  .visual-orbit-large { width: 72%; height: 72%; border-right-color: transparent; border-bottom-color: var(--semi-dark-green); }
  .visual-orbit-small { width: 48%; height: 48%; border-color: rgba(69, 162, 159, .7); transform: rotate(46deg); }
  .visual-core { width: 138px; height: 138px; border: 1px solid var(--light-blue); background: rgba(14, 45, 44, .85); display: grid; place-content: center; text-align: center; transform: rotate(45deg); box-shadow: 0 0 55px rgba(102, 252, 241, .14); }
  .visual-core span, .visual-core small { transform: rotate(-45deg); }
  .visual-core span { color: var(--light-blue); font: 800 38px/1 "Manrope", sans-serif; letter-spacing: -.08em; }
  .visual-core small { color: var(--washed-white); font: 700 6px/1 "Manrope", sans-serif; letter-spacing: .14em; margin-top: 10px; }
  .visual-coordinate { position: absolute; color: var(--semi-dark-green); font: 600 9px/1 "Manrope", sans-serif; letter-spacing: .1em; }
  .visual-coordinate.coordinate-one { top: 13%; left: 3%; }
  .visual-coordinate.coordinate-two { right: 1%; bottom: 12%; }
  .hero-content, .hero-topline, .tech-readout, .hero-footerline { z-index: 2; }
}

@media (max-width: 768px) {
  .home { .system-visual { top: 35%; right: -55%; width: 145vw; height: 145vw; opacity: .8; } .visual-core { width: 94px; height: 94px; } .visual-core span { font-size: 27px; } .hero-content { z-index: 3; } .tech-readout { z-index: 3; } }
}
.home {
  background: radial-gradient(circle at 72% 46%, rgba(14, 45, 44, .62), transparent 36%), var(--black);
  .grid-overlay { opacity: .18; background-size: 64px 64px; }
  .system-visual { filter: drop-shadow(0 0 35px rgba(102, 252, 241, .08)); }
  .visual-orbit-large { animation: orbit-drift 24s linear infinite; }
  .visual-orbit-small { animation: orbit-drift-reverse 18s linear infinite; }
  .visual-core { box-shadow: 0 0 70px rgba(102, 252, 241, .17), inset 0 0 25px rgba(102, 252, 241, .08); }
  .hero-content { left: 8vw; width: min(650px, 58vw); padding-left: 28px; border-left: 1px solid rgba(102, 252, 241, .45); background: linear-gradient(90deg, rgba(11, 12, 16, .2), transparent); }
  .eyebrow { margin-bottom: 24px; }
  .name { text-shadow: 0 8px 30px rgba(11, 12, 16, .4); }
  .sub-name { color: rgba(238, 240, 240, .82); max-width: 430px; }
  .buttons button { backdrop-filter: blur(8px); }
  .tech-readout { right: 8vw; bottom: 19%; padding: 15px 0 15px 18px; background: linear-gradient(90deg, rgba(14, 45, 44, .42), transparent); }
  .hero-footerline { color: rgba(196, 198, 200, .72); }
}

@keyframes orbit-drift { from { transform: rotate(-20deg); } to { transform: rotate(340deg); } }
@keyframes orbit-drift-reverse { from { transform: rotate(46deg); } to { transform: rotate(-314deg); } }

@media (max-width: 768px) {
  .home { .hero-content { left: 22px; width: calc(100% - 44px); padding-left: 16px; } .grid-overlay { opacity: .14; } .tech-readout { right: 22px; bottom: 15%; padding: 10px 0 10px 12px; } }
}
.home {
  background: var(--black);
  .grid-overlay { opacity: .2; background-size: 74px 74px; }
  .hero-content { padding-left: 0; border-left: 0; background: none; }
  .visual-orbit-large, .visual-orbit-small { animation: none; transform: translate(-50%, -50%); top: 50%; left: 50%; }
  .visual-orbit-large { width: 72%; height: 72%; border: 1px solid rgba(102, 252, 241, .45); border-right-color: transparent; border-bottom-color: var(--semi-dark-green); }
  .visual-orbit-small { width: 48%; height: 48%; border: 1px solid rgba(69, 162, 159, .7); }
  .visual-axis.axis-horizontal { left: 10%; width: 80%; }
  .visual-axis.axis-vertical { top: 10%; height: 80%; }
  .visual-core { position: relative; z-index: 2; box-shadow: 0 0 55px rgba(102, 252, 241, .14); }
  .compass-label { position: absolute; z-index: 3; color: var(--light-blue); font: 800 10px/1 "Manrope", sans-serif; letter-spacing: .12em; }
  .compass-north { top: 8%; left: 50%; transform: translateX(-50%); }
  .compass-east { top: 50%; right: 8%; transform: translateY(-50%); }
  .compass-south { bottom: 8%; left: 50%; transform: translateX(-50%); }
  .compass-west { top: 50%; left: 8%; transform: translateY(-50%); }
  .visual-coordinate { font-size: 8px; }
  .tech-readout { background: none; padding: 0 0 0 18px; }
}

@media (max-width: 768px) {
  .home { .hero-content { padding-left: 0; } .grid-overlay { opacity: .16; } .visual-orbit-large, .visual-orbit-small { transform: translate(-50%, -50%); } .visual-core { box-shadow: 0 0 35px rgba(102, 252, 241, .14); } .compass-label { font-size: 8px; } .compass-north { top: 8%; } .compass-east { right: 8%; } .compass-south { bottom: 8%; } .compass-west { left: 8%; } }
}
.home {
  .system-visual { right: -28%; width: min(60vw, 820px); height: min(60vw, 820px); }
  .hero-content { left: 7vw; width: min(520px, 43vw); top: 52%; transform: translateY(-40%); }
  .name { font-size: clamp(54px, 5.6vw, 88px); line-height: .94; }
  .sub-name { max-width: 360px; font-size: clamp(13px, 1.05vw, 16px); }
  .tech-readout { right: 7vw; bottom: 9%; width: 148px; padding: 14px 0 14px 15px; background: rgba(11, 12, 16, .42); }
}

@media (max-width: 768px) {
  .home { .system-visual { right: -62%; width: 148vw; height: 148vw; } .hero-content { left: 22px; width: calc(100% - 44px); top: 49%; transform: translateY(-35%); } .name { font-size: 15vw; } .sub-name { max-width: 330px; font-size: 13px; } .tech-readout { right: 22px; bottom: 12%; width: 126px; padding: 10px 0 10px 11px; } }
}
.home {
  background: radial-gradient(circle at 76% 48%, rgba(14, 45, 44, .65), transparent 35%), var(--black);
  .system-visual { display: none; }
  .design-motif { position: absolute; z-index: 1; top: 22%; right: 9vw; width: min(35vw, 520px); height: 55vh; border-right: 1px solid rgba(102, 252, 241, .45); border-top: 1px solid rgba(102, 252, 241, .18); }
  .motif-number { position: absolute; top: -45px; right: 22px; color: transparent; font: 800 clamp(150px, 22vw, 340px)/.8 "Manrope", sans-serif; letter-spacing: -.14em; -webkit-text-stroke: 1px rgba(102, 252, 241, .24); }
  .motif-line { position: absolute; top: 0; right: 26%; width: 1px; height: 100%; background: linear-gradient(var(--light-blue), transparent 75%); }
  .motif-line::before, .motif-line::after { content: ""; position: absolute; right: -3px; width: 6px; height: 6px; background: var(--light-blue); }
  .motif-line::before { top: 20%; }
  .motif-line::after { top: 62%; }
  .motif-label { position: absolute; right: 20px; bottom: 20px; color: var(--semi-dark-green); font: 700 8px/1.2 "Manrope", sans-serif; letter-spacing: .14em; writing-mode: vertical-rl; }
  .hero-content { left: 8vw; width: min(560px, 46vw); }
  .name { font-size: clamp(56px, 6vw, 96px); }
  .sub-name { max-width: 400px; }
  .tech-readout { right: 9vw; bottom: 11%; background: rgba(11, 12, 16, .55); }
}

@media (max-width: 768px) {
  .home { .design-motif { top: 20%; right: 22px; width: 52vw; height: 38vh; opacity: .72; } .motif-number { top: -18px; right: 8px; font-size: 120px; } .motif-line { right: 24%; } .motif-label { right: 7px; bottom: 12px; font-size: 6px; } .hero-content { left: 22px; width: calc(100% - 44px); } .name { font-size: 15vw; } .tech-readout { right: 22px; bottom: 12%; } }
}
.home {
  .design-motif { display: none; }
  .work-panel { position: absolute; z-index: 2; top: 19%; right: 8vw; width: min(38vw, 540px); min-height: 500px; padding: 22px 24px 20px; border-left: 1px solid rgba(102, 252, 241, .4); background: linear-gradient(145deg, rgba(14, 45, 44, .72), rgba(11, 12, 16, .25)); text-align: left; }
  .work-panel-header, .work-panel-stats { display: flex; justify-content: space-between; color: var(--washed-white); font: 700 8px/1.2 "Manrope", sans-serif; letter-spacing: .14em; text-transform: uppercase; }
  .work-panel-header { padding-bottom: 18px; border-bottom: 1px solid rgba(102, 252, 241, .2); }
  .work-panel-header span:last-child { color: var(--light-blue); }
  .work-panel-intro { display: flex; align-items: flex-start; gap: 18px; padding: 42px 0 48px; }
  .panel-index { color: var(--light-blue); font: 700 10px/1 "Manrope", sans-serif; }
  .work-panel-intro h2 { color: white; font: 500 clamp(36px, 4vw, 62px)/.9 "DM Serif Display", serif; letter-spacing: -.04em; }
  .work-panel-intro h2 em { color: var(--light-blue); font-style: italic; }
  .work-panel-intro p { max-width: 205px; margin-top: 16px; color: var(--washed-white); font: 500 10px/1.6 "Manrope", sans-serif; }
  .service-list { border-top: 1px solid rgba(102, 252, 241, .2); }
  .service-row { display: grid; grid-template-columns: 28px 1fr 18px; gap: 12px; align-items: center; padding: 19px 0; border-bottom: 1px solid rgba(196, 198, 200, .16); }
  .service-row > span, .service-row > b { color: var(--light-blue); font: 700 9px/1 "Manrope", sans-serif; }
  .service-row > b { text-align: right; font-size: 14px; font-weight: 400; }
  .service-row strong, .service-row small { display: block; }
  .service-row strong { color: white; font: 700 12px/1.2 "Manrope", sans-serif; }
  .service-row small { margin-top: 6px; color: var(--semi-dark-green); font: 500 9px/1.2 "Manrope", sans-serif; }
  .work-panel-stats { gap: 12px; margin-top: 32px; color: var(--semi-dark-green); font-size: 7px; letter-spacing: .08em; }
  .work-panel-stats span { display: flex; align-items: center; gap: 6px; }
  .work-panel-stats b { color: var(--light-blue); font-size: 16px; letter-spacing: -.05em; }
  .hero-content { z-index: 3; width: min(500px, 40vw); }
  .hero-footerline { z-index: 3; }
}

@media (max-width: 768px) {
  .home { .work-panel { top: 14%; right: 22px; width: calc(100% - 44px); min-height: 0; padding: 15px 16px 14px; } .work-panel-intro { gap: 12px; padding: 24px 0 26px; } .work-panel-intro h2 { font-size: 38px; } .work-panel-intro p { margin-top: 10px; font-size: 8px; } .service-row { padding: 12px 0; } .service-row strong { font-size: 10px; } .service-row small { font-size: 7px; } .work-panel-stats { margin-top: 18px; font-size: 6px; } .work-panel-stats b { font-size: 12px; } .hero-content { top: 61%; width: calc(100% - 44px); } }
}
.home {
  .work-panel { display: none; }
  .visual-panel { position: absolute; z-index: 1; top: 0; right: 0; width: 52%; height: 100%; overflow: hidden; clip-path: polygon(18% 0, 100% 0, 100% 100%, 0 100%); }
  .visual-image, .visual-tint { position: absolute; inset: 0; width: 100%; height: 100%; }
  .visual-image { object-fit: cover; object-position: center 25%; filter: grayscale(80%) saturate(.65) contrast(1.15); opacity: .68; mix-blend-mode: screen; }
  .visual-tint { background: linear-gradient(90deg, var(--black) 0%, rgba(11, 12, 16, .38) 36%, rgba(14, 45, 44, .12) 100%), linear-gradient(0deg, rgba(11, 12, 16, .75), transparent 55%); }
  .visual-panel::after { content: ""; position: absolute; inset: 10% 8% 10% 22%; border-left: 1px solid rgba(102, 252, 241, .38); border-top: 1px solid rgba(102, 252, 241, .24); pointer-events: none; }
  .visual-mark { position: absolute; z-index: 1; top: 21%; right: 13%; color: transparent; font: 800 clamp(80px, 12vw, 190px)/.8 "Manrope", sans-serif; letter-spacing: -.12em; -webkit-text-stroke: 1px rgba(102, 252, 241, .44); }
  .visual-caption { position: absolute; z-index: 2; right: 12%; bottom: 14%; display: flex; flex-direction: column; gap: 8px; text-align: right; }
  .visual-caption span, .visual-caption small { color: var(--light-blue); font: 700 8px/1.2 "Manrope", sans-serif; letter-spacing: .14em; text-transform: uppercase; }
  .visual-caption strong { color: white; font: 400 clamp(24px, 3vw, 44px)/.95 "DM Serif Display", serif; }
  .visual-caption small { color: var(--washed-white); font-size: 7px; }
  .hero-content { z-index: 3; }
  .hero-footerline { z-index: 3; }
}

@media (max-width: 768px) {
  .home { .visual-panel { top: 7%; width: 100%; height: 50%; clip-path: polygon(22% 0, 100% 0, 100% 100%, 0 100%); opacity: .72; } .visual-panel::after { inset: 8% 6% 8% 24%; } .visual-mark { top: 17%; right: 10%; font-size: 90px; } .visual-caption { right: 8%; bottom: 8%; gap: 5px; } .visual-caption strong { font-size: 28px; } .visual-caption span, .visual-caption small { font-size: 6px; } .hero-content { top: 56%; } }
}
.home {
  .visual-panel { width: 52%; clip-path: none; background: transparent; }
  .visual-image, .visual-tint { display: none; }
  .visual-panel::before { content: ""; position: absolute; inset: 8% 8% 8% 18%; background: linear-gradient(145deg, rgba(14, 45, 44, .55), rgba(11, 12, 16, 0)); clip-path: polygon(14% 0, 100% 0, 86% 100%, 0 100%); }
  .visual-panel::after { inset: 12% 12% 12% 24%; border-left: 1px solid rgba(102, 252, 241, .35); border-top: 1px solid rgba(102, 252, 241, .2); }
  .visual-art { position: absolute; inset: 16% 14% 15% 28%; transform: skewY(-8deg); }
  .art-line, .art-bar, .art-node, .art-label { position: absolute; }
  .art-line { height: 1px; background: linear-gradient(90deg, transparent, var(--light-blue), transparent); opacity: .5; transform-origin: left; }
  .art-line-one { top: 24%; left: 4%; width: 80%; transform: rotate(22deg); }
  .art-line-two { top: 54%; left: 12%; width: 75%; transform: rotate(-18deg); }
  .art-line-three { top: 75%; left: 0; width: 92%; transform: rotate(9deg); opacity: .25; }
  .art-bar { bottom: 18%; width: 18%; background: linear-gradient(180deg, var(--light-blue), rgba(69, 162, 159, .1)); opacity: .7; }
  .art-bar-one { left: 13%; height: 38%; }
  .art-bar-two { left: 39%; height: 64%; }
  .art-bar-three { left: 65%; height: 48%; }
  .art-node { width: 8px; height: 8px; border: 1px solid var(--light-blue); background: var(--black); box-shadow: 0 0 14px rgba(102, 252, 241, .65); }
  .art-node-one { top: 22%; left: 28%; }
  .art-node-two { top: 52%; left: 67%; }
  .art-node-three { bottom: 14%; left: 50%; }
  .art-label { color: var(--semi-dark-green); font: 700 7px/1.2 "Manrope", sans-serif; letter-spacing: .14em; }
  .art-label-one { top: 14%; left: 5%; }
  .art-label-two { top: 47%; right: 5%; }
  .art-label-three { bottom: 5%; left: 30%; }
  .visual-mark { top: 22%; right: 15%; z-index: 2; }
  .visual-caption { right: 14%; bottom: 12%; z-index: 2; }
}

@media (max-width: 768px) {
  .home { .visual-panel { top: 6%; width: 100%; height: 52%; } .visual-panel::before { inset: 5% 4% 5% 10%; } .visual-panel::after { inset: 9% 7% 9% 18%; } .visual-art { inset: 14% 8% 10% 22%; } .visual-mark { top: 16%; right: 10%; font-size: 90px; } .visual-caption { right: 9%; bottom: 8%; } .hero-content { top: 58%; } }
}
.home {
  .visual-art { display: none; }
  .visual-mark { display: none; }
  .compass-art { position: absolute; inset: 17% 14% 18% 25%; display: grid; place-items: center; }
  .compass-ring, .compass-cross { position: absolute; }
  .compass-ring { border: 1px solid rgba(102, 252, 241, .48); border-radius: 50%; transform: rotate(-20deg); }
  .compass-ring-large { width: 72%; height: 72%; border-right-color: transparent; border-bottom-color: var(--semi-dark-green); }
  .compass-ring-small { width: 48%; height: 48%; border-color: rgba(69, 162, 159, .72); transform: rotate(45deg); }
  .compass-cross { background: rgba(102, 252, 241, .25); }
  .compass-cross-horizontal { width: 82%; height: 1px; }
  .compass-cross-vertical { width: 1px; height: 82%; }
  .compass-center { position: relative; z-index: 2; width: 78px; height: 78px; display: grid; place-items: center; border: 1px solid var(--light-blue); color: var(--light-blue); background: rgba(11, 12, 16, .82); font: 800 22px/1 "Manrope", sans-serif; transform: rotate(45deg); box-shadow: 0 0 28px rgba(102, 252, 241, .12); }
  .compass-direction { position: absolute; z-index: 3; color: var(--light-blue); font: 800 9px/1 "Manrope", sans-serif; letter-spacing: .12em; }
  .compass-north { top: 7%; }
  .compass-east { right: 7%; }
  .compass-south { bottom: 7%; }
  .compass-west { left: 7%; }
  .visual-caption { right: 14%; bottom: 10%; }
}

@media (max-width: 768px) {
  .home { .compass-art { inset: 12% 8% 13% 19%; } .compass-center { width: 62px; height: 62px; font-size: 17px; } .compass-direction { font-size: 7px; } .visual-caption { right: 9%; bottom: 7%; } }
}
.home {
  .visual-panel { top: 0; right: 0; width: 56%; height: 100%; overflow: visible; clip-path: none; background: transparent; opacity: 1; }
  .visual-panel::before, .visual-panel::after { display: none; }
  .compass-art { inset: 11% -7% 7% 5%; }
  .compass-ring-large { width: 86%; height: 86%; }
  .compass-ring-small { width: 58%; height: 58%; }
  .compass-cross-horizontal { width: 92%; }
  .compass-cross-vertical { height: 92%; }
  .compass-center { width: 112px; height: 112px; font-size: 30px; }
  .compass-direction { font-size: 10px; }
  .compass-north { top: 3%; }
  .compass-east { right: 2%; }
  .compass-south { bottom: 3%; }
  .compass-west { left: 2%; }
  .visual-caption { right: 10%; bottom: 5%; }
}

@media (max-width: 768px) {
  .home { .visual-panel { top: 5%; right: 0; width: 100%; height: 55%; } .compass-art { inset: 7% -18% 5% 3%; } .compass-ring-large { width: 88%; height: 88%; } .compass-ring-small { width: 58%; height: 58%; } .compass-center { width: 76px; height: 76px; font-size: 21px; } .compass-direction { font-size: 8px; } .visual-caption { right: 8%; bottom: 3%; } }
}
.home {
  .visual-panel { display: none; }
  .tech-display { position: absolute; z-index: 2; top: 20%; right: 8vw; width: min(38vw, 500px); min-height: 490px; padding: 20px 24px; border-left: 1px solid var(--light-blue); background: linear-gradient(135deg, rgba(14, 45, 44, .72), rgba(11, 12, 16, .22)); text-align: left; font-family: "Manrope", sans-serif; }
  .display-header, .display-footer { display: flex; justify-content: space-between; color: var(--washed-white); font: 700 8px/1.2 "Manrope", sans-serif; letter-spacing: .15em; }
  .display-header { padding-bottom: 18px; border-bottom: 1px solid rgba(102, 252, 241, .22); }
  .display-header span:last-child, .display-footer span:first-child { color: var(--light-blue); }
  .display-main { padding: 44px 0 40px; border-bottom: 1px solid rgba(102, 252, 241, .22); }
  .prompt { display: block; color: var(--semi-dark-green); font: 700 9px/1 "Manrope", sans-serif; letter-spacing: .12em; }
  .display-main strong { display: block; margin-top: 10px; color: var(--light-blue); font: 800 clamp(100px, 13vw, 190px)/.8 "Manrope", sans-serif; letter-spacing: -.12em; }
  .output-label { display: block; margin-top: 12px; color: white; font: 700 10px/1 "Manrope", sans-serif; letter-spacing: .15em; }
  .signal { display: flex; gap: 5px; align-items: end; height: 30px; margin-top: 24px; }
  .signal i { display: block; width: 7px; height: 12px; background: var(--semi-dark-green); }
  .signal i:nth-child(2), .signal i:nth-child(5), .signal i:nth-child(7) { height: 21px; background: var(--light-blue); }
  .signal i:nth-child(4), .signal i:nth-child(8) { height: 29px; background: var(--light-blue); }
  .display-list { padding: 8px 0; }
  .display-list > div { display: grid; grid-template-columns: 28px 1fr; gap: 8px; padding: 15px 0; border-bottom: 1px solid rgba(196, 198, 200, .16); }
  .display-list span { color: var(--light-blue); font: 700 9px/1.2 "Manrope", sans-serif; }
  .display-list strong, .display-list small { grid-column: 2; }
  .display-list strong { color: white; font: 700 12px/1.2 "Manrope", sans-serif; }
  .display-list small { color: var(--semi-dark-green); font: 500 9px/1.2 "Manrope", sans-serif; }
  .display-list span { grid-row: span 2; }
  .display-footer { padding-top: 20px; color: var(--semi-dark-green); font-size: 7px; }
  .hero-content { z-index: 3; width: min(500px, 40vw); }
}

@media (max-width: 768px) {
  .home { .tech-display { top: 13%; right: 22px; width: calc(100% - 44px); min-height: 0; padding: 15px 16px; } .display-header { padding-bottom: 12px; font-size: 7px; } .display-main { padding: 24px 0 20px; } .display-main strong { font-size: 100px; } .output-label { font-size: 8px; } .signal { margin-top: 16px; } .display-list > div { padding: 10px 0; } .display-list strong { font-size: 10px; } .display-list small { font-size: 7px; } .display-footer { padding-top: 14px; font-size: 6px; } .hero-content { top: 61%; width: calc(100% - 44px); } }
}
.home {
  .tech-display { display: none; }
  .visual-gallery { position: absolute; z-index: 2; top: 16%; right: 8vw; width: min(40vw, 560px); height: 68vh; color: white; font-family: "Manrope", sans-serif; }
  .gallery-heading, .gallery-footer { display: flex; justify-content: space-between; color: var(--washed-white); font: 700 8px/1.2 "Manrope", sans-serif; letter-spacing: .15em; }
  .gallery-heading { padding-bottom: 16px; border-bottom: 1px solid rgba(102, 252, 241, .24); }
  .gallery-heading span:last-child, .gallery-footer span:last-child { color: var(--light-blue); }
  .visual-study { position: absolute; }
  .study-orbit { top: 15%; right: 6%; width: 58%; aspect-ratio: 1; display: grid; place-items: center; }
  .orbit-ring, .orbit-cross { position: absolute; }
  .orbit-ring { border: 1px solid rgba(102, 252, 241, .58); border-radius: 50%; transform: rotate(-20deg); }
  .ring-one { width: 100%; height: 100%; border-right-color: transparent; }
  .ring-two { width: 65%; height: 65%; border-color: var(--semi-dark-green); transform: rotate(45deg); }
  .orbit-cross { width: 115%; height: 1px; background: rgba(102, 252, 241, .25); }
  .orbit-cross::after { content: ""; position: absolute; left: 50%; top: -57px; width: 1px; height: 115px; background: rgba(102, 252, 241, .25); }
  .study-orbit span { position: relative; z-index: 1; color: var(--light-blue); font: 700 11px/1 "Manrope", sans-serif; }
  .study-signal { left: 5%; bottom: 22%; width: 42%; }
  .signal-wave { height: 72px; display: flex; align-items: center; gap: 7px; border-bottom: 1px solid rgba(102, 252, 241, .28); }
  .signal-wave i { width: 8px; background: var(--semi-dark-green); }
  .signal-wave i:nth-child(1) { height: 24px; }.signal-wave i:nth-child(2) { height: 50px; }.signal-wave i:nth-child(3) { height: 34px; background: var(--light-blue); }.signal-wave i:nth-child(4) { height: 68px; background: var(--light-blue); }.signal-wave i:nth-child(5) { height: 42px; }.signal-wave i:nth-child(6) { height: 58px; background: var(--light-blue); }.signal-wave i:nth-child(7) { height: 28px; }
  .visual-study > span { display: block; margin-top: 10px; color: var(--semi-dark-green); font: 700 8px/1 "Manrope", sans-serif; letter-spacing: .14em; }
  .study-network { right: 8%; bottom: 8%; width: 34%; height: 110px; border-left: 1px solid var(--light-blue); border-bottom: 1px solid rgba(102, 252, 241, .3); }
  .study-network i { position: absolute; width: 7px; height: 7px; border: 1px solid var(--light-blue); background: var(--black); }
  .study-network i:nth-child(1) { top: 17%; left: 20%; }.study-network i:nth-child(2) { top: 43%; left: 58%; }.study-network i:nth-child(3) { top: 74%; left: 35%; }.study-network i:nth-child(4) { top: 29%; left: 82%; }.study-network i:nth-child(5) { top: 83%; left: 82%; }
  .study-network::before, .study-network::after { content: ""; position: absolute; height: 1px; background: var(--semi-dark-green); transform-origin: left; }
  .study-network::before { top: 20%; left: 22%; width: 74%; transform: rotate(17deg); }.study-network::after { top: 45%; left: 59%; width: 55%; transform: rotate(115deg); }
  .gallery-footer { position: absolute; bottom: 0; left: 0; right: 0; padding-top: 16px; border-top: 1px solid rgba(102, 252, 241, .24); color: var(--semi-dark-green); font-size: 7px; }
  .hero-content { z-index: 3; width: min(500px, 40vw); }
}

@media (max-width: 768px) {
  .home { .visual-gallery { top: 12%; right: 22px; width: calc(100% - 44px); height: 48vh; } .gallery-heading { font-size: 7px; } .study-orbit { top: 12%; right: 2%; width: 48%; } .study-signal { left: 3%; bottom: 18%; width: 42%; } .signal-wave { height: 48px; gap: 4px; } .signal-wave i { width: 5px; } .study-network { right: 4%; bottom: 6%; width: 28%; height: 78px; } .visual-study > span { font-size: 6px; } .gallery-footer { font-size: 6px; } .hero-content { top: 61%; width: calc(100% - 44px); } }
}
.home {
  .tech-display, .visual-gallery { display: none; }
  .background-art { position: absolute; z-index: 1; top: 0; right: 0; width: 57%; height: 100%; overflow: hidden; pointer-events: none; }
  .art-glow { position: absolute; width: 70%; aspect-ratio: 1; top: 18%; left: 16%; border-radius: 50%; background: radial-gradient(circle, rgba(69, 162, 159, .3), rgba(14, 45, 44, .1) 48%, transparent 70%); filter: blur(20px); }
  .art-arc { position: absolute; border: 1px solid rgba(102, 252, 241, .38); border-radius: 50%; transform: rotate(-25deg); }
  .art-arc-one { width: 82%; height: 72%; top: 8%; left: 4%; border-right-color: transparent; border-bottom-color: var(--semi-dark-green); }
  .art-arc-two { width: 58%; height: 51%; top: 18%; left: 17%; border-color: rgba(69, 162, 159, .65); transform: rotate(38deg); }
  .art-axis { position: absolute; background: rgba(102, 252, 241, .24); }
  .art-axis-one { top: 50%; left: 2%; width: 92%; height: 1px; }
  .art-axis-two { top: 8%; left: 48%; width: 1px; height: 83%; }
  .art-monogram { position: absolute; top: 24%; left: 25%; color: transparent; font: 800 clamp(150px, 19vw, 300px)/.8 "Manrope", sans-serif; letter-spacing: -.16em; -webkit-text-stroke: 1px rgba(102, 252, 241, .24); }
  .art-coordinate { position: absolute; color: var(--semi-dark-green); font: 700 8px/1.2 "Manrope", sans-serif; letter-spacing: .14em; }
  .art-coordinate-one { top: 18%; left: 4%; }
  .art-coordinate-two { bottom: 13%; right: 8%; }
  .hero-content { z-index: 3; width: min(500px, 40vw); }
  .grid-overlay { z-index: 2; }
}

@media (max-width: 768px) {
  .home { .background-art { top: 8%; width: 100%; height: 52%; opacity: .78; } .art-glow { width: 80%; top: 8%; left: 15%; } .art-arc-one { width: 90%; height: 80%; left: 8%; } .art-arc-two { width: 62%; height: 56%; left: 24%; } .art-monogram { top: 22%; left: 25%; font-size: 150px; } .art-coordinate { font-size: 6px; } .art-coordinate-two { bottom: 6%; } .hero-content { top: 59%; width: calc(100% - 44px); } }
}
.home {
  .background-art { width: 58%; opacity: .95; }
  .art-glow { width: 52%; aspect-ratio: 1; top: 22%; left: 24%; border: 1px solid rgba(102, 252, 241, .26); background: radial-gradient(circle, rgba(102, 252, 241, .16), rgba(14, 45, 44, .12) 45%, transparent 72%); filter: none; box-shadow: 0 0 90px rgba(69, 162, 159, .16), inset 0 0 55px rgba(102, 252, 241, .06); }
  .art-glow::before, .art-glow::after { content: ""; position: absolute; border: 1px solid rgba(102, 252, 241, .42); border-radius: 50%; }
  .art-glow::before { inset: 12%; border-right-color: transparent; transform: rotate(42deg); }
  .art-glow::after { inset: 28%; border-color: rgba(102, 252, 241, .68); border-left-color: transparent; transform: rotate(-28deg); }
  .art-arc-one { width: 72%; height: 72%; top: 12%; left: 15%; border-color: rgba(102, 252, 241, .34); border-right-color: transparent; border-bottom-color: var(--semi-dark-green); }
  .art-arc-two { width: 46%; height: 46%; top: 25%; left: 28%; border-color: rgba(102, 252, 241, .56); border-top-color: transparent; transform: rotate(38deg); }
  .art-axis-one { top: 48%; left: 8%; width: 84%; background: rgba(102, 252, 241, .18); }
  .art-axis-two { top: 9%; left: 50%; height: 78%; background: rgba(102, 252, 241, .18); }
  .art-monogram { top: 34%; left: 22%; color: rgba(102, 252, 241, .05); -webkit-text-stroke: 1px rgba(102, 252, 241, .2); font-size: clamp(135px, 16vw, 250px); letter-spacing: -.18em; }
  .art-coordinate-one { top: 14%; left: 10%; }
  .art-coordinate-two { right: 10%; bottom: 17%; }
}

@media (max-width: 768px) {
  .home { .background-art { width: 100%; top: 5%; height: 53%; opacity: .82; } .art-glow { width: 62%; top: 15%; left: 23%; } .art-arc-one { width: 82%; height: 82%; top: 5%; left: 10%; } .art-arc-two { width: 54%; height: 54%; top: 19%; left: 24%; } .art-monogram { top: 28%; left: 22%; font-size: 150px; } .art-coordinate-one { top: 8%; left: 8%; } .art-coordinate-two { right: 8%; bottom: 10%; } }
}
.home {
  .background-art { width: 56%; opacity: .82; }
  .art-glow { width: 48%; aspect-ratio: 1; top: 24%; left: 27%; border: 1px solid rgba(102, 252, 241, .42); background: radial-gradient(circle, rgba(102, 252, 241, .12), transparent 68%); box-shadow: 0 0 80px rgba(69, 162, 159, .12); }
  .art-glow::before { content: ""; position: absolute; inset: 14%; border: 1px solid rgba(102, 252, 241, .36); border-radius: 50%; }
  .art-glow::after { content: ""; position: absolute; top: 50%; left: 50%; width: 7px; height: 7px; border-radius: 50%; background: var(--light-blue); transform: translate(-50%, -50%); box-shadow: 0 0 18px var(--light-blue); }
  .art-arc-one { width: 72%; height: 72%; top: 12%; left: 15%; border-color: rgba(102, 252, 241, .22); border-right-color: transparent; border-bottom-color: var(--semi-dark-green); }
  .art-arc-two { display: none; }
  .art-axis-one { top: 48%; left: 8%; width: 84%; background: rgba(102, 252, 241, .18); }
  .art-axis-two { top: 14%; left: 51%; height: 70%; background: rgba(102, 252, 241, .18); }
  .art-monogram { top: 35%; left: 24%; color: transparent; -webkit-text-stroke: 1px rgba(102, 252, 241, .11); font-size: clamp(135px, 16vw, 250px); }
  .art-coordinate-one { top: 17%; left: 10%; }
  .art-coordinate-two { display: none; }
}

@media (max-width: 768px) {
  .home { .background-art { width: 100%; height: 53%; opacity: .75; } .art-glow { width: 58%; top: 18%; left: 25%; } .art-arc-one { width: 82%; height: 82%; top: 6%; left: 10%; } .art-axis-two { top: 10%; height: 76%; } .art-monogram { top: 29%; left: 23%; font-size: 145px; } .art-coordinate-one { top: 9%; left: 8%; } }
}

.home {
  position: relative;
  display: block;
  width: 100%;
  height: max(100svh, 760px);
  min-height: 760px;
  overflow: hidden;
  background: var(--black);
  color: #fff;

  .grid-overlay {
    z-index: 0;
    opacity: .17;
    background-image: linear-gradient(rgba(102, 252, 241, .22) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 252, 241, .22) 1px, transparent 1px);
    background-size: 68px 68px;
    mask-image: linear-gradient(180deg, transparent 0%, black 20%, black 82%, transparent 100%);
  }

  .hero-content {
    position: absolute;
    z-index: 3;
    top: 45%;
    left: 50%;
    width: min(900px, calc(100% - 48px));
    transform: translate(-50%, -38%);
    text-align: center;
    animation: hero-arrive .7s ease-out both;
  }

  .eyebrow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 34px;
    color: var(--washed-white);
    font: 700 9px/1.2 "Manrope", sans-serif;
    letter-spacing: .18em;
  }

  .eyebrow-mark {
    width: 6px;
    height: 6px;
    flex: 0 0 6px;
    border-radius: 50%;
    background: var(--light-blue);
    box-shadow: 0 0 10px rgba(102, 252, 241, .7);
  }

  .eyebrow-divider { color: var(--semi-dark-green); }

  .name {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    color: #fff;
    font: 800 clamp(76px, 11.5vw, 166px)/.78 "Manrope", sans-serif;
    letter-spacing: 0;
    text-align: center;
    text-transform: uppercase;
  }

  .name > span {
    color: transparent;
    font-size: .76em;
    font-family: "Urbanist", sans-serif;
    font-weight: 800;
    text-shadow: none;
    -webkit-text-stroke: 1px rgba(196, 198, 200, .72);
  }

  .name em {
    color: var(--light-blue);
    font-style: normal;
  }

  .sub-name {
    max-width: 500px;
    margin: 28px auto 0;
    color: var(--washed-white);
    font: 500 14px/1.8 "Manrope", sans-serif;
    text-align: center;
  }

  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 32px;
  }

  .buttons button {
    display: grid;
    grid-template-columns: 20px 1fr 36px;
    width: min(196px, 100%);
    max-width: 196px;
    flex: 0 1 196px;
    min-height: 52px;
    align-items: center;
    gap: 10px;
    margin: 0;
    padding: 0 0 0 14px;
    border: 1px solid var(--semi-dark-green);
    border-radius: 3px;
    cursor: pointer;
    font: 700 10px/1.2 "Manrope", sans-serif;
    text-align: left;
    transition: background-color .2s ease, border-color .2s ease, box-shadow .2s ease, transform .2s ease;
  }

  .buttons button:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(102, 252, 241, .12); }
  .buttons button:focus-visible { outline: 2px solid var(--light-blue); outline-offset: 3px; }
  .button-index { color: var(--semi-dark-green); font: 700 8px/1 "Manrope", sans-serif; }
  .button-label { white-space: nowrap; }
  .button-icon { display: grid; width: 36px; height: 100%; place-items: center; border-left: 1px solid rgba(102, 252, 241, .24); }
  .buttons img { width: 13px; height: 13px; margin: 0; }
  .buttons .download { color: var(--light-blue); background: rgba(11, 12, 16, .68); }
  .buttons .download:hover { background: rgba(14, 45, 44, .8); border-color: var(--light-blue); }
  .buttons .view-portfolio { color: var(--black); background: var(--light-blue); border-color: var(--light-blue); }
  .buttons .view-portfolio .button-index { color: rgba(11, 12, 16, .55); }
  .buttons .view-portfolio .button-icon { border-color: rgba(11, 12, 16, .16); }
  .buttons .view-portfolio img { filter: brightness(0); }
  .buttons .view-portfolio:hover { background: #a0fff8; border-color: #a0fff8; }

  .focus-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 9px 24px;
    margin-top: 30px;
    padding-top: 18px;
    color: rgba(196, 198, 200, .7);
    font: 700 8px/1.4 "Manrope", sans-serif;
    letter-spacing: .08em;
    text-transform: uppercase;
  }

  .focus-list span::before {
    display: inline-block;
    width: 4px;
    height: 4px;
    margin: 0 8px 2px 0;
    background: var(--semi-dark-green);
    content: "";
  }

  .hero-footerline {
    position: absolute;
    z-index: 3;
    right: 8.5vw;
    bottom: 34px;
    left: 8.5vw;
    display: flex;
    justify-content: center;
    gap: 12px;
    color: rgba(196, 198, 200, .68);
    font: 700 8px/1.2 "Manrope", sans-serif;
    letter-spacing: .12em;
  }
}

@keyframes hero-arrive {
  from { opacity: 0; transform: translate(-50%, calc(-38% + 14px)); }
  to { opacity: 1; transform: translate(-50%, -38%); }
}

@media (max-width: 768px) {
  .home {
    height: max(100svh, 700px);
    min-height: 700px;

    .grid-overlay {
      opacity: .17;
      background-size: 48px 48px;
      mask-image: linear-gradient(180deg, black 0%, transparent 82%);
    }

    .background-art {
    }

    .hero-content {
      top: 45%;
      left: 50%;
      width: calc(100% - 48px);
      transform: translate(-50%, -32%);
    }

    .eyebrow { gap: 8px; margin-bottom: 22px; font-size: 7px; }
    .name { gap: 5px; font-size: clamp(68px, 17vw, 100px); line-height: .8; }
    .name > span { font-size: .72em; }
    .sub-name { max-width: 360px; margin-top: 18px; font-size: 13px; line-height: 1.7; }
    .buttons { gap: 8px; margin-top: 24px; }
    .buttons button { grid-template-columns: 14px minmax(0, 1fr) 26px; width: min(156px, 100%); max-width: 156px; min-width: 0; min-height: 46px; flex: 1 1 0; gap: 5px; padding: 0 0 0 8px; font-size: 9px; }
    .button-index { font-size: 7px; }
    .button-icon { width: 26px; }
    .buttons img { width: 12px; height: 12px; }
    .focus-list { gap: 8px 14px; margin-top: 24px; padding-top: 14px; font-size: 7px; }
    .hero-footerline { right: 24px; bottom: 110px; left: 24px; flex-wrap: wrap; gap: 7px 14px; font-size: 7px; }
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .home {
    height: max(100svh, 720px);
    min-height: 720px;

    .hero-content { width: calc(100% - 64px); }
    .name { font-size: clamp(78px, 10.5vw, 112px); }
    .sub-name { max-width: 480px; margin-top: 24px; font-size: 15px; }
    .buttons { margin-top: 28px; }
    .focus-list { gap: 8px 18px; margin-top: 24px; }
  }
}

@media (max-width: 360px) {
  .home .buttons { flex-direction: column; align-items: center; }
  .home .buttons button { width: min(156px, 100%); max-width: 156px; flex: 0 1 46px; grid-template-columns: 20px minmax(0, 1fr) 36px; gap: 10px; padding-left: 14px; }
}

@media (prefers-reduced-motion: reduce) {
  .home .hero-content { animation: none; }
  .home .buttons button { transition: none; }
}
</style>
