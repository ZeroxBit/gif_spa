import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import Header from "components/header/Header";
import PrivateRoute from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import { connect } from "react-redux";

import Login from "views/Login";
import ListGif from "views/ListGif";

const AppRouter = (props) => {
    const handleShowHeader = () => {
        if (props.user.token) {
            return <Header />;
        }

        return null;
    };

    return (
        <Router basename="/gif_spa">
            {handleShowHeader()}
            <Switch>
                <PublicRouter exact path={"/login"} component={Login} />
                <PrivateRoute exact path={"/"} component={ListGif} />

                <Redirect to="/login" />
            </Switch>
        </Router>
    );
};

const mapStateToProps = ({ userReducer }) => {
    return {
        user: userReducer,
    };
};

export default connect(mapStateToProps)(AppRouter);
