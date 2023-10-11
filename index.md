---
title: CrispyBaccoon
layout: layouts/base.vto
templateEngine: [njk, md]
---

<section>
  <h1>Welcome to my website</h1>

  This is my first page using **Lume,**
  a static site generator for Deno.

  I hope you enjoy it.

  ```javascript
  console.log("have a nice day!");
  ```

</section>
<section id="section-hayashi"><h2><a id="hayashi">hayashi</a></h2>
    <button class="info-button">
      <a href="/hayashi">More info >>></a>
    </button>
</section>
<section id="section-aki"><h2><a id="aki">aki</a></h2></section>
<section id="section-dotfiles">
  <h2><a id="dotfiles">dotfiles</a></h2>
</section>

<style>
  #main {
    & section {
      height: 60vh;
      width: 80vh;
    }
  }
</style>
