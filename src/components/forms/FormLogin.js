import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from "react-router-dom";

// formulario
import { Formik, Form } from "formik";
import { LoginShema, INITIAL_VALUES_LOGIN } from './shemas/shemaLogin';
import { getRandomGif } from '../../services/gifServices';
// import { loginServices } from 'services/userServices';
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#543475',
    }
}));

const FormLogin = (props) => {
    const classes = useStyles();
    const history = useHistory();

    // const ctx = useContext(RootContext);
    const [isLoading, setIsLoading] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false)

    useEffect(() => {
        // getRandomGif();
        fetch("https://api.giphy.com/v1/gifs/search?api_key=8qp5AGfT6fOKxqoH7bVFcGjsaEnmKEyk&q=&limit=25&offset=0&rating=g&lang=en")
            .then(r => r.json())
            .then(r => console.log("r", r))
            .catch(err => console.log("error", err))
    }, [])

    const handleLogin = async (userLogin) => {
        // setIsLoading(true);
        // const login = await loginServices(userLogin);

        // setIsLoading(false);
        // if (login.status > 299 || login.status < 200) {
        //     setErrorLogin(true);
        //     return;
        // }
        // // ctx.setToken(getToken());
        // history.replace("/open/list");
    }


    return (
        <>
            <Backdrop className={classes.backdrop} open={isLoading} >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Formik
                validationSchema={LoginShema}
                initialValues={INITIAL_VALUES_LOGIN}
                onSubmit={handleLogin}
                render={({
                    handleChange,
                    values,
                    errors,
                    touched
                }) => {
                    return (
                        <Form>
                            <TextField
                                fullWidth
                                error={errors.email && touched.email}
                                label="Usuario"
                                type="email"
                                placeholder="Ingrese su usuario"
                                variant="outlined"
                                helperText={errors.email}
                                name="email"
                                onChange={handleChange}
                                value={values.email}
                                style={{ paddingBottom: "2em" }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <TextField
                                fullWidth
                                error={errors.password && touched.password}
                                label="Contraseña"
                                type="password"
                                placeholder="Ingrese su contraseña"
                                variant="outlined"
                                helperText={errors.password}
                                name="password"
                                onChange={handleChange}
                                value={values.password}
                                style={{ paddingBottom: "2em" }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LockIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />

                            <Collapse in={errorLogin} style={{ paddingBottom: "2em" }}>
                                <Alert
                                    severity="error"
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setErrorLogin(false);
                                            }}
                                        >
                                            <CloseIcon fontSize="inherit" />
                                        </IconButton>
                                    }
                                >
                                    Usuario o contraseña incorrectas :(
                                </Alert>
                            </Collapse>

                            <Button
                                fullWidth
                                size="large"
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Login
                            </Button>

                        </Form>
                    )
                }}
            />
        </>
    )
}

export default FormLogin
