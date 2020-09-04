import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Routes} from "../Routes/Routes";

import {AppProvider} from "../Contexts/AppContext";

export const App = () => {
    return (
        <AppProvider>
            <Router>
                <Routes />
            </Router>
        </AppProvider>
    );
};
