import React from 'react'
import Head from "next/head";
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
                
            `}</style>
            <style jsx>{`
                .site-header {
                    position: absolute;
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