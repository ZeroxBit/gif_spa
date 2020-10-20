import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import FormLogin from 'components/forms/FormLogin';
// import BackgroundLogin from "../assets/img/bg_login.png"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    imageBg: {
        width: "100%"
    },
    imageBgArea: {
        background: "#543475",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "@media only screen and (max-width: 599px)": {
            display: "none"
        }
    },
    imageBgXs: {
        display: "none",
        "@media only screen and (max-width: 599px)": {
            display: "block",
            position: "absolute",
            opacity: ".4"
        }
    },
    formArea: {
        background: "#7d728a2b",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        "@media only screen and (max-width: 599px)": {
            background: "#543475"
        }
    }

}));

const Login = (props) => {
    const classes = useStyles();


    return (
        <Grid container>
            <Grid item xs={12} sm={7} className={classes.imageBgArea}>
                {/* <img src={BackgroundLogin} alt="background" className={classes.imageBg} /> */}
            </Grid>
            <Grid item xs={12} sm={5} className={classes.formArea}>
                <Container maxWidth="md">
                    <Card className={classes.root}>
                        <CardHeader
                            title="Inicia sesion"
                        />
                        <CardContent>
                            <FormLogin />
                        </CardContent>
                    </Card>
                </Container>
            </Grid>
        </Grid>
    );
}

export default Login;