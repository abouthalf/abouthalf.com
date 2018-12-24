import background from "./background-texture.jpg";

export default () => {
    return <div className="background">
        <style jsx>{`
            .background {
                background-image: url(${background});
                background-repeat: no-repeat;
                background-position: right top;
                background-size: cover;
                width: 100vw;
                height: 100vh;
            }
        `}</style>
    </div>
}