import React from "react";
import Head from "next/head";
import App from "next/app";

class Layout extends React.Component {
    render() {
        return (
            <main className="main">
                <Head>
                    <meta
                        name="viewport"
                        content="initial-scale=1.0, width=device-width"
                    />
                    <meta charSet="utf-8" />
                    <link
                        href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed|IBM+Plex+Serif&amp;display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href="/apple-touch-icon.png"
                    />
                    <link
                        rel="icon"
                        type="image/ico"
                        sizes="48x48"
                        href="/favicon.ico"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href="/favicon-32x32.png"
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href="/favicon-16x16.png"
                    />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link
                        rel="alternate"
                        type="application/rss+xml"
                        href={`${process.env.URL}/rss.xml`}
                    />
                    <link
                        rel="alternate"
                        type="application/json"
                        title="JSON Feed"
                        href={`${process.env.URL}/feed.json`}
                    />
                    <meta name="msapplication-TileColor" content="#da532c" />
                    <meta name="theme-color" content="#ffffff" />
                    <script
                        async
                        src="https://www.googletagmanager.com/gtag/js?id=UA-104505721-4"></script>
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-104505721-4');`,
                        }}
                    />
                </Head>
                <style jsx global>{`
                    html,
                    body {
                        margin: 0;
                        padding: 0;

                        background-color: #fff;
                        color: #333;

                        font-size: 16px;
                        font-family: "IBM Plex Serif", serif;
                    }

                    img {
                        display: block;
                    }

                    section + .article {
                        margin-top: 0;
                    }

                    .noselect {
                        -webkit-user-select: none; /* Chrome all / Safari all */
                        -moz-user-select: none; /* Firefox all */
                        -ms-user-select: none; /* IE 10+ */
                        user-select: none;
                    }

                    @media screen and (max-width: 768px) {
                        .article h1,
                        .article h2 {
                            text-align: center;
                        }
                    }

                    @media screen and (min-width: 768px) {
                        .article {
                            padding-left: 25%;
                            padding-right: 25%;
                        }
                    }
                `}</style>
                <style jsx>{`
                    .masthead {
                        margin: 0;
                        width: 100vw;
                        position: fixed;
                        bottom: 0;
                        left: 0;
                        z-index: 99;
                        background-color: rgba(0, 0, 0, 0.6);
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-content: center;
                    }
                    .logo {
                        position: relative;
                        padding: 0;
                        margin: 0;
                        font-size: inherit;
                        text-align: center;
                    }
                    .logo img {
                        display: inline;
                        vertical-align: middle;
                        height: 48px;
                        mix-blend-mode: difference;
                    }
                    .logo span {
                        position: absolute;
                        left: 0;
                        width: 0px;
                        overflow: hidden;
                    }

                    .masthead nav {
                        
                        margin: 1rem 0;
                        text-align: center;
                    }

                    .masthead a {
                        color: white;
                        mix-blend-mode: difference;
                        font-weight: normal;
                        text-decoration: none;
                        display: inline-block;
                        text-transform: lowercase;
                        line-height: 3;
                        margin: 0 1rem;
                    }
                `}</style>
                <style jsx>{`
                    @media screen and (max-width: 768px) {
                        .masthead {
                            max-width: none;
                        }

                        .masthead a.home {
                            display: block;
                        }

                        .logo img {
                            height: 32px;
                            margin: 0;
                        }
                    }
                `}</style>
                <header className="masthead">
                    <nav>
                        <a href="/" className="home">
                            <h1 className="logo">
                                <img
                                    src="/logo-white-small.svg"
                                    width="100"
                                    alt=""
                                />
                                <span>Home</span>
                            </h1>
                        </a>
                        <a href="/about">About</a>
                        <a href="/projects">Projects</a>
                        <a
                            target="_blank"
                            href="https://abouthalf.substack.com">
                            Newsletter
                        </a>
                    </nav>
                </header>
                {this.props.children}
            </main>
        );
    }
}

export default class AbouthalfApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        );
    }
}
