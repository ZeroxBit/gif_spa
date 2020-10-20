import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { getTrendingServices } from 'services/gifServices';
import CardGif from 'components/card/CardGif';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
    //   maxWidth: 345,
    },
    container : {
        marginTop: "4em"
    }
});

const ListGifs = () => {
    const classes = useStyles();

    const [gifList, setGifList] = useState(null);

    useEffect(() => {
        handleGetRandomGif();
    }, [])

    const handleGetRandomGif = async () => {
        const {data} = await getTrendingServices()
        
        setGifList(data.data)
    }

    return !gifList ? null : (
        <Container>
            <Grid container spacing={2} className={classes.container}>
                {
                    gifList.map(gif => (
                        <Grid item xs={6} sm={4} md="3" lg="3" >
                            <CardGif gif={gif} />
                        </Grid>
                    ))
                }

            </Grid>
        </Container>
    )
}

export default ListGifs
