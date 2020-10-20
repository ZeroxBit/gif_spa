import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { getToken } from 'services/sessionStorage';


const PublicRouter = ({ component: Component, ...rest }) => {
    const token = getToken();
    
    return (
        <Route
            {...rest}
            render={(props) => (
                !token
                    ? <Component {...props} />
                    : <Redirect to='/' />
            )}
        />
    );
};

export default PublicRouter;