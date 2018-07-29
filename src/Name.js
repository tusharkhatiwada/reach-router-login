import React, { Component } from "react";
import Welcome from "./Welcome";

export default class Name extends Component {
    // constructor(props) {
    //     super(props);

    //     this.input = React.createRef();
    // }
    // input = React.createRef();
    state = {
        text: ""
    };

    getValue = e => {
        e.preventDefault();
        console.log(this.refs.input);
    };
    render() {
        return (
            <div>
                <form action="">
                    <input
                        ref="input"
                        type="text"
                        value=""
                        onChange={e => this.setState({ text: e.target.value })}
                    />
                    <button onClick={this.getValue}>Get Value</button>
                </form>
            </div>
        );
    }
}
