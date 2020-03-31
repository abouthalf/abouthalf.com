import fs from "fs";
import path from "path";
import Airtable from "airtable";
import SocialHeadMeta from "../components/SocialHeadMeta";
import MegaGram from "../components/MegaGram";

export default ({ posts }) => {
    const renderPosts = posts => {
        return posts.map(post => {
            const { date, year, month, day, title, index } = post;
            const d = new Date(date);
            const formattedDate = d.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            const path = `/images/${year}/${month}/${day}/`;
            return (
                <MegaGram
                    key={date}
                    index={index}
                    title={title}
                    date={formattedDate}
                    path={path}
                    year={year}
                    month={month}
                    day={day}
                />
            );
        });
    };

    return (
        <article>
            <SocialHeadMeta />
            {renderPosts(posts)}
        </article>
    );
};

export async function getStaticProps() {
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
        const idxPath = path.join(
            process.cwd(),
            `src/public/images/${year}/${month}/${day}/index.json`,
        );
        const idxContents = fs.readFileSync(idxPath);
        const index = JSON.parse(idxContents);
        return {
            title,
            description,
            keywords,
            date,
            year,
            month,
            day,
            type,
            index,
        };
    });
    return {
        props: {
            posts,
        },
    };
}
