module.exports = function(config) {

    config.addPassthroughCopy("src/js");

    config.setBrowserSyncConfig({
        https: {
            key: '/Users/markrussel-brown/Documents/mrbapex/eleventy-test/localhost.key',
            cert: '/Users/markrussel-brown/Documents/mrbapex/eleventy-test/localhost.crt'
        }
    })

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    }
};