import portrait from "./images/boy-looks-over-shoulder-portrait.png";
import {backgroundColor} from "../../../../lib/colors";

const landscapeHeight = "95vh";
const landscapeWidth = "55vw";

const portraitHeight = "60vh"
const portraitWidth = "100vw"

export default () => {
    return <div className="portrait">
        <style jsx>{`
            .portrait {
                position: absolute;
                right: 0px;
                bottom: 0px;
                z-index: 300;
                background-image: url(${portrait});
                background-size: contain;
                background-position: right bottom;
                background-repeat: no-repeat;
            }
            @media screen and (orientation: landscape) {
                .portrait {    
                    height: ${landscapeHeight};
                    width: ${landscapeWidth}; 
                }    
            }
            @media screen and (orientation: portrait) {
                .portrait {
                    width: ${portraitWidth};
                    height: ${portraitHeight};
                }
            }
        `}</style>
    </div>
}

export const Masked = ({ position }) => {
    return <div className={`masked ${position}`}>
        <style jsx>{`
            .masked {
                position: absolute;
                z-index: 100;
                bottom: 0;
                
                background: ${backgroundColor};
                background-image: url(${portrait});
                background-size: contain;
                background-position: right bottom;
                background-repeat: no-repeat;
                background-blend-mode: color-burn;

                mask: url(${portrait});
                mask-size: contain;
                mask-position: right bottom;
                mask-repeat: no-repeat;
            }
            @media screen and (orientation: landscape) {
                .masked {    
                    height: ${landscapeHeight};
                    width: ${landscapeWidth}; 
                }
                .masked.left {
                    right: 50vw;
                }
                .masked.right {
                    right: 25vw;
                }
            }
            @media screen and (orientation: portrait) {
                .masked {
                    width: ${portraitWidth};
                    height: ${portraitHeight};
                }
                .masked.left {
                    right: 30vw;
                }
                .masked.right {
                    right: -20vw;
                    opacity: .5;
                }
            }
            `}</style>
    </div>
}