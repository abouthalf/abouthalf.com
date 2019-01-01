import Head from "next/head";
import SocialHeadMeta from "../components/SocialHeadMeta";
import Document from "../md/about.md";


export default () => {
    return <article className="article">
        <SocialHeadMeta title="This is an art journal" description="This is anart journal. An online sketchbook and gallery. " />
        <Document />
    </article>
}