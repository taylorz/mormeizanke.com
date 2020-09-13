import React from 'react';
import './Nav.scss'
import Grid from '@material-ui/core/Grid';

const Nav = () => (
    <Grid container className="nav-container">
        <Grid item xs={3}>Mormei Zanke</Grid>
        <Grid item xs={9}>
            About Me, Poetry, Essays, Podcast, Reviews, Drawings
        </Grid>
    </Grid>
)

export default Nav