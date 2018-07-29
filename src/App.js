import React, { Component } from "react";
import { redirectTo } from "@reach/router";

import "./App.css";

// const Welcome = props => {
//     return <h3>{`Welcome ${props.name}`}</h3>;
// };

export default class Welcome extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         name: ""
    //     };
    //     this.changeName = this.changeName.bind(this);
    // }
    state = {
        counter: 0,
        previousCount: 0
    };
    componentDidMount() {
        const previousCount = localStorage.getItem("Counter");
        const token = localStorage.getItem("token");
        if (!token) {
            redirectTo("/login");
        }
        this.setState({
            previousCount
        });
    }
    startCounter = () => {
        this.count = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            });
        }, 1000);
    };
    stopCounter = () => {
        clearInterval(this.count);
        localStorage.setItem("Counter", this.state.counter);
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3>{`${this.state.counter}`}</h3>
                        <button onClick={this.startCounter}>Start</button>
                        <button onClick={this.stopCounter}>Stop</button>

                        <h2>{`Previous Count: ${this.state.previousCount}`}</h2>
                    </div>
                </div>
            </div>
        );
    }
}
