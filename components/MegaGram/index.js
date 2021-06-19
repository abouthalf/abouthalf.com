import Image from 'next/image'
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
                    const src = `${path}${img}?webp`;
                    return <Box src={src} alt={`${title} ${i++} / ${images.length}`} />;
                })}
            </div>
        </section>
    );
};

export default MegaGram;

const Box = ({ src, alt }) => (<div className="box">
    <style jsx>{`
    .box {
        width: 33.33%;
        height: 33.33%;
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: row;
    }

    > div { display: block !important; }

    .img {
        will-change: contents;
        display: block !important;
        width: 33.33%;
        height: 33.33%;
    }
`}</style>
    <Image className="img" src={src} width="900" height="900" alt={alt} placeholder="empty" quality="50" />
</div>);
