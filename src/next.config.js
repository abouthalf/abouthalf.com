const images = require('remark-images');

const withImages = require('next-images');
const withMDX = require('@zeit/next-mdx')({
    extension: /\.(md|mdx)$/,
    options: {
        mdPlugins: [images]
    }
});

module.exports = withMDX(withImages({
    webpack(config, options) {
        return config
    },
    publicRuntimeConfig: {
        host: process.env.URL || "http://localhost:3000"
    }
}));