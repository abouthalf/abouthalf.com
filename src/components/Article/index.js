
import { link as anchorColor } from "../../lib/colors";

export default ({ children }) => (
    <article className="article">
        <style jsx global>{`
            .article {
                padding: 2rem;
                max-width: 768px;
                margin:  0 auto 7rem auto;
            }
            .article h1 {
                font-size: 3rem;
                line-height: 1.5;
                margin-bottom: 1.5rem;

                font-family: "IBM Plex Serif", serif;
                font-weight: lighter;
                letter-spacing: 1px;
            }

            .article h2 {
                font-size: 2rem;
                line-height: 1.5;
                margin-bottom: 1rem;

                font-family: "IBM Plex Serif", serif;
                font-weight: lighter;
                letter-spacing: 1px;
            }

            .article a {
                color: ${anchorColor};
                font-weight: normal;
                text-decoration: none;
            }

            .article a:hover,
            .article a:active {
                color: white;
                background-color: black;
            }

            .article img {
                width: 100%;
                margin: 0 auto 2rem auto;
            }

            .article hr {
                margin: 4rem 0;
                border: 1px solid #ccc;
            }

            .article h2 a {
                color: inherit;
            }

            .article iframe {
                display: block;
                margin: 0 auto;
            }
        `}</style>
        {children}
    </article>
);