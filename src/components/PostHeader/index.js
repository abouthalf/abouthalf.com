import Link from "next/link";

export default ({ title, description, postUrl, date }) => {
    return (
        <header>
            <style jsx>{`
                :global(*:hover) > header {
                    opacity: 1;
                }
                header {
                    position: absolute;
                    top: 1rem;
                    left: 1rem;
                    color: white;
                    z-index: 1;
                    opacity: 0;
                    transition: all 500ms;
                }
                header a,
                header span {
                    background-color: rgba(0, 0, 0, 0.6);
                    padding: 0.25rem;
                    color: inherit;
                    text-decoration: none;
                }
                header h1 {
                    font-size: 1.5rem;
                    text-shadow: 0px 0px 3px #000;
                }
                header h2 {
                    font-size: 1rem;

                    text-shadow: 0px 0px 2px #000;
                }
            `}</style>
            <h1>
                <Link href={postUrl}>
                    <a>{title}</a>
                </Link>
            </h1>
            {description && (
                <h2>
                    <span>{description}</span>
                </h2>
            )}
            <h2>
                <span>{date}</span>
            </h2>
        </header>
    );
};
