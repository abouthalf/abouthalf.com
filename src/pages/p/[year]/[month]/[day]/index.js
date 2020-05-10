import Airtable from "airtable";

import SocialHeadMeta from "../../../../../components/SocialHeadMeta";
import MegaGram from "../../../../../components/MegaGram";
import DeniedPortrait from "../../../../../components/DeniedPortrait";

import fs from "fs";
import path from "path";

export default ({
    title,
    keywords = "",
    description = "",
    thumbnail,
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

    const socialProps = {
        title,
        description,
        keywords,
        image: thumbnail,
    };

    const renderComponent = props => {
        switch (props.type) {
            case "MegaGram":
                return <MegaGram {...props} />;
            case "DeniedPortrait":
                return <DeniedPortrait {...props} />;
            default:
                return null;
        }
    };

    return (
        <article>
            <SocialHeadMeta {...socialProps} />
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

    let thumbPath = path.join(
        process.cwd(),
        `src/public/images/${year}/${month}/${day}/thumbnail.jpg`,
    );
    let thumbnail = "";
    if (fs.existsSync(thumbPath)) {
        thumbnail = `/images/${year}/${month}/${day}/thumbnail.jpg`;
    }

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
        Description: description = "",
        Keywords: keywords = "",
        Date: date,
        Type: type,
    } = fields;
    return {
        props: {
            ...params,
            title,
            description,
            keywords,
            thumbnail,
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
    return {
        paths,
        fallback: false,
    };
}
