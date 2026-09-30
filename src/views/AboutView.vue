<template>
  <main class="about-page">
    <section class="profile-intro">
      <div class="profile-kicker">
        <span><i aria-hidden="true"></i> ENGINEERING PROFILE</span>
        <span>AM / 01</span>
      </div>
      <div class="intro-grid">
        <div class="intro-copy">
          <p class="role-label">LEAD SOFTWARE ENGINEER <span>/</span> PRODUCT BUILDER</p>
          <h1><span>ABOUT</span><em>ME</em></h1>
          <p class="bio">
            Experienced Lead Software Engineer dedicated to advancing technology through innovation. With a solid background in frontend development and agile methodologies, I lead cross-functional teams to deliver high-quality software, combining technical skills with strategic problem-solving to make a meaningful impact.
          </p>
        </div>
        <aside class="focus-panel">
          <span class="panel-label">AREAS OF FOCUS</span>
          <ul>
            <li>Frontend engineering</li>
            <li>Product delivery</li>
            <li>Team leadership</li>
          </ul>
          <span class="location-label">BASED IN BACOLOD CITY, PH</span>
        </aside>
      </div>
      <div class="profile-stats">
        <div><strong>17+</strong><span>PROJECTS DELIVERED</span></div>
        <div><strong>3+</strong><span>YEARS EXPERIENCE</span></div>
        <div><strong>09</strong><span>AWARDS EARNED</span></div>
      </div>
    </section>

    <section class="about-section">
      <header class="section-heading">
        <span>01 / CAREER</span>
        <h2>EXPERIENCE</h2>
        <span>2021 — PRESENT</span>
      </header>
      <div class="record-list">
        <article v-for="(job, index) in experiences" :key="job.year" class="record-row">
          <div class="record-time">
            <span class="record-label">TIMEFRAME</span>
            <p class="record-date">{{ job.year }}</p>
          </div>
          <div class="record-main">
            <span class="record-label">POSITION</span>
            <h3>{{ job.subtitle }} <span>/ {{ job.title }}</span></h3>
            <p class="record-org">{{ job.company }}</p>
            <p class="record-description">{{ job.task }}</p>
          </div>
          <span class="record-index">EXP / {{ String(index + 1).padStart(2, '0') }}</span>
        </article>
      </div>
    </section>

    <section class="about-section education-section">
      <header class="section-heading">
        <span>02 / STUDY</span>
        <h2>EDUCATION</h2>
        <span>FOUNDATIONS</span>
      </header>
      <div class="record-list">
        <article v-for="educ in education" :key="educ.school" class="record-row education-row">
          <div class="record-time">
            <span class="record-label">YEAR</span>
            <p class="record-date">{{ educ.year }}</p>
          </div>
          <div class="record-main">
            <span class="record-label">INSTITUTION</span>
            <h3>{{ educ.school }}</h3>
            <p class="record-org">{{ educ.city }}</p>
            <p class="record-degree">{{ educ.degree }}</p>
            <p class="record-description">{{ educ.activities }}</p>
          </div>
          <img :src="educ.logo" :alt="`${educ.school} logo`" class="institution-logo" />
        </article>
      </div>
    </section>

    <section class="about-section recognition-section">
      <header class="section-heading">
        <span>03 / RECOGNITION</span>
        <h2>AWARDS & CERTIFICATES</h2>
        <span>{{ awards.length + certificates.length }} ITEMS</span>
      </header>
      <div class="award-grid" aria-label="Awards">
        <figure v-for="(award, index) in awards" :key="award" class="award-item">
          <img :src="award" :alt="`Award ${index + 1}`" loading="lazy" />
          <figcaption>AWARD / {{ String(index + 1).padStart(2, '0') }}</figcaption>
        </figure>
      </div>
      <div class="certificate-grid">
        <article v-for="(certificate, index) in certificates" :key="certificate.label" class="certificate-item">
          <span class="certificate-index">CERT / {{ String(index + 1).padStart(2, '0') }}</span>
          <img :src="certificate.img" :alt="certificate.label" loading="lazy" />
          <h3>{{ certificate.label }}</h3>
        </article>
      </div>
    </section>

    <section class="about-section skills-section">
      <header class="section-heading">
        <span>04 / TOOLKIT</span>
        <h2>TECHNOLOGIES</h2>
        <span>{{ skills.length }} SKILLS</span>
      </header>
      <ul class="skill-grid">
        <li v-for="skill in skills" :key="skill.name" class="skill-item">
          <img :src="skill.logo" alt="" loading="lazy" />
          <span>{{ skill.name }}</span>
          <i :style="{ '--skill-level': skill.percent + '%' }" aria-hidden="true"></i>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AboutView",
  data() {
    return {
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
        require("@/assets/awards/mvp_dec_2024.jpg"),
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
            font-family: "Manrope", sans-serif;
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

.about-page {
  position: relative;
  isolation: isolate;
  min-height: 100svh;
  padding: 138px clamp(24px, 7vw, 104px) 80px;
  overflow: hidden;
  background: var(--black);
  color: var(--washed-white);

  &::before {
    position: absolute;
    z-index: -1;
    inset: 0;
    background-image: linear-gradient(rgba(102, 252, 241, .045) 1px, transparent 1px), linear-gradient(90deg, rgba(102, 252, 241, .045) 1px, transparent 1px);
    background-size: 56px 56px;
    content: "";
    pointer-events: none;
  }

  .profile-intro, .about-section { width: min(1240px, 100%); margin: 0 auto; }

  .profile-kicker, .section-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    color: var(--semi-dark-green);
    font: 700 8px/1.3 "Manrope", sans-serif;
    letter-spacing: .13em;
  }

  .profile-kicker { padding-bottom: 12px; border-bottom: 1px solid rgba(102, 252, 241, .2); }
  .profile-kicker span:first-child { display: flex; align-items: center; gap: 8px; color: var(--light-blue); }
  .profile-kicker i { width: 5px; height: 5px; border-radius: 50%; background: var(--light-blue); box-shadow: 0 0 8px rgba(102, 252, 241, .7); }

  .intro-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(220px, .42fr);
    gap: clamp(32px, 7vw, 100px);
    align-items: end;
    padding: 48px 0 42px;
  }

  .role-label { color: var(--semi-dark-green); font: 700 9px/1.4 "Manrope", sans-serif; letter-spacing: .12em; }
  .role-label span { padding: 0 7px; color: var(--light-blue); }

  .intro-copy h1 {
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: .18em;
    margin-top: 16px;
    color: var(--washed-white);
    font: 800 72px/.92 "Manrope", sans-serif;
    letter-spacing: 0;
    text-align: center;
  }

  .intro-copy h1 span { color: transparent; font-family: "Urbanist", sans-serif; -webkit-text-stroke: 1px rgba(196, 198, 200, .72); }
  .intro-copy h1 em { color: var(--light-blue); font-style: normal; }
  .bio { max-width: 680px; margin: 24px auto 0; color: rgba(196, 198, 200, .76); font: 400 14px/1.8 "Manrope", sans-serif; text-align: center; }

  .focus-panel { padding: 6px 0 4px 20px; border-left: 1px solid rgba(102, 252, 241, .28); }
  .focus-panel .panel-label, .location-label { color: var(--semi-dark-green); font: 700 7px/1.2 "Manrope", sans-serif; letter-spacing: .14em; }
  .focus-panel ul { display: grid; gap: 11px; margin: 18px 0 22px; padding: 0; list-style: none; }
  .focus-panel li { color: var(--washed-white); font: 600 13px/1.3 "Manrope", sans-serif; }
  .focus-panel li::before { margin-right: 9px; color: var(--light-blue); content: "+"; }

  .profile-stats { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid rgba(196, 198, 200, .16); border-bottom: 1px solid rgba(196, 198, 200, .16); }
  .profile-stats div { display: flex; align-items: baseline; gap: 12px; padding: 18px 16px; border-right: 1px solid rgba(196, 198, 200, .16); }
  .profile-stats div:first-child { padding-left: 0; }
  .profile-stats div:last-child { border-right: 0; }
  .profile-stats strong { color: var(--light-blue); font: 700 23px/1 "Manrope", sans-serif; }
  .profile-stats span { color: var(--semi-dark-green); font: 700 7px/1.4 "Manrope", sans-serif; letter-spacing: .1em; }

  .about-section { padding-top: 66px; }
  .section-heading { display: grid; grid-template-columns: 115px minmax(0, 1fr) auto; padding-bottom: 15px; border-bottom: 1px solid rgba(102, 252, 241, .24); }
  .section-heading span:first-child { color: var(--light-blue); }
  .section-heading h2 { color: var(--washed-white); font: 700 19px/1.2 "Manrope", sans-serif; letter-spacing: 0; }

  .record-list { position: relative; display: grid; gap: 14px; margin: 18px 0 0 4px; padding-left: 52px; }
  .record-list::before { position: absolute; top: 0; bottom: 0; left: 9px; width: 1px; background: linear-gradient(180deg, transparent, rgba(102, 252, 241, .46) 8%, rgba(102, 252, 241, .22) 92%, transparent); content: ""; }
  .record-row { position: relative; z-index: 1; display: grid; grid-template-columns: 165px minmax(0, 1fr) 48px; gap: 24px; align-items: start; padding: 20px 18px; border: 1px solid rgba(102, 252, 241, .16); background: rgba(11, 12, 16, .9); transition: border-color .2s ease, background-color .2s ease; }
  .record-row:hover { border-color: rgba(102, 252, 241, .42); background: #0e1517; }
  .record-row::before { position: absolute; z-index: 2; top: 22px; left: -48px; width: 10px; height: 10px; border: 1px solid var(--light-blue); background: var(--black); content: ""; box-shadow: 0 0 10px rgba(102, 252, 241, .3); }
  .record-row::after { position: absolute; z-index: 1; top: 26px; left: -38px; width: 38px; height: 1px; background: linear-gradient(90deg, rgba(102, 252, 241, .6), rgba(102, 252, 241, .08)); content: ""; }
  .record-time { display: flex; flex-direction: column; gap: 8px; }
  .record-label { color: var(--semi-dark-green); font: 700 6px/1.2 "Manrope", sans-serif; letter-spacing: .14em; }
  .record-date { color: var(--light-blue); font: 700 10px/1.5 "Manrope", sans-serif; letter-spacing: .04em; }
  .record-main h3 { color: var(--washed-white); font: 700 18px/1.35 "Manrope", sans-serif; }
  .record-main h3 span { color: var(--light-blue); font-weight: 500; }
  .record-org { margin-top: 4px; color: var(--light-blue); font: 600 10px/1.5 "Manrope", sans-serif; }
  .record-description { max-width: 760px; margin-top: 12px; padding-top: 10px; border-top: 1px solid rgba(196, 198, 200, .1); color: rgba(196, 198, 200, .68); font: 400 11px/1.7 "Manrope", sans-serif; text-align: justify; }
  .record-index { justify-self: end; padding: 5px 6px; border: 1px solid rgba(102, 252, 241, .14); color: var(--semi-dark-green); font: 700 6px/1.2 "Manrope", sans-serif; letter-spacing: .1em; white-space: nowrap; }
  .record-degree { margin-top: 9px; color: var(--washed-white); font: 600 11px/1.5 "Manrope", sans-serif; }
  .institution-logo { justify-self: end; width: 42px; height: 42px; object-fit: contain; opacity: .82; }

  .recognition-section .section-heading { margin-bottom: 18px; }
  .award-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 10px; }
  .award-item { min-width: 0; margin: 0; overflow: hidden; border: 1px solid rgba(102, 252, 241, .16); background: #101719; }
  .award-item img { display: block; width: 100%; aspect-ratio: 4/3; object-fit: cover; }
  .award-item figcaption { padding: 8px; color: var(--semi-dark-green); font: 700 6px/1 "Manrope", sans-serif; letter-spacing: .1em; }

  .certificate-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 12px; margin-top: 24px; }
  .certificate-item { min-width: 0; padding: 10px; border: 1px solid rgba(196, 198, 200, .14); background: rgba(11, 12, 16, .55); }
  .certificate-index { display: block; margin-bottom: 9px; color: var(--semi-dark-green); font: 700 6px/1 "Manrope", sans-serif; letter-spacing: .1em; }
  .certificate-item img { display: block; width: 100%; aspect-ratio: 4/3; object-fit: cover; background: #101719; }
  .certificate-item h3 { margin-top: 9px; color: var(--washed-white); font: 600 9px/1.4 "Manrope", sans-serif; }

  .skill-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 8px; margin: 18px 0 0; padding: 0; list-style: none; }
  .skill-item { position: relative; display: grid; grid-template-columns: 24px minmax(0, 1fr); gap: 9px; align-items: center; min-height: 48px; padding: 10px; overflow: hidden; border: 1px solid rgba(102, 252, 241, .15); background: rgba(11, 12, 16, .48); }
  .skill-item img { width: 20px; height: 20px; object-fit: contain; }
  .skill-item span { color: var(--washed-white); font: 600 9px/1.3 "Manrope", sans-serif; }
  .skill-item i { position: absolute; right: 0; bottom: 0; left: 0; height: 2px; background: linear-gradient(90deg, var(--semi-dark-green) var(--skill-level), transparent var(--skill-level)); }
}

