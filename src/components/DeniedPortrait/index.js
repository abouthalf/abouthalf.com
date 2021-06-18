import { useEffect } from "react";
import slug from "slug";
import PostHeader from "../PostHeader";
import Draggable from "react-draggable";

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

    return (
        <section id={hash} className="denied-portrait">
            <style jsx>{`
                .denied-portrait {
                    position: relative;
                    margin: 0 auto;
                    width: 100%;
                }

                .denied-portrait img.portrait {
                    display: block;
                    user-select: none;
                    width: 100%;
                    object-fit: contain;
                }

                .mask {
                    width: 75%;
                    height: 75%;
                    position: absolute;
                    top: 12.5%;
                    left: 12.5%;
                    background-image: url("${path}${mask}");
                    background-repeat: no-repeat;
                    background-size: contain;
                    cursor: move;
                    user-select: none;
                    z-index: 2;
                }

               
            `}</style>
            <PostHeader
                title={title}
                description={description}
                postUrl={postUrl}
                date={date}
            />
            <Draggable bounds="parent">
                <div className="mask"></div>
            </Draggable>
            <img
                className="portrait"
                loading="lazy"
                src={`${path}${portrait}`} />
        </section>
    );
};

export default DeniedPortrait;
