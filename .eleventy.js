module.exports = function (eleventyConfig) {

    // Don't process folders with static assets e.g. images
    eleventyConfig.addPassthroughCopy("static/img");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            layouts: "_includes/layouts",
            output: "_site"
        }
    };
};