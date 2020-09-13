import React from 'react';
import './PageContainer.scss'
import Grid from '@material-ui/core/Grid';

const PageContainer = ({ className, children }) => (
    <Grid container className={`page-container ${className}`}>
      {children}
    </Grid>
)

export default PageContainer;
