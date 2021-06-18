import { useEffect } from "react";
import slug from "slug";
import PostHeader from "../PostHeader";

const MegaGram = ({
    index,
    title,
    description,
    date,
    year,
    month,
    day,
    path = "",
}) => {
    if (!Array.isArray(index)) return null;

    let hash = slug(date);
    let postUrl = `/p/${year}/${month}/${day}`;

    return (
        <section id={hash} className="gram">
            <style jsx>{`
                .gram {
                    position: relative;
                    margin: 0 auto;
                    width: 100%
                }

                .grid {
                    display: flex;
                    flex-wrap: wrap;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                }

                .grid img {
                    width: 33.33%;
                    height: 33.33%;
                    display: block;
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
                        width="900"
                        height="900"
                        src={`${path}${img}`}
                        loading="lazy"
                    />
                ))}
            </div>
        </section>
    );
};

export default MegaGram;
