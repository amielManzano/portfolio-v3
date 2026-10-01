<template>
  <main class="project-index">
    <header class="index-header">
      <div class="index-kicker">
        <span><i aria-hidden="true"></i> PROJECT ARCHIVE</span>
        <span>AM / 2026</span>
      </div>
      <div class="heading-row">
        <h1><span>PROJECT</span><em>INDEX</em></h1>
        <p>Selected builds, experiments, and digital products.</p>
      </div>
      <div class="project-tools">
        <label class="search-control">
          <span>FIND A PROJECT</span>
          <input
            v-model="searchQuery"
            type="search"
            placeholder="Name or technology"
          />
        </label>
        <div class="filter-controls" role="group" aria-label="Filter projects">
          <button
            v-for="filter in filters"
            :key="filter"
            type="button"
            :class="{ active: activeFilter === filter }"
            :aria-pressed="activeFilter === filter"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
        <span class="result-count"
          >{{ filteredProjects.length }} / {{ projects.length }} PROJECTS</span
        >
      </div>
    </header>

    <section
      class="project-grid"
      aria-label="Project archive"
      aria-live="polite"
    >
      <article
        v-for="(project, index) in filteredProjects"
        :key="project.title"
        class="project-card"
      >
        <a
          class="project-preview"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`Open ${project.title}`"
        >
          <img :src="project.image" :alt="project.title" loading="lazy" />
          <span class="preview-index"
            >WORK / {{ String(index + 1).padStart(2, "0") }}</span
          >
        </a>
        <div class="project-content">
          <div class="project-meta">
            <span>{{
              project.labels.includes("Figma") ||
              project.title.toLowerCase().includes("design")
                ? "DESIGN"
                : "DEVELOPMENT"
            }}</span>
            <span>{{ project.labels.length }} TECHNOLOGIES</span>
          </div>
          <h2>{{ project.title }}</h2>
          <p class="project-description">{{ project.subTitle }}</p>
          <ul class="technology-list" aria-label="Technologies used">
            <li v-for="label in project.labels" :key="label">{{ label }}</li>
          </ul>
          <a
            class="project-link"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>OPEN PROJECT</span><span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>

      <p v-if="filteredProjects.length === 0" class="empty-state">
        NO PROJECTS MATCH THAT SEARCH. TRY ANOTHER TERM.
      </p>
    </section>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { projects } from "@/data/projects";
