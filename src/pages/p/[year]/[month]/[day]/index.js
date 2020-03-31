import Airtable from "airtable";

import SocialHeadMeta from "../../../../../components/SocialHeadMeta";
import MegaGram from "../../../../../components/MegaGram";

import fs from "fs";
import path from "path";

export default ({
    title,
    keywords,
    description,
    date,
    type,
    year,
    month,
    day,
    idx,
}) => {
    const d = new Date(date);
    const formattedDate = d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // collect all props for dynamically selected component
    const componentProps = {
        title,
        keywords,
        description,
        date,
        type,
        year,
        month,
        day,
        index: idx,
        path: `/images/${year}/${month}/${day}/`,
        formattedDate,
    };

    const renderComponent = props => {
        if (type === "MegaGram") {
            return <MegaGram {...props} />;
        }
        return null;
    };

    return (
        <article>
            <SocialHeadMeta
                title={title}
                keywords={keywords}
                description={description}
            />
            {renderComponent(componentProps)}
        </article>
    );
};

export async function getStaticProps({ params }) {
    const { year, month, day } = params;

    const idxPath = path.join(
        process.cwd(),
        `src/public/images/${year}/${month}/${day}/index.json`,
    );
    const idxContents = fs.readFileSync(idxPath);
    const idx = JSON.parse(idxContents);

    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
        "app7EYyBtFZSDnzUQ",
    );
    const posts = await base("Posts")
        .select({
            maxRecords: 1,
            view: "Grid view",
            filterByFormula: `DATESTR({Date}) = "${year}-${month}-${day}"`,
        })
        .firstPage();

    const { fields } = posts[0];
    const {
        Title: title,
        Description: description,
        Keywords: keywords,
        Date: date,
        Type: type,
    } = fields;
    return {
        props: {
            ...params,
            title,
            description,
            keywords,
            date,
            type,
            idx,
        },
    };
}

export async function getStaticPaths() {
    const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
        "app7EYyBtFZSDnzUQ",
    );
    const posts = await base("Posts")
        .select({
            maxRecords: 100,
            view: "Grid view",
            fields: ["Date"],
            sort: [{ field: "Date", direction: "desc" }],
        })
        .firstPage();
    const paths = posts.map(post => {
        const { Date: date } = post.fields;
        const [year, month, day] = date.split("-");
        return {
            params: {
                year,
                month,
                day,
            },
        };
    });
    // console.log("getStaticPaths", "paths", paths);
    return {
        paths,
        fallback: false,
    };
}
