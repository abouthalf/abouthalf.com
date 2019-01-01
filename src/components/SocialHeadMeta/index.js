import Head from "next/head";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { host } = publicRuntimeConfig;

export default ({
  title = "Michael Barrett @ Abouthalf.com",
  description = "An art journal",
  image = "/static/thumbnail.jpg",
  keywords = "art netart painting drawing",
  url = ""
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${host}${image}`} />
      <meta property="og:url" content={`${host}${url}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:site_name" content="Michael Barrett @ Abouthalf.com" />
      <meta name="twitter:site" content="@abouthalf" />
    </Head>
  );
};
