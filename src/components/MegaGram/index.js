import { useEffect } from "react";
import Blazy from "blazy";
import { orderBy } from "lodash";
import slug from "slug";
import Link from "next/link";

const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

const MegaGram = ({ index, title, date, year, month, day, path = "" }) => {
    if (!Array.isArray(index)) return null;

    let images = orderBy(index, null, ["desc"]);

    let hash = slug(date);
    let postUrl = `/p/${year}/${month}/${day}`;

    useEffect(() => {
        let b = new Blazy();
    });

    return (
        <section id={hash} className="gram">
            <style jsx>{`
                .gram {
                    position: relative;
                    margin: 0 auto;
                    max-width: 1000px;
                }

                .gram:hover header {
                    opacity: 1;
                }
                header {
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                    color: white;
                    z-index: 1;
                    opacity: 0;
                    transition: all 500ms;
                }
                header a,
                header span {
                    background-color: rgba(0, 0, 0, 0.6);
                    padding: 0.25rem;
                    color: inherit;
                    text-decoration: none;
                }
                header h1 {
                    font-size: 1.5rem;
                    text-shadow: 0px 0px 3px #000;
                }
                header h2 {
                    font-size: 1rem;

                    text-shadow: 0px 0px 2px #000;
                }
                .grid {
                    max-width: 1000px;
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                .grid img {
                    width: 33%;
                    height: 33%;
                    display: block;
                }

                .b-lazy {
                    opacity: 0;
                    filter: blur(20px);
                    transition: all 500ms;
                }
                .b-loaded {
                    opacity: 1;
                    filter: blur(0);
                }
            `}</style>
            <header>
                <h1>
                    <a href={postUrl}>{title}</a>
                </h1>
                <h2>
                    <span>{date}</span>
                </h2>
            </header>
            <div className="grid">
                {images.map((img, i) => (
                    <img
                        key={img}
                        className="b-lazy"
                        src={placeholder}
                        data-src={`${path}${img}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default MegaGram;
