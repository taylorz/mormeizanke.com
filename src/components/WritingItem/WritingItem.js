import React from 'react';
import './WritingItem.scss'
import Grid from '@material-ui/core/Grid';
import Text from '../Text/Text';

const WritingItem = ({ writing }) => (
    <a href={writing.url} target="_blank">
        <Grid container className="writing-item">
            <Grid item xs={3} sm={1}><Text inline>{writing.year}</Text></Grid>
            <Grid item xs={9} sm={11}>
                <Text>{writing.title} {writing.isFavorite && <span className="favorite">*Favorite</span>}</Text>
                <Text className="publication">{writing.publication}</Text>
            </Grid>
        </Grid>
    </a>
)

export default WritingItem