import { useEffect } from "react";
import Blazy from "blazy";
import { orderBy } from "lodash";

const placeholder =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

const MegaGram = ({ index, title, date, path = "" }) => {
    if (!Array.isArray(index)) return null;

    let images = orderBy(index, null, ["desc"]);

    useEffect(() => {
        let b = new Blazy();
    });

    return (
        <section className="gram">
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
                header h1 {
                    font-size: 1.5rem;
                }
                header h2 {
                    font-size: 1rem;
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
                <h1>{title}</h1>
                <h2>{date}</h2>
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
