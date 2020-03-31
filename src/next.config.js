require("dotenv").config();
const images = require("remark-images");
const withImages = require("next-images");
const withMDX = require("@next/mdx")({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [images],
    },
});

module.exports = withMDX(
    withImages({
        webpack(config, options) {
            return config;
        },
        devIndicators: {
            autoPrerender: false,
        },
        env: {
            URL: process.env.URL || "http://localhost:3000",
            AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
        },
    }),
);
