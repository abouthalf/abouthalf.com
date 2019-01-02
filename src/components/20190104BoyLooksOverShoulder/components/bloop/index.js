import bloop from "./images/blue-bloop.png";

export default ({ deg, x = "0%", y = "0%", s=1 }) => {
    let transform = `rotate(${deg}deg) scale(${s})`;
    let opacity = .7;
    let style = {
        position: "absolute",
        top: y,
        left: x,
        width: "100px",
        height: "100px",
        margin: "-50px 0 0 -50px",
        zIndex: 9999,
        transform,
        opacity
    }
    return <img className="bloop noselect" src={bloop} alt="" style={style} onMouseDown={e => e.preventDefault()} />
 }