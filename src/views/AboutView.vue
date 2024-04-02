<template>
  <div class="about">
    <div class="top">
      <img :src="home1" class="left-side animate__animated animate__backInLeft" />
      <div class="right-side">
        <h2 class="title">Personal Information</h2>
        <h1 class="subtitle">About Me</h1>
        <p class="description">
          Experienced software engineer and team leader passionate about driving
          innovation through technology. With a strong background in fronted development
          and agile methodologies, I excel in leading cross-functional teams to deliver
          high-quality software products. I combine technical expertise with strategic
          problem-solving to exceed client expectations.
        </p>
        <div class="cards">
          <div class="card" v-for="card in cards" :key="card.title">
            <img :src="card.image" class="logo" />
            <div class="texts">
              <span class="title">{{ card.title }}</span>
              <span class="subtitle">{{ card.subTitle }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeView",
  components: {},
  data() {
    return {
      home1: require("@/assets/home5.jpg"),
      download: require("@/assets/download.svg"),
      view: require("@/assets/view.svg"),
      cards: [
        {
          title: "20 Completed Projects",
          subTitle:
            "These projects include personal works as well as publicly available company related projects.",
          image: require("@/assets/aboutme/card1.svg"),
        },
        {
          title: "2+ Years of Experience",
          subTitle:
            "Years of experience gradually shape individuals into seasoned professionals, where expertise and wisdom unite.",
          image: require("@/assets/aboutme/card2.svg"),
        },
        {
          title: "9 Awards",
          subTitle:
            "These accolades are the result of my diligence and enthusiasm towards my work.",
          image: require("@/assets/aboutme/card3.svg"),
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.about {
  .top {
    display: grid;
    grid-template-columns: 50% 50%;

    .left-side {
      height: 100dvh;
      width: 100%;
      object-fit: cover;
      object-position: bottom;
    }

    .right-side {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 10dvh 85px 0;

      .title {
        font-size: 4dvh;
        font-weight: 300;
        line-height: 47.67px;
        text-align: left;
        color: var(--semi-dark-green);
      }

      .subtitle {
        font-size: 12dvh;
        font-weight: 300;
        line-height: 100%;
        text-align: left;
        color: var(--light-blue);
        margin-bottom: 15px;
      }

      .description {
        font-size: 1.75dvh;
        font-weight: 300;
        line-height: 120%;
        text-align: left;
        color: white;
        margin-bottom: 40px;
      }

      .cards {
        .card {
          height: 9dvh;
          border-radius: 20px 20px 0px 0px;
          background: linear-gradient(0deg, transparent 5.07%, #45a29f 69.85%);
          padding: 30px;
          display: flex;

          .logo {
            margin-right: 20px;
          }

          .texts {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .title {
              font-size: 2.8dvh;
              font-weight: 300;
              line-height: 34.05px;
              text-align: left;
              color: var(--light-blue);
            }

            .subtitle {
              font-size: 1.8dvh;
              font-weight: 300;
              line-height: 20.43px;
              text-align: left;
              color: white;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .about {
    .top {
      grid-template-columns: 1fr;
      justify-items: center;

      .left-side {
        height: auto;
        width: 80%;
        margin-top: 100px;
      }

      .right-side {
        padding: 0 16px;

        .title {
          font-size: 20px;
          font-weight: 300;
          line-height: 27.24px;
          margin-top: 40px;
          margin-bottom: 0;
        }

        .subtitle {
          font-size: 60px;
          font-weight: 300;
          line-height: 81.72px;
          text-align: left;
          margin-bottom: 0;
        }

        .description {
          font-size: 10px;
          font-weight: 300;
          line-height: 15px;
          text-align: left;
        }

        .cards {
          .card {
            height: 98px !important;
            max-height: 98px !important;
            border-radius: 20px 20px 0px 0px;
            background: linear-gradient(0deg, transparent 5.07%, #45a29f 69.85%);
            padding: 14px 24px;
            display: flex;
            align-items: center;

            .logo {
              height: 69px;
            }

            .texts {
              display: flex;
              flex-direction: column;
              justify-content: center;

              .title {
                font-size: 15px;
                font-weight: 300;
                line-height: 20.43px;
                text-align: left;
                margin-top: 0;
              }

              .subtitle {
                font-size: 10px;
                font-weight: 300;
                line-height: 13.62px;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
}
</style>
