import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
    cardContent : {
        height: "50px"
    },
    cardFotter: {
        display: "flex",
        alignItems: "center"
    }
});

const CardGif = ({gif, heightImage}) => {
    const classes = useStyles();

    return !gif ? null : (
        <Card>
            <CardMedia
                component="img"
                alt={gif.title}
                height={heightImage}
                image={gif.images.original.url}
                title={gif.title}
            />
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom component="p">
                    {gif.title}
                </Typography>
            </CardContent>

            <CardActions >
                <div className={classes.cardFotter}>
                    <PersonIcon />
                    <Typography component="span">
                        {gif.username}
                    </Typography>
                </div>
            </CardActions>
        </Card>
    )
}

CardGif.defaultProps = {
    heightImage: "140"
}

CardGif.propTypes = {
    gif: PropTypes.array.isRequired
}

export default CardGif
