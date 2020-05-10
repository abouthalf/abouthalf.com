import { useEffect } from "react";
import Blazy from "blazy";
import slug from "slug";
import PostHeader from "../PostHeader";
import Link from "next/link";
import Draggable from "react-draggable";

import placeholder from "../../lib/pixel";

const DeniedPortrait = ({
    index,
    title,
    description,
    date,
    year,
    month,
    day,
    path = "",
}) => {
    const { portrait, mask } = index;

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
            <PostHeader
                title={title}
                description={description}
                postUrl={postUrl}
                date={date}
            />
            <div className="grid">
                {index.reverse().map((img, i) => (
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

export default DeniedPortrait;
