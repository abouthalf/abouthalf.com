import Link from "next/link";

const d = "35px";

export default ({ href }) => {
    return <div className="permalink">
        <style jsx>{`
            .permalink {
                position: absolute;
                bottom: 1rem;
                right: 1rem;
                z-index: 999;
                height: ${d};
                width: ${d};
                border-radius: ${d};
                background: white;
            }

            a {
                font-family: sans-serif;
                text-decoration: none;
                line-height: ${d};
                display: block;
                text-align: center;
            }
        `}</style>
        <Link href={href}><a>➚</a></Link>
    </div>
}