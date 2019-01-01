import Head from "next/head";
import Document from "../md/about.md";


export default () => {
    return <article className="article">
        <Head>
            <title>This is an art journal</title>
        </Head>
        <Document />
    </article>
}