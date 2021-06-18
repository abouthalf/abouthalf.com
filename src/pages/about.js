import Article from "../components/Article";
import SocialHeadMeta from "../components/SocialHeadMeta";
import Document from "../md/about.md";


export default () => {
    return <Article>
        <SocialHeadMeta title="This is an art journal" description="This is anart journal. An online sketchbook and gallery. " />
        <Document />
    </Article>
}