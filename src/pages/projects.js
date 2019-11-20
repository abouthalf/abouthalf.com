import Head from "next/head";
import SocialHeadMeta from "../components/SocialHeadMeta";
import Document from "../md/projects.md";

const metaDescription = `I think a digital painting can be more than pixels on a screen. 
    It can be responsive, filling its rectangular container. 
    It can respond to your touch or your mouse. 
    I like to experiment with digital paintings-as-websites which are slightly interactive.`;

const NewWindow = ({ children, ...rest }) => (
    <a target="_blank" {...rest}>
        {children}
    </a>
);

const components = {
    a: NewWindow,
};

export default () => {
    return (
        <article className="article">
            <style jsx global>{`
                .article h2 a {
                    color: inherit;
                }
                img {
                    width: 100%;
                    margin: 0 auto 2rem auto;
                }

                hr {
                    margin: 4rem 0;
                    border: 1px solid #ccc;
                }
            `}</style>
            <SocialHeadMeta title="Projects" description={metaDescription} />
            <Document components={components} />
        </article>
    );
};
