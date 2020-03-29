import { useRouter } from "next/router";
// import dynamic from "next/dynamic";
import SocialHeadMeta from "../../../../../components/SocialHeadMeta";
import MegaGram from "../../../../../components/MegaGram";

import fs from "fs";
import path from "path";

export default ({ year, month, day, idx }) => {
    // const router = useRouter();
    // const { year, month, day } = router.query;

    const d = new Date(year, month, day);
    const formattedDate = d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <article>
            <SocialHeadMeta />
            <MegaGram
                index={idx}
                title="title"
                path={`/images/${year}/${month}/${day}/`}
                date={formattedDate}
            />
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

    return {
        props: {
            year,
            month,
            day,
            idx,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [{ params: { year: "2020", month: "03", day: "29" } }],
        fallback: false,
    };
}
