import Head from "next/head";
import Document from "../md/about.md";


export default () => {
    return <article className="article">
        <Head>
            <title>About this site</title>
        </Head>
        <Document />
    </article>
}