import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import codeHighlight from "lume/plugins/code_highlight.ts";

const site = lume();

site.copy("_static");

site.use(postcss({
  includes: "_includes",
}));

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
