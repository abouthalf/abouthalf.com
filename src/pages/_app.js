import React from 'react'
import Head from "next/head";
import Link from "next/link";
import App, { Container } from "next/app";

class Layout extends React.Component {
    render() {
        return <main className="main">
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="https://fonts.googleapis.com/css?family=Old+Standard+TT:400,400i,700" rel="stylesheet" />
            </Head>
            <style jsx global>{`
                html, body {
                    margin: 0;
                    padding: 0;

                    background-color: #333;
                    color: #fff;

                    font-size: 16px;
                    font-family: 'Old Standard TT', serif;
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

                @media screen and (min-width: 768px) {
                    .article {
                        padding-left: 25%;
                        padding-right: 25%;
                    }
                }
                
            `}</style>
            <style jsx>{`
                .site-header {
                    position: absolute;
                    top: 0;
                    left: 0;
                    z-index: 900;
                }
                .logo {
                    position: relative;
                    padding: 0;
                    margin: 1rem;
                }
                .logo span {
                    position:absolute;
                    left: 0;
                    width: 0px;
                    overflow: hidden;
                }

                .site-footer {
                    padding: 1rem;
                }
                .site-footer a {
                    color: #fff;
                    text-decoration: none;
                    display: inline-block;
                    line-height: 2rem;
                    margin: 0 1rem 0 0;
                }
                `}</style>
            <header className="site-header">
                <h1 className="logo">
                    <a href="/">
                        <img src="/static/logo-white-small.svg" width="100" alt="" />
                        <span>michael barrett @ abouthalf.com</span>
                    </a>
                </h1>
            </header>
            {this.props.children}
            <footer className="site-footer">
                <nav>
                    <a href="/about">About</a>
                    <a href="http://abouthalf.micro.blog">Blog</a>
                </nav>
            </footer>
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