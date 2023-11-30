import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Footer, Navbar } from "components";
import { AboutPage, ContactPage, HomePage, NotfoundPage, BooksPage } from "pages";



const AppRouter = () => {

    return (
        <Router>

            <Navbar />

            <Switch>

                <Route exact path="/" component={HomePage} />

                <Route path="/product" component={BooksPage} />

                <Route path="/about" component={AboutPage} />

                <Route path="/contact" component={ContactPage} />

                <Route path="" component={NotfoundPage} />

            </Switch>

            <Footer />
        </Router>
    )
}


export default AppRouter;