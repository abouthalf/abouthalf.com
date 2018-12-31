import React, {Component} from "react";

import Background from "./components/background.js";
import Portrait, { Masked } from "./components/portrait";
import { Egg, EggMiddle, EggTop,  } from "./components/egg";

import { backgroundColor } from "../../lib/colors";

export default class Art extends Component {
    state = {
        x: 0,
        w: 1920
    }

    componentDidMount() {
        if (window && window.innerWidth) {
            this.setState({w: window.innerWidth});
        }
        window.addEventListener("deviceorientation", this.handleDeviceMove, true);
    }

    componentWillUnmount() {
    }

    handleDeviceMove(e) {
        this.setState({tilt: e.gamma});
    }

    handleMouseMove = (e) => {
        const {clientX} = e;
        this.setState({x: clientX});
    }

    render() {
        const {x, w} = this.state;
        return (
            <section ref={el => this.scene = el}className="boy-looks-over-shoulder" onMouseMove={this.handleMouseMove}>
                <style jsx>{`
                    .boy-looks-over-shoulder {
                        position: relative;
                        width: 100vw;
                        height: 100vh;
                        background: ${backgroundColor};
                        overflow-x: hidden;
                    }
                `}</style>
                <EggTop x={x} w={w} />
                <EggMiddle x={x} w={w} />
                <Egg x={x} w={w} />
                <Portrait />
                <Masked position="left" />
                <Masked position="right" />
                <Background />
                <p>{JSON.stringify(this.state.tilt)}</p>
            </section>
        )
    }
}
