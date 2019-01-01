const images = require('remark-images');
const { Feed } = require("feed");
const unslug = require("unslug");

const fs = require('fs');
const { join } = require('path');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);

const md = require("markdown-it")();

const withImages = require('next-images');
const withMDX = require('@zeit/next-mdx')({
    extension: /\.(md|mdx)$/,
    options: {
        mdPlugins: [images]
    }
});

const host = process.env.URL || "http://localhost:3000";

const makeFeed = (posts, dir) => {
    let feed = new Feed({
        title: "Michael Barrett @ Abouthalf.com",
        description: "This is an art journal",
        id: host,
        link: host,
        image: `${host}/static/fav.jpg`,
        favicon: `${host}/static/favicon.ico`,
        copyright: `© Michael Barrett ${(new Date()).getFullYear()}`,
        generator: "me",
        feedLinks: {
            json: `${host}/feed.json`,
            atom: `${host}/atom.xml`,
            rss: `${host}/rss.xml`,
        },
        author: {
            name: "Michael Barrett",
            link: host
        }
    });

    posts.forEach(p => {
            let title = unslug((p.split("/")).pop());
            let url = `${host}/${p}`;
            let date = new Date((p.match(/\d\d\d\d\/\d\d\/\d\d/))[0]);

            let markdown = fs.readFileSync(join(dir, `pages/${p}.md`), "utf8");
            let content = md.render(markdown);
            feed.addItem({
                title,
                link: url,
                id: url,
                date,
                content,
                description: title,
            });
    })

    return feed;
}


module.exports = withMDX(withImages({
    webpack(config, options) {
        return config
    },
    publicRuntimeConfig: {
        host
    },
    exportPathMap: async function(defaultPathMap, { dev, dir, outDir }) {
        if (dev) {
            return defaultPathMap;
        }
        
        console.log(process.env.NODE_ENV);

        let pages = Object.keys(defaultPathMap);
        let posts = pages.sort().reverse().filter(p => p.match(/\/\d\d\d\d\/\d\d\/\d\d\//));

        let feed = makeFeed(posts, dir);
        await writeFile(join(outDir, "feed.json"), feed.json1());
        await writeFile(join(outDir, "rss.xml"), feed.rss2());
        await writeFile(join(outDir, "atom.xml"), feed.atom1());

        return defaultPathMap;
    }
}));
