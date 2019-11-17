import React from 'react'
import Head from "next/head";
import Link from "next/link";
import App, { Container } from "next/app";
import getConfig from "next/config";

import {link as anchorColor} from "../lib/colors";

const { publicRuntimeConfig } = getConfig();
const { host } = publicRuntimeConfig;

class Layout extends React.Component {
    render() {
        return <main className="main">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta charSet="utf-8" />
                <link href="https://fonts.googleapis.com/css?family=Old+Standard+TT:400,400i,700" rel="stylesheet" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/ico" sizes="48x48" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="alternate" title="JSON Feed" type="application/json" href={`${host}/feed.json`} />
                <link rel="alternate" title="RSS Feed" type="application/rss+xml" href={`${host}/feed.xml`} />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-104505721-4"></script>
                <script dangerouslySetInnerHTML={{__html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-104505721-4');`}} />
            </Head>
            <style jsx global>{`
                html, body {
                    margin: 0;
                    padding: 0;

                    background-color: #333;
                    color: #fff;

                    font-size: 16px;
                    font-family: 'Old Standard TT', serif;
                    color: #5bbad5;
                }

                img {
                    display: block;
                }

                .article {
                    background: #eee;
                    padding: 2rem;
                    margin: 7rem 0 0 0;

                    color: #222;
                }
                .article h1 {
                    font-size: 3rem;
                    line-height: 1;
                    margin-bottom: 1.5rem;
                }

                .article h2 {
                    font-size: 2rem;
                    line-height: 1.5;
                    margin-bottom: 1rem;
                }

                .article a {
                    color: ${anchorColor};
                    font-weight: bold;
                    text-decoration: none;
                }

                .article a:hover,
                .article a:active {
                    color: white;
                    background-color: black;
                }

                section + .article {
                    margin-top: 0;
                }

                .noselect {
                    -webkit-user-select: none;  /* Chrome all / Safari all */
                    -moz-user-select: none;     /* Firefox all */
                    -ms-user-select: none;      /* IE 10+ */
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
                    
                    margin: 0 auto;
                    max-width: 50%;
                }
                .logo {
                    position: relative;
                    padding: 0;
                    margin: 1rem 0;
                    font-size: 1rem;
                    text-align: center;
                }
                .logo img {
                    display: block;
                }
                .logo span {
                    position:absolute;
                    left: 0;
                    width: 0px;
                    overflow: hidden;
                }

                .masthead nav {
                    margin: 1rem 0;
                    text-align: center;
                }

                .masthead a {
                    color: #fff;
                    font-weight: normal;
                    text-decoration: none;
                    display: inline-block;
                    text-transform: lowercase;
                    line-height: 3;
                    margin: 0 1rem;
                }
                .masthead a:hover {
                    background: transparent;
                }
                `}</style>
            <header className="masthead">
                <nav>
                    <a href="/about">About</a>
                    <a href="/about">Contact</a>
                    <a target="_blank" href="https://www.instagram.com/abouthalf/">Instagram</a>
                    <a target="_blank" href="https://tinyletter.com/abouthalf">Newsletter</a>
                </nav>
                <h1 className="logo">
                    <a href="/">
                        <img src="/logo-white-small.svg" width="100" alt="" />
                        <span>michael barrett @ abouthalf.com</span>
                    </a>
                </h1>
            </header>
            {this.props.children}
        </main>
    }
}
    

export default class AbouthalfApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return <Container>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Container>
    }
}