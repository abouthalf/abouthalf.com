import SocialHeadMeta from "../components/SocialHeadMeta";
import MegaGram from "../components/MegaGram";

import MegaGram20191114 from "../public/images/2019/11/14/index";
import MegaGram20191110 from "../public/images/2019/11/10/index";
import MegaGram20190104 from "../public/images/2019/01/04/index";

export default () => (
    <article>
        <SocialHeadMeta />
        <MegaGram
            index={MegaGram20191114}
            title="Trains, trees, windswept"
            path="/images/2019/11/14/"
            date="November 14 2019"
        />
        <MegaGram
            index={MegaGram20191110}
            title="Eggs over Brighton"
            path="/images/2019/11/10/"
            date="November 10 2019"
        />
        <MegaGram
            index={MegaGram20190104}
            title="Boy looking over shoulder"
            path="/images/2019/01/04/"
            date="January 4 2019"
        />
    </article>
);
