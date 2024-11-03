<template>
  <div class="about">
    <div class="top">
      <img
        :src="home1"
        class="left-side animate__animated animate__backInLeft"
      />
      <div class="right-side animate__animated animate__backInRight">
        <h2 class="title">Personal Information</h2>
        <h1 class="subtitle">About Me</h1>
        <p class="description">
          Experienced software engineer and team leader passionate about driving
          innovation through technology. With a strong background in fronted
          development and agile methodologies, I excel in leading
          cross-functional teams to deliver high-quality software products. I
          combine technical expertise with strategic problem-solving to exceed
          client expectations.
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
    <div class="awards">
      <h2 class="title">Awards</h2>
      <div class="awards-images">
        <img v-for="(award, index) in awards" :key="index" :src="award" />
      </div>
    </div>
    <div class="experience">
      <h2 class="title">Experience</h2>
      <div class="job-container">
        <div
          id="scrollableDiv"
          class="job-wrapper"
          @mousedown="startDrag"
          @mousemove="drag"
          @mouseup="endDrag"
          ref="scrollableDiv"
        >
          <div class="job" v-for="job in experiences" :key="job.year">
            <div class="job-top">
              <div class="year-title">
                <h5 class="year">{{ job.year }}</h5>
                <h5 class="job-title">{{ job.title }}</h5>
              </div>
              <div class="job-subtitle-container">
                <h5 class="job-subtitle">{{ job.subtitle }}</h5>
                <div class="circle" />
              </div>
            </div>
            <div class="job-bottom">
              <h5 class="company-name">{{ job.company }}</h5>
              <p class="task">{{ job.task }}</p>
            </div>
          </div>
        </div>
      </div>
      <img :src="swipe" alt="" class="swipe" />
    </div>

    <div class="awards">
      <h2 class="title">Certificates</h2>
      <div class="awards-images cert-images">
        <div
          class="cert-container"
          v-for="(certificate, index) in certificates"
          :key="index"
        >
          <img :src="certificate.img" />
          <span> {{ certificate.label }} </span>
        </div>
      </div>
    </div>

    <div class="skills">
      <h5 class="title">Skills</h5>
      <h5 class="subtitle">Technologies learned</h5>
      <div class="techs">
        <div
          class="tech"
          v-for="skill in skills"
          :key="skill.name"
          :style="{ width: skill.percent + '%' }"
        >
          <img :src="skill.logo" alt="" />
          <span class="name">{{ skill.name }}</span>
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
      swipe: require("@/assets/swipe.png"),
      view: require("@/assets/view.svg"),
      isDragging: false,
      initialScrollX: 0,
      cards: [
        {
          title: "17 Completed Projects",
          subTitle:
            "These projects include personal works as well as publicly available company related projects.",
          image: require("@/assets/aboutme/card1.svg"),
        },
        {
          title: "3+ Years of Experience",
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
      awards: [
        require("@/assets/awards/a1.jpg"),
        require("@/assets/awards/a2.jpg"),
        require("@/assets/awards/a3.jpg"),
        require("@/assets/awards/a4.jpg"),
        require("@/assets/awards/a5.jpg"),
        require("@/assets/awards/a6.jpg"),
        require("@/assets/awards/a7.jpg"),
        require("@/assets/awards/a8.jpg"),
        require("@/assets/awards/a9.jpg"),
      ],
      certificates: [
        {
          label: "AWS Certified Cloud Practitioner",
          img: require("@/assets/certificates/aws.png"),
        },
        {
          label: "Certified Computer Engineer",
          img: require("@/assets/certificates/ccpe.jpg"),
        },
        {
          label: "CI/CD",
          img: require("@/assets/certificates/cicd.jpeg"),
        },
        {
          label: "Laravel",
          img: require("@/assets/certificates/laravel.jpeg"),
        },
        {
          label: "Full Stack Web Development",
          img: require("@/assets/certificates/mern.jpeg"),
        },
        {
          label: "MySQL",
          img: require("@/assets/certificates/mysql.jpeg"),
        },
        {
          label: "PHP",
          img: require("@/assets/certificates/php.jpeg"),
        },
        {
          label: "Unit Testing",
          img: require("@/assets/certificates/unittest.jpeg"),
        },
      ],
      experiences: [
        {
          year: "Mar 2021 - Feb 2022",
          title: "Junior",
          subtitle: "Software Engineer",
          company: "Nexseed Inc.",
          task: "I worked on web development projects like Shopify stores, Shopify apps, and other front-end tasks. During the onboarding training, I was tasked to be the project manager / frontend engineer .",
        },
        {
          year: "Feb 2022 - Nov 2022",
          title: "Lead",
          subtitle: "Software Engineer",
          company: "Nexseed Inc.",
          task: "After my 1 year with the company, I was promoted to be the leader of the GVO project. I am juggling my tasks both in handling the team as well as being a frontend engineer.",
        },
        {
          year: "Nov 2022 - Present",
          title: "Lead",
          subtitle: "Software Engineer",
          company: "Seed Tech Philippines",
          task: "I am working as a lead software engineer for 2 projects namely, GVO and Tomorrowland. ",
        },
      ],
      skills: [
        {
          logo: require("@/assets/techs/react.svg"),
          name: "React.js",
          percent: 90,
        },
        {
          logo: require("@/assets/techs/next.svg"),
          name: "Next.js",
          percent: 70,
        },
        {
          logo: require("@/assets/techs/js.svg"),
          name: "Javascript",
          percent: 100,
        },
        {
          logo: require("@/assets/techs/html.svg"),
          name: "HTML",
          percent: 100,
        },
        {
          logo: require("@/assets/techs/express.svg"),
          name: "Express.js",
          percent: 60,
        },
        { logo: require("@/assets/techs/sql.svg"), name: "SQL", percent: 40 },
        { logo: require("@/assets/techs/css.svg"), name: "CSS", percent: 100 },
        {
          logo: require("@/assets/techs/shopify.svg"),
          name: "Shopify",
          percent: 80,
        },
        {
          logo: require("@/assets/techs/graphql.svg"),
          name: "GraphQL",
          percent: 40,
        },
        {
          logo: require("@/assets/techs/koa.svg"),
          name: "Koa.js",
          percent: 50,
        },
        { logo: require("@/assets/techs/git.svg"), name: "Git", percent: 90 },
        {
          logo: require("@/assets/techs/mongodb.svg"),
          name: "MongoDB",
          percent: 70,
        },
        {
          logo: require("@/assets/techs/vue.svg"),
          name: "Vue.js",
          percent: 100,
        },
        {
          logo: require("@/assets/techs/aws.svg"),
          name: "Amazon Web Services",
          percent: 60,
        },
        {
          logo: require("@/assets/techs/node.svg"),
          name: "Node.js",
          percent: 70,
        },
        {
          logo: require("@/assets/techs/nuxt.svg"),
          name: "Nuxt.js",
          percent: 100,
        },
        {
          logo: require("@/assets/techs/figma.svg"),
          name: "Figma",
          percent: 80,
        },
      ],
    };
  },
  methods: {
    startDrag(event) {
      this.isDragging = true;
      this.initialScrollX = event.clientX + this.$refs.scrollableDiv.scrollLeft;
    },
    drag(event) {
      if (this.isDragging) {
        const scrollDelta = event.clientX - this.initialScrollX;
        this.$refs.scrollableDiv.scrollLeft -= scrollDelta;
        this.initialScrollX = event.clientX;
      }
    },
    endDrag() {
      this.isDragging = false;
    },
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
            right: -11px;
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

  .awards {
    padding: 105px 150px 126px;

    .title {
      font-size: 110px;
      font-weight: 300;
      line-height: 149.82px;
      text-align: center;
      color: var(--light-blue);
      margin-bottom: 37px;
    }

    .awards-images {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;

      img {
        width: 350px;
        height: 300px;
        object-fit: cover;
        margin: 8px;
        filter: grayscale(100%);
      }

      img:hover {
        filter: grayscale(0);
      }
    }

    .cert-images {
      .cert-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
      }

      img {
        object-fit: contain;
      }

      span {
        color: var(--light-blue);
        margin-bottom: 30px;
        font-size: 14px;
        padding: 0 10px;
      }
    }
  }

  .experience {
    padding: 0 0 120px;

    .title {
      font-size: 110px;
      font-weight: 300;
      line-height: 149.82px;
      text-align: left;
      color: var(--light-blue);
      margin-bottom: 37px;
      padding: 0 153px;
    }

    .job-container {
      .job-wrapper {
        display: flex;
        width: fit-content;
        overflow-x: auto;
        width: 100vw;
        cursor: pointer;

        &::-webkit-scrollbar {
          display: none;
        }

        .job {
          .job-top {
            border-bottom: 3px solid #8f8f8f;
            padding-left: 190px;
            max-width: 600px;
            width: 600px;

            .year-title {
              .year {
                font-size: 20px;
                font-weight: 300;
                line-height: 27.24px;
                text-align: left;
                color: var(--light-blue);
              }

              .job-title {
                font-size: 50px;
                font-weight: 300;
                line-height: 68.1px;
                text-align: left;
                color: white;
              }
            }

            .job-subtitle-container {
              margin-left: 55px;
              height: 112px;
              border-left: 3px solid #8f8f8f;
              position: relative;

              .job-subtitle {
                font-size: 25px;
                font-weight: 300;
                line-height: 34.05px;
                text-align: left;
                color: var(--semi-dark-green);

                padding-left: 17px;
              }

              .circle {
                position: absolute;
                bottom: -10px;
                left: -11px;
                background: #d9d9d9;
                width: 20px;
                height: 20px;
                border-radius: 50%;
              }
            }
          }

          .job-bottom {
            padding-left: 250px;
            max-width: 540px;
            width: 545px;

            .company-name {
              font-size: 30px;
              font-weight: 300;
              line-height: 40.86px;
              text-align: left;
              color: var(--light-blue);
              margin-top: 62px;
              margin-bottom: 20px;
            }

            .task {
              font-size: 20px;
              font-weight: 300;
              line-height: 27.24px;
              text-align: left;
              color: white;
              padding-right: 40px;
            }
          }
        }
      }
    }

    .swipe {
      margin-top: 40px;
    }
  }

  .skills {
    padding: 0 150px 183px;

    .title {
      font-size: 110px;
      font-weight: 300;
      line-height: 110%;
      text-align: center;
      color: var(--light-blue);
    }

    .subtitle {
      font-size: 30px;
      font-weight: 300;
      line-height: 40.86px;
      color: white;
    }

    .techs {
      padding-top: 61px;

      .tech {
        height: 100px;
        border-radius: 0px 20px 20px 0px;
        background: linear-gradient(
          270deg,
          #45a29f 0%,
          rgba(69, 162, 159, 0) 92.5%
        );
        margin: 8px 0;
        display: flex;
        align-items: center;

        .name {
          font-size: 30px;
          font-weight: 300;
          line-height: 40.86px;
          color: white;
          margin-left: 16px;
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
            min-height: 98px !important;
            height: auto;
            border-radius: 20px 20px 0px 0px;
            background: linear-gradient(
              0deg,
              transparent 5.07%,
              #45a29f 69.85%
            );
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
            left: -11px;
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
            line-height: 160%;
            text-align: justify;
            color: white;
          }
        }
      }
    }

    .awards {
      padding: 40px 16px;

      .title {
        font-size: 60px;
        font-weight: 300;
        line-height: 81.72px;
        text-align: center;
        color: var(--light-blue);
        margin-bottom: 22px;
      }

      .awards-images {
        padding: 0;

        img {
          width: 160px;
          height: 125px;
          margin: 2.5px;
        }
      }
    }

    .experience {
      padding: 0 0 26px;

      .title {
        font-size: 60px;
        font-weight: 300;
        line-height: 81.72px;
        text-align: left;
        margin-bottom: 21px;
        padding: 0 12px;
      }

      .job-container {
        .job-wrapper {
          display: flex;
          width: fit-content;
          overflow-x: auto;
          width: 100vw;
          cursor: pointer;

          &::-webkit-scrollbar {
            display: none;
          }

          .job {
            .job-top {
              border-bottom: 3px solid #8f8f8f;
              padding-left: 60px;
              max-width: 310px;
              width: 310px;

              .year-title {
                .year {
                  font-size: 15px;
                  font-weight: 300;
                  line-height: 20.43px;
                }

                .job-title {
                  font-size: 30px;
                  font-weight: 300;
                  line-height: 40.86px;
                }
              }

              .job-subtitle-container {
                margin-left: 30px;
                height: 68px;

                .job-subtitle {
                  font-size: 15px;
                  font-weight: 300;
                  line-height: 20.43px;

                  color: var(--semi-dark-green);

                  padding-left: 17px;
                }

                .circle {
                  position: absolute;
                  bottom: -10px;
                  left: -11px;
                  background: #d9d9d9;
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                }
              }
            }

            .job-bottom {
              padding-left: 60px;
              max-width: calc(100dvw - 120px);
              width: calc(100dvw - 120px);

              .company-name {
                font-size: 20px;
                font-weight: 300;
                line-height: 27.24px;
                margin-top: 34px;
                margin-bottom: 12px;
              }

              .task {
                font-size: 10px;
                font-weight: 300;
                line-height: 15px;
                padding-right: 0;
              }
            }
          }
        }
      }

      .swipe {
        margin-top: 30px;
        width: 40px;
      }
    }

    .skills {
      padding: 40px 16px;

      .title {
        font-size: 60px;
        font-weight: 300;
        line-height: 110%;
        margin-bottom: 0;
      }
      .subtitle {
        font-size: 15px;
        font-weight: 300;
        line-height: 20.43px;
      }

      .techs {
        padding-top: 27px;

        .tech {
          margin: 6px 0;
          height: 43.98px;
          border-radius: 0px 10px 10px 0px;

          img {
            width: 30px;
          }

          .name {
            font-size: 15px;
            font-weight: 300;
            line-height: 20.43px;
          }
        }
      }
    }
  }
}
</style>
