import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from 'services/sessionStorage';


const PrivateRoute = ({ component: Component, ...rest }) => {
    const token = getToken();
    
    return (
        <Route
            {...rest}
            render={(props) => (
                token
                    ? <Component {...props} {...rest} />
                    : <Redirect to='/login' />
            )}
        />
    );
};

export default PrivateRoute;