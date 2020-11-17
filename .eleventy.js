const htmlmin = require("html-minifier");

module.exports = eleventyConfig => {
  let options = {
    html: true
  };
  var md = require('markdown-it')(options)
    .use(require('markdown-it-named-headings'));
    eleventyConfig.addPassthroughCopy({ "src/static": "static" });
    eleventyConfig.addPassthroughCopy({ "src/js": "js" });
  eleventyConfig.addPairedShortcode("markdown", (content) => {
    content = md.render(content);
    return content
  });
  eleventyConfig.addCollection("docs", collection => {
    return collection.getFilteredByGlob("src/docs/**/*.html").sort((a, b) => {
      if (a.data.title < b.data.title) return -1;
      if (a.data.title > b.date.title) return 1;
      return 0;
    });
  });
  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if( outputPath.endsWith(".html") ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true
      });
      return minified;
    }

    return content;
  });
};