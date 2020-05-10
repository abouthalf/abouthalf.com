import Head from "next/head";

const host = process.env.URL;
const defaultThumbnail = "/thumbnail.jpg";

export default ({
    title = "Michael Barrett @ Abouthalf.com",
    description = "An art journal",
    image,
    keywords = "art netart painting drawing",
    url = "",
}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta
                property="og:image"
                content={`${host}${image || defaultThumbnail}`}
            />
            <meta property="og:url" content={`${host}${url}`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta
                property="og:site_name"
                content="Michael Barrett @ Abouthalf.com"
            />
            <meta name="twitter:site" content="@abouthalf" />
        </Head>
    );
};
