import React from 'react';
import './PageContainer.scss'
import Grid from '@material-ui/core/Grid';
import Nav from '../Nav/Nav'

const PageContainer = ({ className, children }) => (
    <Grid container className={`page-container ${className}`}>
      <Grid item xs={12} sm={4}>
        <Nav/>
      </Grid>
      <Grid item xs={12} sm={8}>
        {children}
      </Grid>
    </Grid>
)

export default PageContainer;
