import Art from "../../../../components/20190104BoyLooksOverShoulder";
import Document from "../../../../components/20190104BoyLooksOverShoulder/README.md";
import SocialHeadMeta from "../../../../components/SocialHeadMeta";

const perma = "/2019/01/04/boy-looks-over-shoulder";
import thumbnail from "../../../../components/20190104BoyLooksOverShoulder/images/thumbnail.jpg";

export default () => <article>
    <SocialHeadMeta title="Boy looks over shoulder" description="Boy Looks over shoulder" image={thumbnail} url={perma} />
    <Art perma={perma} />
    <section className="article">
        <Document />
    </section>
</article>