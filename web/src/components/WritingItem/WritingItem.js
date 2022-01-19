import React from 'react';
import BlockContent from '@sanity/block-content-to-react'

import './WritingItem.scss'
import Grid from '@material-ui/core/Grid';
import Text from '../Text/Text';

const WritingItem = ({ writing }) => {

  return (
    <a href={writing.pdfURL ? `${writing.pdfURL}` : writing.link} target="_blank">
        <Grid container className="writing-item">
            <Grid item xs={2} sm={2} md={1}><Text inline className="year">{writing.year}</Text></Grid>
            <Grid item xs={10} sm={10}>
                <BlockContent
                  blocks={writing.title}
                  className="title"
                  renderContainerOnSingleChild={true}
                />
                <Text className="publication">{writing.publication.title}</Text>
                {writing.description ?
                  <Grid container className="description">
                      <Grid item xs={12} sm={10} md={8}>
                        <BlockContent
                          blocks={writing.description}
                          className="description"
                          renderContainerOnSingleChild={true}
                        />
                      </Grid>
                  </Grid>
                : null }
            </Grid>
        </Grid>
    </a>
  )
}


export default WritingItem
