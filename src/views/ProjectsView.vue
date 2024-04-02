<template>
  <div class="projects">
    <div class="top">
      <h1 class="title animate__animated animate__backInDown">Projects</h1>
      <div class="sub-title-container">
        <p class="sub-title animate__animated animate__backInDown">
          Welcome to my Projects Page, where you will find a meticulously curated
          selection of more than 20 diverse and innovative undertakings. Each project
          represents a testament to my commitment to excellence and showcases a versatile
          skill set honed through years of dedicated work.
        </p>
      </div>
    </div>
    <div class="cards-container">
      <!-- <div class="card">sample</div> -->
      <carousel
        :items-to-show="isMobile ? 1.2 : 4.2"
        :itemsToScroll="1"
        snapAlign="center"
        wrapAround="true"
      >
        <slide v-for="(project, index) in projects" :key="index">
          <div class="carousel__item animate__animated animate__zoomIn">
            <img class="image" :src="project.image" />
            <div class="details" :ref="`detail-${index}`" :class="`detail-${index}`">
              <div class="title-container">
                <h4 class="title">{{ project.title }}</h4>
                <p class="sub-title">
                  {{ project.subTitle }}
                </p>
              </div>
              <a class="link-container" :href="project.link" target="_blank">
                <span>View Project</span>
                <img :src="view" />
              </a>
              <div class="labels-container">
                <div v-for="(label, index) in project.labels" :key="index" class="label">
                  <span>{{ label }}</span>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <template #addons>
          <navigation>
            <template #next>
              <span class="arrow arrow-right"><img :src="arrow" /> </span>
            </template>
            <template #prev>
              <span class="arrow rotate-y arrow-left"><img :src="arrow" /> </span>
            </template>
          </navigation>
        </template>
      </carousel>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
