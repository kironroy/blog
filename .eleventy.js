// const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets");
  eleventyConfig.addPassthroughCopy("./src/admin");

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(
      DateTime.DATETIME_MED_WITH_WEEKDAY
    );
  });

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};

module.exports = function (eleventyConfig) {
  eleventyConfig.addCollection("africa", function (collectionApi) {
    return collectionApi.getFilteredByTag("africa");
  });
};

module.exports = function (eleventyConfig) {
  // Existing configuration...

  // Add a postDate filter
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site",
    },
  };
};


