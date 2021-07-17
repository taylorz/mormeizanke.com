import React from 'react';
import './Homepage.scss';
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../components/PageContainer/PageContainer';

const Homepage = () => (
  <PageContainer className="homepage">
    <Grid container className="section hero">
      <Grid item xs={12} className="hero-statement">
        A bright and<br />
        steady fixture<br />
        against the blue<br />
        undulating sea.
      </Grid>
      <Grid item xs={10} sm={12} className="hero-reference">
        &mdash;excerpt from "The Polka Dot Pumpkin of Naoshima Island"
      </Grid>
    </Grid>
  </PageContainer>
)

export default Homepage
