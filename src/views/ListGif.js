import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CardGif from 'components/card/CardGif';
import { Grid } from '@material-ui/core';
import Footer from 'components/footer/Footer';
import { connect } from "react-redux";
import * as gifAction from "redux/actions/gifActions";

const useStyles = makeStyles({
    gridContainer : {
        marginTop: "4em"
    },
    container : {
        paddingBottom : "1em"
    }
});

const ListGif = (props) => {
    const classes = useStyles();

    useEffect(() => {
        props.moreGifAction(props.state.offset);
    }, []);

    return !props.state.list ? null : (
        <Container className={classes.container} >
            <Grid container spacing={2} className={classes.gridContainer}>
                {
                    props.state.list.map((gif, index) => (
                        <Grid item xs={6} sm={4} md={3} lg={3} key={`gif-${index}`} >
                            <CardGif gif={gif} />
                        </Grid>
                    ))
                }
            </Grid>
            <Footer />
        </Container>
    )
}

const mapStateToProps = ({gifReducer}) => {
    return {
        state: gifReducer
    }
};


const mapDispatchToProps = {
    ...gifAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ListGif);
