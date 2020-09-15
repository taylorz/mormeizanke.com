import React from 'react';
import './AppWrapper.scss'
import Grid from '@material-ui/core/Grid';

const AppWrapper = ({ children }) => (
    <Grid container className="app-wrapper">
      <Grid item xs={12} className="wrapper-area">
        {children}
      </Grid>
    </Grid>
)

export default AppWrapper;
