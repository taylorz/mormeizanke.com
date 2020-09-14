import React from 'react';
import './AppWrapper.scss'
import Grid from '@material-ui/core/Grid';
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

const AppWrapper = ({ children }) => (
    <Grid container className="app-wrapper">
      <Grid item xs={12} className="wrapper-area">
        {children}
      </Grid>
    </Grid>
)

export default AppWrapper;