export default defineComponent({
  name: "ProjectsView",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      arrow: require("@/assets/arrow.svg"),
      projects: [
        {
          title: "Prock DX",
          subTitle:
            "Providing one-stop functionality necessary for the apparel industry, such as product production using 3D, merchandising, demand forecasting, and PR. Prock has become Japan's first all-purpose platform.",
          link: "https://goodvibesonly.jp/dx/",
          image: require("@/assets/projects/prock.png"),
          labels: ["NuxtJS", "Laravel", "AWS", "Firebase"],
        },
        {
          title: "Photography V2 UI Design",
          subTitle:
            "Elevate your visual storytelling with a UI design that puts your photography in the spotlight, capturing every moment with precision and style.",
          link:
            "https://www.figma.com/file/XcL4ynbdAcSYMNBB7dIJFm/Photography-Website?type=design&node-id=0-1&mode=design&t=TYqlgRjZD1ERV0xp-0",
          image: require("@/assets/projects/photographyV2Design.png"),
          labels: ["Figma"],
        },
        {
          title: "Uniel Online Store",
          subTitle:
            "A headless shopify online store. Shop smarter, faster, and easier with our online store app, bringing the world of retail to your fingertips.",
          link: "https://stayful.jp/",
          image: require("@/assets/projects/uniel.png"),
          labels: ["NextJS", "Shopify", "NodeJS", "nodemailer", "CMS"],
        },
        {
          title: "CSV download",
          subTitle:
            "A Shopify app where you can download CSV of any item by setting the template that you like.",
          link:
            "https://apps.shopify.com/csv-download-1?surface_detail=gf.e&surface_inter_position=1&surface_intra_position=3&surface_type=search",
          image: require("@/assets/projects/csvDownload.png"),
          labels: ["Shopify", "ReactJS", "sql", "AWS", "NodeJS"],
        },
        {
          title: "Bulk Images Upload",
          subTitle:
            "A Shopify app where you can easily upload product images all at once in a ZIP file. If you create a folder using the handle or product ID, the product image will be automatically determined and registered as a product.",
          link:
            "https://apps.shopify.com/bulk-images-upload?surface_detail=gf.e&surface_inter_position=1&surface_intra_position=4&surface_type=search",
          image: require("@/assets/projects/bulkImagesUpload.png"),
          labels: ["Shopify", "ReactJS", "Postgreql", "AWS", "NodeJS"],
        },
        {
          title: "Booking System",
          subTitle:
            "Effortlessly manage your reservations with our streamlined booking system, ensuring seamless organization and enhanced customer experiences.",
          link: "https://aem.trainee.gitlab.io/capstone-2-front-end/",
          image: require("@/assets/projects/bookingSystem.png"),
          labels: [
            "HTML",
            "CSS",
            "Javascript",
            "NodeJs",
            "ExpressJs",
            "MongoDB",
            "Atlas",
            "Gitlab",
            "Heroku",
          ],
        },
        {
          title: "Budget Tracking",
          subTitle:
            "Take control of your finances effortlessly with our intuitive budget tracking app, empowering you to achieve your financial goals with confidence.",
          link: "https://badjet-app.vercel.app/",
          image: require("@/assets/projects/budgetTracking.png"),
          labels: [
            "NextJS",
            "ReactJS",
            "NodeJS",
            "ExpressJS",
            "MongoDB",
            "Heroku",
            "Google Login",
            "SMTP",
          ],
        },
        {
          title: "Portfolio V3 UI Design",
          subTitle:
            "Empower your professional journey with a portfolio UI design that speaks volumes about your skills and creativity, setting you apart from the crowd.",
          link:
            "https://www.figma.com/file/NoRFMv1Dm6sBbopWLfKtdJ/V3?type=design&node-id=0-1&mode=design",
          image: require("@/assets/projects/portfolioV3Design.png"),
          labels: ["Figma"],
        },
        {
          title: "Portfolio V2 UI Design",
          subTitle:
            "Empower your professional journey with a portfolio UI design that speaks volumes about your skills and creativity, setting you apart from the crowd.",
          link:
            "https://www.figma.com/file/Fl6em464J6EH901XEEOMAj/portfolio?type=design&mode=design&t=kfe9KVDyozch4EIB-0",
          image: require("@/assets/projects/portfolioV2Design.png"),
          labels: ["Figma"],
        },
        {
          title: "Portfolio V2",
          subTitle:
            "Empower your professional journey with a portfolio UI design that speaks volumes about your skills and creativity, setting you apart from the crowd.",
          link: "https://aemportfolio.vercel.app/projects",
          image: require("@/assets/projects/portfolioV2.png"),
          labels: ["Nextjs", "Vercel", "Bootstrap"],
        },
        {
          title: "Portfolio V1",
          subTitle:
            "Empower your professional journey with a portfolio UI design that speaks volumes about your skills and creativity, setting you apart from the crowd.",
          link: "https://amiel-manzano.vercel.app/",
          image: require("@/assets/projects/portfolioV1.png"),
          labels: ["Nextjs", "Vercel", "Bootstrap"],
        },
        {
          title: "Nexstore",
          subTitle:
            "Discover the ultimate shopping experience with our online store app, where convenience meets style at your command.",
          link: "https://front-end-one-tawny.vercel.app/",
          image: require("@/assets/projects/nexstore.png"),
          labels: ["Gitlab", "NextJS", "NodeJS", "SMTP", "Paypal", "RapidAPI", "MongoDB"],
        },
        {
          title: "Brass Life",
          subTitle:
            "This is made using Shopify. Adorn yourself with elegance from our jewelry store app, where every piece tells a story of beauty and craftsmanship.",
          link: "https://sobo-brass.com/",
          image: require("@/assets/projects/brassLife.png"),
          labels: ["Shopify", "Liquid", "HTML", "CSS", "Javascript"],
        },
        {
          title: "Nuts Lab",
          subTitle:
            "This is made using Shopify. Elevate your snacking experience with our nut products store app, offering a delectable array of flavors and wholesome goodness",
          link: "https://nuts-lab.com/",
          image: require("@/assets/projects/nutsLab.png"),
          labels: ["Shopify", "Liquid", "HTML", "CSS", "Javascript"],
        },
        {
          title: "Photography V1 UI Design",
          subTitle:
            "Elevate your visual storytelling with a UI design that puts your photography in the spotlight, capturing every moment with precision and style.",
          link: "https://aemphotography.github.io/website/",
          image: require("@/assets/projects/photographyV1.png"),
          labels: ["HTML", "CSS", "Javascript", "Github"],
        },
        {
          title: "Design Project",
          subTitle:
            "The Development of Crop Management and Inventory System for Mushroom Farmers - firmware/hardware developer",
          link:
            "https://www.facebook.com/groups/256184368395441/permalink/520636595283549/",
          image: require("@/assets/projects/designProject.jpg"),
          labels: ["HTML", "CSS", "Javascript", "PHP", "C", "Microcontrollers"],
        },
      ],
      view: require("@/assets/view.svg"),
      isMobile: window.innerWidth < 768,
    };
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  unmount() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isMobile = window.innerWidth < 768;
    },
    openDetails(className: string) {
      const details = document.querySelector<HTMLElement>(`.${className}`);
      if (details) {
        details.style.visibility = "visible";
      }
    },
  },
});
</script>
<style lang="scss" scoped>
.projects {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: calc(100dvh - 122px) !important;
  .top {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 20px;
    margin-top: 100px;
    .title {
      color: var(--light-blue);
      font-size: 4.25vw;
      font-weight: 300;
    }
    .sub-title-container {
      max-width: 40%;
      width: 40%;
      .sub-title {
        font-size: 0.7vw;
        font-weight: 300;
        color: white;
      }
    }
  }
  .cards-container {
    width: 100vw;

    .carousel {
      .carousel__prev {
        svg {
          fill: white !important;
        }
      }
    }
    .card {
      height: 45.5dvh;
      background: wheat;
    }
    .carousel__item {
      height: 55dvh;
      width: 100%;
      background-color: var(--vc-clr-primary);
      color: var(--vc-clr-white);
      font-size: 20px;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      position: relative;
      .image {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        object-fit: cover;
        object-position: top;
      }
      .details {
        border-radius: 8px;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 33px 0 25px 0;
        position: relative;
        .title-container,
        .link-container,
        .labels-container {
          visibility: hidden;
        }
        .link-container {
          color: white !important;
          text-decoration: none;
        }
      }
    }
    @media (max-width: 768px) {
      .carousel__item:hover {
        .details {
          background: rgba(50, 120, 118, 0.8980392156862745);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          .title-container,
          .link-container,
          .labels-container {
            visibility: visible;
          }
          .title-container {
            padding: 0 27px;
            color: white;
            .title {
              font-size: 30px;
              font-weight: 300;
              line-height: 41px;
              text-align: left;
              margin-bottom: 5px;
            }
            .sub-title {
              font-size: 12px;
              font-weight: 300;
              line-height: 16px;
              text-align: left;
              width: 90%;
            }
          }
          .link-container {
            position: absolute;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
            background: linear-gradient(270deg, #0e2d2c 2.5%, rgba(14, 45, 44, 0) 100%);
            padding: 10px 0;
            font-size: 15px;
            font-weight: 300;
            line-height: 20px;
            cursor: pointer;
            img {
              width: 11px;
              height: 11px;
              margin-left: 6px;
            }
          }
          .labels-container {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding: 0 27px;
            width: 90%;
            .label {
              width: fit-content;
              color: var(--dark-green);
              background: var(--washed-white);
              padding: 4px 9px;
              font-size: 12px;
              font-weight: 300;
              line-height: 14px;
              border-radius: 20px;
              margin-right: 5px;
              margin: 0 5px 5px 0;
            }
          }
        }
      }
    }
    .carousel__slide {
      padding: 10px;
    }
    .carousel__prev,
    .carousel__next {
      box-sizing: content-box;
      border: 5px solid white;
      .carousel__icon {
        fill: white !important;
      }
    }
  }

  .rotate-y {
    transform: rotateY(180deg);
  }

  .arrow-left {
    margin-left: 50px;
  }

  .arrow-right {
    margin-right: 50px;
  }

  .arrow {
    img {
      width: 70px;
      filter: drop-shadow(3px 3px 2px black);
    }
  }
}

@media (max-width: 768px) {
  .projects {
    height: calc(100dvh - 90px) !important;

    .top {
      margin-top: 80px;

      .title {
        font-size: 37.5px;
      }
      .sub-title-container {
        width: 85%;
        max-width: 85%;

        .sub-title {
          font-size: 8px;
        }
      }
    }

    .cards-container {
      width: 100vw;

      .carousel {
        .carousel__prev {
          svg {
            fill: white !important;
          }
        }
      }
      .card {
        height: 45.5dvh;
        background: wheat;
      }
      .carousel__item {
        .image {
        }
        .details {
          .title-container,
          .link-container,
          .labels-container {
            visibility: hidden;
          }
          .link-container {
          }
        }
      }
      .carousel__item:hover {
        .details {
          background: rgba(50, 120, 118, 0.8980392156862745);
          .title-container,
          .link-container,
          .labels-container {
            visibility: visible;
          }
          .title-container {
            .title {
              font-size: 25px;
            }
            .sub-title {
              font-size: 8.5px;
              line-height: 12px;
            }
          }
          .link-container {
            img {
            }
          }
          .labels-container {
            width: 100% !important;
            .label {
              width: fit-content;
              color: var(--dark-green);
              background: var(--washed-white);
              padding: 4px 9px;
              font-size: 8.5px;
              font-weight: 300;
              line-height: 14px;
              border-radius: 20px;
              margin-right: 5px;
              margin: 0 5px 5px 0;
            }
          }
        }
      }
      .carousel__slide {
        padding: 10px;
      }
      .carousel__prev,
      .carousel__next {
        box-sizing: content-box;
        border: 5px solid white;
        .carousel__icon {
          fill: white !important;
        }
      }
    }
  }

  .arrow-left {
    margin-left: 5px !important;
  }

  .arrow-right {
    margin-right: 5px !important;
  }

  .arrow {
    img {
      width: 30px !important;
      filter: drop-shadow(3px 3px 2px black);
    }
  }
}
</style>
