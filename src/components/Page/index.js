const Page = ({ children }) => (<article className="page">
    <style jsx>{`
        .page {
            max-width: 2000px;
            margin: 0 auto;
            
        }
    `}</style>
    <style jsx global>
        {`
        html, body {
            background-color: #333;
        }
        `}
    </style>
    {children}
</article>)

export default Page;