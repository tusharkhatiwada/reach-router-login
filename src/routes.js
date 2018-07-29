import React from "react";
import { Router } from "@reach/router";

import Login from "./login";
import App from "./App";
import Main from "./main";
import Name from "./Name";

const Route = () => {
    return (
        <Router>
            <Login path="login" />
            <Main path="/">
                <App path="app" />
                <Name path="name" />
            </Main>
        </Router>
    );
};

export default Route;
