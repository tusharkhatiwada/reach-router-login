import React, { Component } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

export default class Login extends Component {
    state = {
        username: "",
        password: "",
        error: false,
        errorMessage: "",
        remember: false
    };
    handleInput = event => {
        console.log(event.target.type);
        const { name, value, type } = event.target;

        if (type === "checkbox") {
            this.setState({
                remember: !this.state.remember
            });
        } else {
            this.setState({
                [name]: value,
                error: false
            });
        }
    };
    handleLogin = e => {
        e.preventDefault();
        const { username, password, remember } = this.state;
        const url = "http://192.168.1.122:8000/api/v1/account/login";

        axios({
            method: "POST",
            url,
            data: {
                username,
                password
            }
        })
            .then(response => {
                const res = response.data;
                this.setState({
                    error: false,
                    errorMessage: ""
                });
                if (remember) {
                    localStorage.setItem("token", res.token);
                } else {
                    sessionStorage.setItem("token", res.token);
                }
                console.log("token: ", res.token);
            })
            .catch(err => {
                this.setState({
                    error: true,
                    errorMessage: "Something went wrong. Please try again."
                });
                console.log("Error logging: ", err);
            });
    };
    render() {
        const { username, password, errorMessage, error } = this.state;
        return (
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ width: "20rem", marginTop: "10rem" }}>
                            <h5 className="card-header">Login</h5>
                            <div className="card-body">
                                <form action="" onSubmit={this.handleLogin}>
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="username"
                                            value={username}
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            name="password"
                                            value={password}
                                            onChange={this.handleInput}
                                        />
                                    </div>
                                    <div className="form-group form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            onChange={this.handleInput}
                                        />
                                        <label htmlFor="" className="form-check-label">
                                            Remember Me
                                        </label>
                                    </div>
                                    {error && (
                                        <div className="alert alert-danger" role="alert">
                                            <p>{errorMessage}</p>
                                        </div>
                                    )}
                                    <button className="btn btn-primary">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
