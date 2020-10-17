import React from 'react';
import './PageContainer.scss'
import Grid from '@material-ui/core/Grid';
import Footer from '../Footer/Footer'

const PageContainer = ({ className, children }) => (
    <Grid container className={`page-container ${className}`}>
      <Grid item xs={12} className="content-container">
        {children}
      </Grid>
      <Footer/>
    </Grid>
)

export default PageContainer;
