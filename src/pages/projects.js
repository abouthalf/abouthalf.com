import Article from "../components/Article";
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
        <Article>
            <SocialHeadMeta title="Projects" description={metaDescription} />
            <Document components={components} />
        </Article>
    );
};
