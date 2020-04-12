require("dotenv").config();
const fs = require("fs");
const path = require("path");
const { Feed } = require("feed");
const Airtable = require("airtable");

async function main() {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
        "app7EYyBtFZSDnzUQ",
    );
    const records = await base("Posts")
        .select({
            maxRecords: 100,
            view: "Grid view",
            sort: [{ field: "Date", direction: "desc" }],
        })
        .firstPage();
    const posts = records.map(post => {
        const {
            Title: title,
            Description: description = "",
            Keywords: keywords = "",
            Date: date,
            Type: type,
        } = post.fields;
        const [year, month, day] = date.split("-");
        return {
            title,
            description,
            keywords,
            date,
            year,
            month,
            day,
        };
    });

    const author = {
        name: "Michael Barrett",
        email: "mb@abouthalf.com",
        link: "https://abouthalf.com/about",
    };

    const feed = new Feed({
        title: "Michael Barrett : Abouthalf.com",
        description:
            "This site is like a sketchbook that keeps going and going. This site pulls snapshots, found images, and digital paintings into a long streaming grid of pictures.",
        id: "https://abouthalf.com",
        link: "https://abouthalf.com",
        language: "en",
        image: "https://abouthalf.com/thumbnail.jpg",
        favicon: "https://abouthalf.com/favicon.ico",
        copyright: `All rights reserverd ${new Date().getFullYear()} - Michael Barrett`,
        generator: "Michael's gnarled hands and brow sweat",
        feedLinks: {
            json: "https://abouthalf.com/feed.json",
            atom: "https://abouthalf.com/atom.xml",
            rss: "https://abouthalf.com/rss.xml",
        },
        author,
    });

    posts.forEach(post => {
        const { title, description, date } = post;
        const [year, month, day] = date.split("-");
        const link = `${process.env.URL}/p/${year}/${month}/${day}`;
        feed.addItem({
            title,
            id: link,
            link,
            description,
            content: description,
            date: new Date(date),
            author: [author],
        });
    });

    fs.writeFileSync(
        path.join(process.cwd(), "/src/public/rss.xml"),
        feed.rss2(),
    );
    fs.writeFileSync(
        path.join(process.cwd(), "/src/public/atom.xml"),
        feed.atom1(),
    );
    fs.writeFileSync(
        path.join(process.cwd(), "/src/public/feed.json"),
        feed.json1(),
    );
}

main();
