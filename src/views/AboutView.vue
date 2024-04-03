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
    <div class="education-lg">
      <h2 class="title">Education</h2>
      <div class="box" v-for="educ in education" :key="educ.school">
        <div class="left">
          <div class="left-top">
            <p class="year-title">Year</p>
            <p class="year">{{ educ.year }}</p>
            <div class="circle" />
          </div>
          <div class="left-bottom">
            <img :src="educ.logo" alt="" class="logo" />
            <div class="school">
              <div class="name">{{ educ.school }}</div>
              <div class="city">{{ educ.city }}</div>
            </div>
          </div>
        </div>
        <div class="right">
          <p class="degree">{{ educ.degree }}</p>
          <p class="activities">
            {{ educ.activities }}
          </p>
        </div>
      </div>
    </div>
    <div class="education-sm">
      <h2 class="title">Education</h2>
      <div class="box" v-for="educ in education" :key="educ.school">
        <div class="year-section">
          <p class="year-title">Year</p>
          <p class="year">{{ educ.year }}</p>
          <div class="circle" />
        </div>
        <div class="school-section">
          <img :src="educ.logo" alt="" class="logo" />
          <div class="school">
            <div class="name">{{ educ.school }}</div>
            <div class="city">{{ educ.city }}</div>
          </div>
        </div>
        <div class="degree-section">
          <p class="degree">{{ educ.degree }}</p>
          <p class="activities">
            {{ educ.activities }}
          </p>
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
      education: [
        {
          year: "2015 - 2020",
          logo: require("@/assets/aboutme/usls.svg"),
          school: "University of St. La Salle",
          city: "Bacolod City",
          degree: "Bachelor of Science Major in Computer Engineering",
          activities:
            "Activities and societies: Institute of Computer Engineers of the Philippines - USLS Secretary, Computer Hardware Interfacing and Programming Society Member, Engineering Society Academics Committee Member, Research on Computer Troubleshooting, Computer Engineering Department Best Thesis - The Development of Crop Management and Inventory System for Mushroom Farmers Institute of Computer Engineers of the Philippines - Region 6 1st Runner Up Quiz Bowl",
        },
        {
          year: "2021",
          logo: require("@/assets/aboutme/zuitt.svg"),
          school: "Zuitt Coding Bootcamp",
          city: "Quezon City",
          degree: "Bootcamp Graduate",
          activities:
            "During my stay at Zuitt Bootcamp, we were taught and equipped with these different web development technologies: HTML, CSS, Javascript, Gitlab, Heroku, Vercel, MongoDB, NodeJS, ExpressJS, ReactJS, and NextJS. I graduated as top 1 in our batch.",
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

  .education-lg {
    padding: 118px 150px 105px;

    .title {
      font-size: 110px;
      font-weight: 300;
      line-height: 149.82px;
      text-align: left;
      color: var(--light-blue);
      margin-bottom: 37px;
    }

    .box {
      display: flex;

      .left {
        display: flex;
        flex-direction: column;
        flex: 1;

        .left-top {
          border-bottom: 3px solid #8f8f8f;
          padding-bottom: 24px;
          position: relative;

          p {
            text-align: left;
            margin-left: 25px;
            color: white;
          }

          .year-title {
            font-size: 20px;
            font-weight: 300;
            line-height: 27.24px;
            margin-bottom: 6px;
          }

          .year {
            font-size: 35px;
            font-weight: 300;
            line-height: 47.67px;
          }

          .circle {
            position: absolute;
            bottom: -10px;
            right: -10px;
            background: #d9d9d9;
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
        }

        .left-bottom {
          display: flex;
          align-items: center;

          .logo {
            margin: 20px 10px;
          }

          .school {
            .name {
              color: white;
              font-size: 35px;
              font-weight: 300;
              line-height: 47.67px;
              text-align: left;
            }

            .city {
              font-size: 20px;
              font-weight: 300;
              line-height: 27.24px;
              text-align: left;
              color: var(--semi-dark-green);
            }
          }
        }
      }

      .right {
        flex: 1;
        border-left: 3px solid #8f8f8f;

        .degree {
          font-size: 30px;
          font-weight: 300;
          line-height: 40.86px;
          text-align: center;
          color: var(--light-blue);
          padding: 10px 48px 0;
          width: 100%;
        }

        .activities {
          padding: 20px 48px 150px;
          width: 100%;
          font-size: 15px;
          font-weight: 300;
          line-height: 22.5px;
          text-align: justify;
          color: white;
        }
      }
    }
  }

  .education-sm {
    display: none;
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
            min-height: 98px !important;
            height: auto;
            border-radius: 20px 20px 0px 0px;
            background: linear-gradient(0deg, transparent 5.07%, #45a29f 69.85%);
            padding: 0 24px;
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

    .education-lg {
      display: none;
    }

    .education-sm {
      display: flex;
      flex-direction: column;
      padding: 40px 16px;

      .title {
        font-size: 60px;
        font-weight: 300;
        line-height: 81.72px;
        text-align: left;
        color: var(--light-blue);
        margin-bottom: 22px;
      }

      .box {
        .year-section {
          padding-top: 54px;
          text-align: left;
          color: white;
          padding-left: 22px;
          padding-bottom: 20px;
          border-bottom: 3px solid #8f8f8f;
          border-left: 3px solid #8f8f8f;
          position: relative;

          .year-title {
            font-size: 15px;
            font-weight: 300;
            line-height: 20.43px;
          }

          .year {
            font-size: 25px;
            font-weight: 300;
            line-height: 34.05px;
            text-align: left;
          }

          .circle {
            position: absolute;
            bottom: -10px;
            left: -10px;
            background: #d9d9d9;
            width: 20px;
            height: 20px;
            border-radius: 50%;
          }
        }

        .school-section {
          display: flex;
          padding: 20px;
          border-left: 3px solid #8f8f8f;

          .logo {
            width: 60px;
            margin-right: 10px;
          }

          .school {
            display: flex;
            flex-direction: column;
            justify-content: center;

            .name {
              font-size: 25px;
              font-weight: 300;
              line-height: 34.05px;
              text-align: left;
              color: white;
            }

            .city {
              font-size: 15px;
              font-weight: 300;
              line-height: 20.43px;
              text-align: left;
              color: var(--semi-dark-green);
            }
          }
        }

        .degree-section {
          padding: 31px 20px 50px;
          border-left: 3px solid #8f8f8f;

          .degree {
            font-family: Noto Sans;
            font-size: 25px;
            font-weight: 300;
            line-height: 34.05px;
            text-align: center;
            color: var(--light-blue);
          }

          .activities {
            margin-top: 30px;
            font-size: 12px;
            font-weight: 300;
            line-height: 27.24px;
            text-align: justify;
            color: white;
          }
        }
      }
    }
  }
}
</style>
