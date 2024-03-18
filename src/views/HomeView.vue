<template>
  <div class="home">
    <img :src="home1" class="left-side animate__animated animate__backInLeft" />
    <!-- <div class="left-side animate__animated animate__backInLeft">
      <VueAIcarousel
        :Property="{
          ID: 'Unique_id',
          Dlay: 5000,
          NavBtn: 'naveBtnStyle',
          CounterStyle: 'counterNewStyle',
          CountPos: 'CounterPosition',
          CounterActiveStyle: 'CAnewStyle',
        }"
      >
        <template v-for="(image, i) in homeImages" :key="i">
          <img :src="image" class="left-side-img" />
        </template>
      </VueAIcarousel>
    </div> -->
    <div class="right-side">
      <div class="container">
        <h1 class="name animate__animated animate__backInRight">Amiel</h1>
        <h1 class="name animate__animated animate__backInRight">Manzano</h1>
        <h3 class="sub-name animate__animated animate__backInRight">
          Mid Level Software Engineer | Team Leader
        </h3>

        <div class="buttons animate__animated animate__backInRight">
          <button class="download">Download CV <img :src="download" /></button>
          <button class="view-portfolio" @click="() => $router.push('/projects')">
            View Portfolio <img :src="view" />
          </button>
        </div>
      </div>
    </div>
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
      homeImages: [
        require("@/assets/home1.jpg"),
        require("@/assets/home5.jpg"),
        require("@/assets/home8.jpg"),
        require("@/assets/home2.jpg"),
        require("@/assets/home3.jpg"),
        require("@/assets/home4.jpg"),
        require("@/assets/home6.jpg"),
        require("@/assets/home7.jpg"),
      ],
      home1: require("@/assets/home1.jpg"),
      download: require("@/assets/download.svg"),
      view: require("@/assets/view.svg"),
    };
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
        font-family: Noto Sans;
        font-size: 6.8vw;
        font-weight: 300;
        line-height: 100%;
        text-align: left;
      }

      .sub-name {
        font-family: Noto Sans;
        font-size: 1.55vw;
        font-weight: 200;
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
          font-family: Noto Sans;
          font-size: 20px;
          font-weight: 300;
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
      height: 50dvh;
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
</style>
