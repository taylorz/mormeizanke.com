import React from 'react';
import './Footer.scss'
import Grid from '@material-ui/core/Grid';

const Footer = () => (
    <Grid container className="footer-container">
        <Grid item xs={4}/>
        <Grid item xs={4}>&copy; 2020 Mormei Zanke</Grid>
        <Grid item xs={4}>Join my mailing list</Grid>
    </Grid>
)

export default Footer