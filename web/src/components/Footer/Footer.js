import React from 'react';
import './Footer.scss'
import Grid from '@material-ui/core/Grid';
import Text from '../Text/Text';

const Footer = () => (
    <Grid container className="footer-container">
        <Grid item xs={8}><Text>&copy; {(new Date().getFullYear())} Mormei Zanke</Text></Grid>
        {/* <Grid item xs={4}>Newsletter</Grid> */}
    </Grid>
)

export default Footer