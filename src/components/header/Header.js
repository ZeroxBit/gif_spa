import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    header: {
        "background": "black",
        "background-image": "url(https://developers.giphy.com/static/img/dev-logo-lg.7404c00322a8.gif)",
        "background-size": "auto",
        height: "70px",
        "background-repeat": "no-repeat",
        "background-position-y": "center",
        "background-position-x": "center",
        "width": "100%"
    },
  });


const Header = () => {
    const classes = useStyles();
    return (
        <section className={classes.header} >
        </section>
    )
}

export default Header
