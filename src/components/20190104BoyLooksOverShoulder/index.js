import React, { Component } from "react";

import Background from "./components/background.js";
import Portrait, { Masked } from "./components/portrait";
import { Egg, EggMiddle, EggTop } from "./components/egg";
import PermaLink from "../PermaLink";
import Bloop from "./components/bloop";

import { backgroundColor } from "../../lib/colors";

const touchStorage = "boy-looks-over-shoulder-touches";

export default class Art extends Component {
    state = {
        x: 0,
        w: 1920,
        h: 1080,
        touches: [],
    };

    componentDidMount() {
        if (window) {
            window.addEventListener(
                "deviceorientation",
                this.handleDeviceMove,
                true,
            );
            window.addEventListener("resize", () => {
                this.getDimensions();
            })
        }
        this.getDimensions();
        this.getTouches();
    }

    handleDeviceMove = e => {
        let { gamma, alpha } = e;
        let tilt = gamma || alpha;
        let x = tilt ? this.state.w * (tilt / 100) : this.state.w / 2;
        this.setState({ x });
    };

    handleMouseMove = e => {
        const { clientX } = e;
        this.setState({ x: clientX });
    };

    handleTouchStart = e => {
        let touches = Array.from(e.touches);
        touches.forEach(touch => {
            const { clientX, clientY } = touch;
            this.setTouch(clientX, clientY);
        });
    };

    handleMosueDown = e => {
        const { clientX, clientY } = e;
        this.setTouch(clientX, clientY);
    };

    getRandomDeg() {
        return Math.floor(Math.random() * 360) + 1;
    }

    /**
     * Normalize client position to percentage
     * @param {Number} clientX 
     * @param {Number} clientY 
     */
    setTouch(clientX, clientY) {
        const { w, h, touches } = this.state;
        let x = Math.round((clientX / w) * 100);
        let y = Math.round((clientY / h) * 100);
        let d = this.getRandomDeg();
        touches.push({ x, y, d});
        this.setState({ touches });
        this.storeTouches(touches);
    }

    storeTouches(touches) {
        if (window && window.localStorage) {
            window.localStorage.setItem(touchStorage, JSON.stringify(touches));
        }
    }

    getTouches() {
        if (window && window.localStorage) {
            let touches = JSON.parse(window.localStorage.getItem(touchStorage)) || [];
            this.setState({ touches });
        }
    }

    getDimensions() {
        if (window && window.innerWidth) {
            this.setState({ w: window.innerWidth, h: window.innerHeight });
        }
    }

    renderTouches(touches) {
        return touches.map((touch, i) => {
            const {x, y, d } = touch;
            return <Bloop key={i} deg={d} x={`${x}%`} y={`${y}%`} />
        })
    }

    render() {
        const { x, w, touches } = this.state;
        const { perma } = this.props;
        return (
            <section
                ref={el => (this.scene = el)}
                className="boy-looks-over-shoulder"
                onMouseMove={this.handleMouseMove}
                onTouchStart={this.handleTouchStart}
                onMouseDown={this.handleMosueDown}>
                <style jsx>{`
                    .boy-looks-over-shoulder {
                        position: relative;
                        width: 100vw;
                        height: 100vh;
                        background: ${backgroundColor};
                        overflow-x: hidden;
                    }
                `}</style>
                {this.renderTouches(touches)}
                <EggTop x={x} w={w} />
                <EggMiddle x={x} w={w} />
                <Egg x={x} w={w} />
                <Portrait />
                <Masked position="left" />
                <Masked position="right" />
                <Background />
                <PermaLink href={perma} />
            </section>
        );
    }
}
