import { useEffect, useState, useRef } from "react";
import slug from "slug";
import PostHeader from "../PostHeader";

import pixel from "../../lib/pixel";

const ioConfig = {
    rootMargin: '0px 0px 256px 0px',
    threshold: 0.01,
};
const lazySrcAttr = "data-lazy-src";

let intersectionObserver;

const getIntersectionObserver = (onIntersection) => {
    // create interaction observer
    if (intersectionObserver) return intersectionObserver;
    intersectionObserver = new IntersectionObserver(
        onIntersection,
        ioConfig
    );
    return intersectionObserver;
}

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
    const hash = slug(date);
    const postUrl = `/p/${year}/${month}/${day}`;

    // get reverse array
    const images = index.slice(0).reverse();

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
            `}</style>
            <PostHeader
                title={title}
                description={description}
                postUrl={postUrl}
                date={date}
            />
            <div className="grid">
                {images.map((img, i) => {
                    const src = `${path}${img}`;
                    return <LazyImage key={slug(src + hash)} src={src} />
                })}
            </div>
        </section>
    );
};

export default MegaGram;


const LazyImage = ({ src }) => {
    const ref = useRef();
    // const [source, setSource] = useState(src);

    // polyfill lazy loading for Safari
    useEffect(() => {
        // if lazy loading supported, use it
        if ('loading' in HTMLImageElement.prototype) return;
        // define onIntersection handler
        function onIntersection(entries, observer) {
            entries.forEach(entry => {
                if (entry.intersectionRatio === 0) {
                    return;
                }
                // If the item is visible now, load it and stop watching it
                const image = entry.target;
                observer.unobserve(image);
                // load image
                image.src = image.getAttribute(lazySrcAttr);
            })
        };

        // observer current dom element, reset src to pre-load
        if (ref?.current) {
            const io = getIntersectionObserver(onIntersection);
            io.observe(ref.current)
            ref.current.src = pixel;
        }
    }, []);

    return (<>
        <style jsx>{`
            img {
                width: 33.33%;
                height: 33.33%;
                display: block;
                will-change: contents;
            }
        `}</style>
        <img
            ref={ref}
            width="900"
            height="900"
            src={src}
            loading="lazy"
            data-lazy-src={src}
        /></>);
}