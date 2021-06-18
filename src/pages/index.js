import fs from "fs";
import path from "path";
import Airtable from "airtable";
import SocialHeadMeta from "../components/SocialHeadMeta";
import MegaGram from "../components/MegaGram";
import DeniedPortrait from "../components/DeniedPortrait";
import Page from "../components/Page";

const Home = ({ posts }) => {
    const renderPosts = posts => {
        return posts.map(post => {
            const {
                date,
                year,
                month,
                day,
                title,
                description,
                index,
                type,
            } = post;
            const d = new Date(date);
            const formattedDate = d.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });
            const path = `/images/${year}/${month}/${day}/`;
            const props = {
                key: date,
                date: formattedDate,
                index,
                title,
                description,
                path,
                year,
                month,
                day,
            };
            return getComponent(type, props);
        });
    };

    const getComponent = (type, props) => {
        switch (type) {
            case "MegaGram":
                return <MegaGram {...props} />;
            case "DeniedPortrait":
                return <DeniedPortrait {...props} />;
            default:
                return null;
        }
    };

    return (
        <Page>
            <SocialHeadMeta />
            {renderPosts(posts)}
        </Page>
    );
};

export default Home;

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