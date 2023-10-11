import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import vento from "lume/plugins/vento.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.1.0/toc/mod.ts";

const site = lume(
  {
    location: new URL("https://crispybaccoon.github.io"),
  },
  {
    markdown: {
      plugins: [toc],
    },
    search: {
      returnPageData: true,
    }
  }
);

site.ignore(".github");

site.copy("_static", ".");

site.copy("_includes/styles/variables.css", "/_static/css/variables.css")

site.use(postcss({
  includes: "_includes",
}));

site.use(vento(/* Options */));

// import your favorite language
import lang_javascript from "npm:highlight.js/lib/languages/javascript";
import lang_bash from "npm:highlight.js/lib/languages/bash";

// Define the _includes/css/code.css file as a remote file
site.remoteFile(
  "_includes/_css/code.css",
  "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/github-dark.min.css",
);

site.use(
  codeHighlight({
    extensions: [".html", ".njk", ".md"],
    languages: {
      javascript: lang_javascript,
      bash: lang_bash,
    },
  }),
);

export default site;
