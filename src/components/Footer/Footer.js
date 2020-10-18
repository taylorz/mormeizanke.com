import React from 'react';
import './Footer.scss'
import Grid from '@material-ui/core/Grid';
import Text from '../Text/Text';

const Footer = () => (
    <Grid container className="footer-container">
        <Grid item xs={12}><Text>&copy; 2020 Mormei Zanke</Text></Grid>
    </Grid>
)

export default Footer