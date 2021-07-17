import React from 'react';
import './WritingItem.scss'
import Grid from '@material-ui/core/Grid';
import Text from '../Text/Text';

const WritingItem = ({ writing }) => (
    <a href={writing.url} target="_blank">
        <Grid container className="writing-item">
            <Grid item xs={2} sm={2}><Text inline className="year">{writing.year}</Text></Grid>
            <Grid item xs={10} sm={10}>
                <Text>{writing.title}</Text>
                <Text p={writing.excerpt} className="publication">{writing.publication}</Text>
                {writing.excerpt ?
                  <Grid container className="excerpt">
                      <Grid item xs={12} sm={6}>
                          <Text>{writing.excerpt}</Text>
                      </Grid>
                  </Grid>
                : null }
                {writing.statement ?
                  <Grid container className="statement">
                      <Grid item xs={12} sm={8}>
                          <Text>{writing.statement}</Text>
                      </Grid>
                  </Grid>
                : null}
            </Grid>
        </Grid>
    </a>
)

export default WritingItem