export default defineComponent({
  name: "ProjectsView",
  data() {
    return {
      filters: ["ALL", "BUILD", "DESIGN"],
      activeFilter: "ALL",
      searchQuery: "",
      projects,
    };
  },
  computed: {
    filteredProjects() {
      const page = this as unknown as {
        activeFilter: string;
        searchQuery: string;
        projects: Array<{
          title: string;
          subTitle: string;
          link: string;
          image: string;
          labels: string[];
        }>;
      };
      const query = page.searchQuery.trim().toLowerCase();

      return page.projects.filter((project) => {
        const isDesign =
          project.title.toLowerCase().includes("design") ||
          project.labels.includes("Figma");
        const matchesFilter =
          page.activeFilter === "ALL" ||
          (page.activeFilter === "DESIGN" ? isDesign : !isDesign);
        const searchableText = `${project.title} ${
          project.subTitle
        } ${project.labels.join(" ")}`.toLowerCase();

        return matchesFilter && (!query || searchableText.includes(query));
      });
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
    @media (min-width: 768px) {
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
            background: linear-gradient(
              270deg,
              #0e2d2c 2.5%,
              rgba(14, 45, 44, 0) 100%
            );
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
          display: none;

          .title-container,
          .link-container,
          .labels-container {
            visibility: visible;
          }
          .link-container {
          }
        }
      }
      .carousel__item {
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
            background: linear-gradient(
              270deg,
              #0e2d2c 2.5%,
              rgba(14, 45, 44, 0) 100%
            );
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

.open {
  .details {
    background: rgba(50, 120, 118, 0.8980392156862745) !important;
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
      background: linear-gradient(
        270deg,
        #0e2d2c 2.5%,
        rgba(14, 45, 44, 0) 100%
      );
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
</style>

<style lang="scss" scoped>
.project-index {
  position: relative;
  isolation: isolate;
  min-height: 100svh;
  padding: 148px clamp(24px, 6vw, 88px) 72px;
  overflow: hidden;
  background: var(--black);
  color: var(--washed-white);

  &::before {
    position: fixed;
    z-index: -1;
    inset: 0;
    background-image: linear-gradient(
        rgba(102, 252, 241, 0.045) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(102, 252, 241, 0.045) 1px, transparent 1px);
    background-size: 56px 56px;
    content: "";
    pointer-events: none;
  }

  .index-header,
  .project-grid {
    width: min(1440px, 100%);
    margin-right: auto;
    margin-left: auto;
  }

  .index-kicker {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 12px;
    border-bottom: 1px solid rgba(102, 252, 241, 0.2);
    color: var(--semi-dark-green);
    font: 700 8px/1.2 "Manrope", sans-serif;
    letter-spacing: 0.14em;
  }

  .index-kicker span:first-child {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--light-blue);
  }
  .index-kicker i {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--light-blue);
    box-shadow: 0 0 8px rgba(102, 252, 241, 0.7);
  }

  .heading-row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 32px;
    padding: 26px 0 24px;
  }

  h1 {
    display: flex;
    align-items: baseline;
    gap: 0.18em;
    color: var(--washed-white);
    font: 800 56px/0.95 "Manrope", sans-serif;
    letter-spacing: 0;
  }

  h1 span {
    color: transparent;
    font-family: "Urbanist", sans-serif;
    -webkit-text-stroke: 1px rgba(196, 198, 200, 0.72);
  }
  h1 em {
    color: var(--light-blue);
    font-family: "Manrope", sans-serif;
    font-style: normal;
  }
  .heading-row p {
    max-width: 340px;
    margin: 0 0 4px;
    color: rgba(196, 198, 200, 0.72);
    font: 500 13px/1.7 "Manrope", sans-serif;
  }

  .project-tools {
    display: grid;
    grid-template-columns: minmax(220px, 1fr) auto auto;
    align-items: end;
    gap: 20px;
    padding: 14px 0;
    border-top: 1px solid rgba(196, 198, 200, 0.16);
    border-bottom: 1px solid rgba(196, 198, 200, 0.16);
  }

  .search-control {
    display: flex;
    flex-direction: column;
    gap: 7px;
    color: var(--semi-dark-green);
    font: 700 7px/1 "Manrope", sans-serif;
    letter-spacing: 0.12em;
  }
  .search-control input {
    width: 100%;
    min-height: 38px;
    padding: 0 12px;
    border: 1px solid rgba(102, 252, 241, 0.2);
    border-radius: 2px;
    outline: 0;
    background: rgba(11, 12, 16, 0.72);
    color: var(--washed-white);
    font: 500 11px/1 "Manrope", sans-serif;
  }
  .search-control input::placeholder {
    color: rgba(196, 198, 200, 0.45);
  }
  .search-control input:focus {
    border-color: var(--light-blue);
  }

  .filter-controls {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  .filter-controls button {
    min-height: 36px;
    padding: 0 12px;
    border: 1px solid transparent;
    border-radius: 2px;
    background: transparent;
    color: var(--semi-dark-green);
    cursor: pointer;
    font: 700 8px/1 "Manrope", sans-serif;
    letter-spacing: 0.08em;
  }
  .filter-controls button:hover,
  .filter-controls button.active {
    border-color: rgba(102, 252, 241, 0.28);
    background: rgba(14, 45, 44, 0.56);
    color: var(--light-blue);
  }
  .filter-controls button:focus-visible,
  .project-link:focus-visible,
  .project-preview:focus-visible {
    outline: 2px solid var(--light-blue);
    outline-offset: 3px;
  }
  .result-count {
    padding-bottom: 12px;
    color: rgba(196, 198, 200, 0.52);
    font: 700 7px/1 "Manrope", sans-serif;
    letter-spacing: 0.1em;
    white-space: nowrap;
  }

  .project-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    padding-top: 20px;
  }

  .project-card {
    min-width: 0;
    overflow: hidden;
    border: 1px solid rgba(102, 252, 241, 0.2);
    border-radius: 4px;
    background: #101819;
    transition: border-color 0.2s ease, background-color 0.2s ease;
  }
  .project-card:hover {
    border-color: rgba(102, 252, 241, 0.5);
    background: #142020;
  }

  .project-preview {
    position: relative;
    display: block;
    overflow: hidden;
    aspect-ratio: 16 / 9;
    background: #101719;
  }
  .project-preview::after {
    position: absolute;
    inset: 45% 0 0;
    background: linear-gradient(transparent, rgba(11, 12, 16, 0.5));
    content: "";
    pointer-events: none;
  }
  .project-preview img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
    transition: transform 0.35s ease;
  }
  .project-card:hover .project-preview img {
    transform: scale(1.025);
  }
  .preview-index {
    position: absolute;
    z-index: 1;
    top: 11px;
    left: 12px;
    padding: 6px 7px;
    border: 1px solid rgba(102, 252, 241, 0.28);
    background: rgba(11, 12, 16, 0.76);
    color: var(--light-blue);
    font: 700 7px/1 "Manrope", sans-serif;
    letter-spacing: 0.1em;
  }
  .preview-arrow {
    position: absolute;
    z-index: 1;
    right: 12px;
    bottom: 10px;
    color: white;
    font: 500 20px/1 "Manrope", sans-serif;
  }

  .project-content {
    padding: 15px 16px 14px;
  }
  .project-meta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: var(--semi-dark-green);
    font: 700 7px/1.2 "Manrope", sans-serif;
    letter-spacing: 0.1em;
  }
  .project-meta span:first-child {
    color: var(--light-blue);
  }
  .project-content h2 {
    margin-top: 10px;
    color: var(--washed-white);
    font: 700 17px/1.25 "Manrope", sans-serif;
    letter-spacing: 0;
    text-transform: uppercase;
  }
  .project-description {
    min-height: 58px;
    margin-top: 8px;
    color: rgba(196, 198, 200, 0.72);
    font: 400 10px/1.65 "Manrope", sans-serif;
  }
  .technology-list {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin: 13px 0 14px;
    padding: 0;
    list-style: none;
  }
  .technology-list li {
    padding: 5px 7px;
    border: 1px solid rgba(102, 252, 241, 0.16);
    border-radius: 2px;
    color: rgba(196, 198, 200, 0.76);
    font: 600 7px/1 "Manrope", sans-serif;
  }
  .project-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding-top: 11px;
    border-top: 1px solid rgba(196, 198, 200, 0.14);
    color: var(--light-blue);
    font: 700 8px/1 "Manrope", sans-serif;
    letter-spacing: 0.08em;
    text-decoration: none;
  }
  .project-link span:last-child {
    font-size: 15px;
    font-weight: 400;
  }
  .empty-state {
    grid-column: 1 / -1;
    padding: 42px 0;
    color: var(--semi-dark-green);
    font: 700 10px/1.5 "Manrope", sans-serif;
    letter-spacing: 0.12em;
    text-align: center;
  }
}

@media (max-width: 1100px) {
  .project-index {
    padding-right: 32px;
    padding-left: 32px;
  }
  .project-index .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .project-index .project-tools {
    grid-template-columns: minmax(180px, 1fr) auto;
  }
  .project-index .result-count {
    grid-column: 2;
    justify-self: end;
  }
}

@media (max-width: 767px) {
  .project-index {
    padding: 108px 20px 52px;
  }
  .project-index .heading-row {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 22px 0;
  }
  .project-index h1 {
    font-size: 40px;
  }
  .project-index .heading-row p {
    max-width: 320px;
    font-size: 12px;
  }
  .project-index .project-tools {
    grid-template-columns: 1fr;
    gap: 12px;
  }
  .project-index .filter-controls {
    flex-wrap: wrap;
  }
  .project-index .result-count {
    grid-column: 1;
    justify-self: start;
    padding: 0;
  }
  .project-index .project-grid {
    grid-template-columns: 1fr;
    gap: 14px;
    padding-top: 14px;
  }
  .project-index .project-description {
    min-height: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-index *,
  .project-index *::before,
  .project-index *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
</style>
