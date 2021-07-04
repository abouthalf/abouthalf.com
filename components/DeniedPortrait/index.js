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
    const { portrait, mask, scale = 75 } = index;

    const allMasks = Array.isArray(mask) ? mask : [mask];

    const sources = allMasks.map(mask => {
        const type = mask.split(".")[1];
        return (<source key={mask} srcSet={`${path}${mask}`} type={`image/${type}`} />)
    });

    const fallback = allMasks.slice(-1)[0];

    let hash = slug(date);
    let postUrl = `/p/${year}/${month}/${day}`;

    return (
        <section id={hash} className="denied-portrait">
            <style jsx>{`
                .denied-portrait {
                    position: relative;
                    margin: 0 auto;
                }

                img.portrait {
                    display: block;
                    user-select: none;
                    width: 100%;
                    height: auto;
                }

                .mask {
                    width: ${scale}%;
                    height: ${scale}%;
                    position: absolute;
                    top: ${(100 - scale) / 2}%;
                    left: ${(100 - scale) / 2}%;;
                    cursor: move;
                    user-select: none;
                    z-index: 2;
                }

                picture, img {
                    display: block;
                    user-select: none;
                    pointer-events: none;
                    width: 100%;
                    object-fit: contain;
                }
               
            `}</style>
            <PostHeader
                title={title}
                description={description}
                postUrl={postUrl}
                date={date}
            />
            <Draggable bounds="parent">
                <div className="mask">
                    <picture  >
                        {sources.map(source => source)}
                        <img src={`${path}${fallback}`} alt="" />
                    </picture>
                </div>
            </Draggable>
            <img
                className="portrait"
                loading="lazy"
                width="2000"
                height="2000"
                alt=""
                src={`${path}${portrait}`} />
        </section>
    );
};

export default DeniedPortrait;
