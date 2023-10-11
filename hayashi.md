---
title: hayashi
layout: layouts/base.vto
templateEngine: [njk, md]
main_menu: hayashi
---

<section id="section-description">
  <div class="container-description">
    <h1>hayashi</h1>
    <p>
      a tiny distro-independent package manager written in Go.
    </p>
    <div class="description-buttons">
      <button class="action-button font-text">Installation</button>
      <button class="accent-button font-text">
<a href="/docs/overview/about-hayashi/">Documentation</a>
      </button>
    </div>
  </div>
  <div class="container-animation" />
</section>
<section id="section-features">
  <div>
    <div>
      <h2>Simplified package management</h2>
      <p>
      Hayashi strives to provide a **streamlined** and **user-friendly** package
      management experience, making it easy to install, update, and remove
      software packages.
      </p>
    </div>
  </div>
  <div>
    <div>
      <h2>Lightweight and efficient</h2>
      <p>
      Hayashi is designed to be **lightweight** and **efficient**, minimizing
      resource usage while maintaining performance. It aims to provide fast
      and responsive package management operations.
      </p>
    </div>
  </div>
  <div>
    <div>
      <h2>Self maintaining</h2>
      <p>
      Hayashi has **built-in support** for installing updates and configuring
      new packages.
      </p>
    </div>
  </div>
</section>

<style>
  #main {
    & section {
      height: 40vh;
      margin-inline: auto;
      width: min(1200px, 80%);
    }
    & #section-description {
      display: flex;
      flex-direction: row;
      align-items: center;

      height: 50vh;

      & .container-description {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;

        & p {
          width: min(auto, 50ch);
        }

        & .description-buttons {
          display: flex;
          gap: 20px;

          margin-block: 2rem;

          & button {
            scale: 1.1;
          }
        }
      }
    }
    & #section-features {
      display: flex;
      flex-direction: row;

      gap: 20px;
      align-items: center;

      & > div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        height: 100%;
        width: 30%;

        & > div {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;

          height: 200px;
        }

        & h2 {
          margin-block-end: 12px;
        }
        & p {
          line-height: 1.4rem;
        }
      }
    }
  }
</style>
