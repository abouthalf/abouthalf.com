import Art from "../../../../components/20190104BoyLooksOverShoulder";
import Document from "./boy-looks-over-shoulder.md";
import SocialHeadMeta from "../../../../components/SocialHeadMeta";

const perma = "/2019/01/04/boy-looks-over-shoulder";
import thumbnail from "./thumbnail.jpg";

export default () => <article>
    <SocialHeadMeta title="Boy looks over shoulder" description="Boy Looks over shoulder" image={thumbnail} url={perma} />
    <Art perma={perma} />
    <section className="article">
        <Document />
    </section>
</article>