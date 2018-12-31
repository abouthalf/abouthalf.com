import egg from "./images/egg.png";
import middle from "./images/egg-middle.png";
import top from "./images/egg-top.png";

const translate = (x, w, m) => {
    let p =  ((w / 2) - x) * m;
    return `translateX(${p}px)`;
}

export const Egg = ({ x, w }) => {
    let style = {
        transform: translate(x, w, .050)
    };
    return <div className="egg" style={style}>
        <style jsx>{`
            .egg {
                position: absolute;
                z-index: 400;
                left: 0;
                top: 0;

                background-image: url(${egg});
                background-repeat: no-repeat;
                
                background-size: contain;
                background-blend-mode: multiply;
                mix-blend-mode: multiply;
            }
            @media screen and (orientation: landscape) {
                .egg {
                    height: 100vh;
                    width: 60vw;
                }
            }
            @media screen and (orientation: portrait) {
                .egg {

                    height: 100vh;
                    width: 100vw;
                }
            }
        `}</style>
    </div>
}

export const EggMiddle = ({ x, w }) => {
    let style = {
        transform: translate(x, w, .075)
    };
    return <div className="egg-middle"  style={style}>
        <style jsx>{`
            .egg-middle {
                position: absolute;
                z-index: 401;
                left: 0;
                top: 0;
                background-image: url(${middle});
                background-repeat: no-repeat;
                background-size: contain;
            }
            @media screen and (orientation: landscape) {
                .egg-middle {    
                    height: 100vh;
                    width: 60vw;
                }
            }
            @media screen and (orientation: portrait) {
                .egg-middle {    
                    height: 100vh;
                    width: 100vw;
                }
            }
        `}</style>
    </div>
}

export const EggTop = ({ x, w }) => {
    let style = {
        transform: translate(x, w, .1)
    };
    return <div className="egg-top" style={style}>
        <style jsx>{`
            .egg-top {
                position: absolute;
                z-index: 402;
                left: 0;
                top: 0;
                background-image: url(${top});
                background-repeat: no-repeat;
                background-size: contain;
                background-blend-mode: screen;
            }
            @media screen and (orientation: landscape) {
                .egg-top {    
                    height: 100vh;
                    width: 60vw;
                }
            }
            @media screen and (orientation: portrait) {
                .egg-top {    
                    height: 100vh;
                    width: 100vw;
                }
            }
        `}</style>
    </div>
}