@media (max-width: 980px) {
  .about-page { padding-right: 32px; padding-left: 32px; }
  .about-page .intro-grid { grid-template-columns: 1fr; gap: 26px; }
  .about-page .focus-panel { max-width: none; }
  .about-page .focus-panel ul { grid-template-columns: repeat(3, 1fr); }
  .about-page .award-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .about-page .certificate-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  .about-page .skill-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
}

@media (max-width: 620px) {
  .about-page { padding: 106px 20px 48px; }
  .about-page .profile-kicker { font-size: 7px; }
  .about-page .intro-grid { gap: 22px; padding: 30px 0 28px; }
  .about-page .role-label { font-size: 7px; }
  .about-page .intro-copy h1 { margin-top: 13px; font-size: 46px; }
  .about-page .bio { margin-top: 18px; font-size: 12px; }
  .about-page .focus-panel { padding-left: 14px; }
  .about-page .focus-panel ul { grid-template-columns: 1fr; gap: 8px; margin: 12px 0 16px; }
  .about-page .profile-stats { grid-template-columns: repeat(3, 1fr); }
  .about-page .profile-stats div { flex-direction: column; gap: 6px; padding: 12px 8px; }
  .about-page .profile-stats strong { font-size: 20px; }
  .about-page .profile-stats span { font-size: 6px; }
  .about-page .about-section { padding-top: 44px; }
  .about-page .section-heading { grid-template-columns: 72px minmax(0, 1fr); gap: 6px 12px; }
  .about-page .section-heading h2 { font-size: 14px; }
  .about-page .section-heading span:last-child { grid-column: 2; }
  .about-page .record-list { gap: 11px; margin-left: 2px; padding-left: 30px; }
  .about-page .record-list::before { left: 9px; }
  .about-page .record-row { grid-template-columns: minmax(0, 1fr) auto; gap: 8px 12px; padding: 15px 12px; }
  .about-page .record-row::before { top: 19px; left: -25px; width: 9px; height: 9px; }
  .about-page .record-row::after { top: 23px; left: -16px; width: 16px; }
  .about-page .record-time { grid-column: 1; grid-row: 1; gap: 5px; }
  .about-page .record-date { font-size: 9px; }
  .about-page .record-main { grid-column: 1 / -1; grid-row: 2; }
  .about-page .record-index, .about-page .institution-logo { grid-column: 2; grid-row: 1; }
  .about-page .record-main h3 { font-size: 15px; }
  .about-page .record-description { font-size: 9px; }
  .about-page .award-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .about-page .certificate-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
  .about-page .certificate-item { padding: 8px; }
  .about-page .skill-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; }
  .about-page .skill-item { grid-template-columns: 20px minmax(0, 1fr); gap: 7px; padding: 8px; }
  .about-page .skill-item span { font-size: 8px; }
}

@media (prefers-reduced-motion: reduce) {
  .about-page *, .about-page *::before, .about-page *::after { scroll-behavior: auto !important; transition-duration: .01ms !important; animation-duration: .01ms !important; }
}
</style>
