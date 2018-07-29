import React, { Component } from "react";
import { navigate, Link } from "@reach/router";

export default class Main extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <a className="navbar-brand" href="#">
                                Demo App
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="app">
                                            App
                                        </Link>
                                    </li>
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="name">
                                            Name
                                        </Link>
                                    </li>
                                </ul>
                                <button
                                    className="btn btn-outline-light"
                                    onClick={() => navigate("/login")}
                                >
                                    Logout
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">{this.props.children}</div>
                </div>
            </div>
        );
    }
}
