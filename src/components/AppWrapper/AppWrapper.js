import React from 'react';
import Div100vh from 'react-div-100vh';
import './AppWrapper.scss'
import Grid from '@material-ui/core/Grid';

const AppWrapper = ({ children, className }) => (
  <Div100vh>
    <Grid container className={`app-wrapper ${className && className}`}>
      <Grid item xs={12} className="wrapper-area">
        {children}
      </Grid>
    </Grid>
  </Div100vh>
)

export default AppWrapper;
