import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import * as gifAction from "redux/actions/gifActions";

const useStyles = makeStyles({
    container : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
});

const Footer = (props) => {
    const classes = useStyles();


    const handleMoreData = () => {
        const {offset} = props.state;
        props.moreGifAction(offset);
    }

    return (
        <div className={classes.container}>
            <Button
                size="large"
                variant="contained"
                color="primary"
                type="buttom"
                onClick={handleMoreData}
            >
                Load More
            </Button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state
    }
};

const mapDispatchToProps = {
    ...gifAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
