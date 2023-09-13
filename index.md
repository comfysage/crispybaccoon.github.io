---
layout: layout.njk
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
<section id="section-hayashi"><h2><a id="hayashi">hayashi</a></h2></section>
<section id="section-aki"><h2><a id="aki">aki</a></h2></section>
<section id="section-dotfiles">
  <h2><a id="dotfiles">dotfiles</a></h2>
</section>

<style>
  #main {
    & section {
      height: calc(60vh);
    }
  }
</style>
