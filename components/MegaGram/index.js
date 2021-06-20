import { useRef, useEffect, useState } from "react";
import Image from 'next/image'
import slug from "slug";

import PostHeader from "../PostHeader";

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

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
                    width: 100%;
                    z-index: 0;
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
                    const src = `${path}${img}?webp`;
                    return <Box key={`${hash}-${i}`} src={src} alt={`${title} ${i++} / ${images.length}`} />;
                })}
            </div>
        </section>
    );
};

export default MegaGram;

const Box = ({ src, alt }) => {
    const ref = useRef();
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [translateZ, setTranslateZ] = useState(0);

    useEffect(() => {
        if (!ref?.current) return;
        const box = ref.current;
        const rect = box.getBoundingClientRect();
        // console.log(rect);
    }, [])

    const handleClick = e => {
        const box = e.target;
        const { clientX, clientY } = e;
        const { top, left, width, height, } = box.getBoundingClientRect();

        const x = clientX - left;
        const y = clientY - top;

        const rotateX = map(y, 0, height, -12, 12);
        const rotateY = map(x, 0, width, -12, 12);

        setRotateX(rotateX);
        setRotateY(rotateY);
        setTranslateZ(-50);
    }

    return (<div ref={ref} className="box" onClick={handleClick} style={{ transform: `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)` }}>
        <style jsx>{`
        .box {
            width: calc(100vw / 3);
            height: calc(100vw / 3);
            max-width: calc(2000px / 3);
            max-height: calc(2000px / 3);
            margin: 0;
            padding: 0;

            display: flex;
            flex-direction: row;

            transition: all 250ms ease-in-out;
            
            transform-style: preserve-3d;
        }

        > div { display: block !important; }

        .img {
            will-change: contents;
            display: block !important;
        }
    `}</style>
        <Image className="img" src={src} width="900" height="900" alt={alt} placeholder="empty" quality="50" />
    </div>)
};
