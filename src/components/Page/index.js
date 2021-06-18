const Page = ({ children }) => (<article className="page">
    <style jsx>{`
        .page {
            max-width: 2000px;
            margin: 0 auto;
            background-color: #333;
        }
    `}</style>
    {children}
</article>)

export default Page;