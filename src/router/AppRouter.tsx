import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from "components";
import { AboutPage, ContactPage, HomePage, NotfoundPage, ProductPage } from "pages";



const AppRouter = () => {

    return (
        <Router>

            <Navbar />

            <Switch>

                <Route exact path="/" component={HomePage} />

                <Route path="/product" component={ProductPage} />

                <Route path="/about" component={AboutPage} />

                <Route path="/contact" component={ContactPage} />

                <Route path="" component={NotfoundPage} />

            </Switch>

        </Router>
    )
}


export default AppRouter;