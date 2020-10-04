import React from 'react';
import './Homepage.scss';
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../components/PageContainer/PageContainer';

const Homepage = () => (
  <PageContainer className="homepage">
    <Grid container className="section hero">
      <Grid item>
        Mormei writes <br/> draws records <br/> edits builds <br/> transmits<br/>stories.
      </Grid>
    </Grid>
    {/* <Grid container className="section news">
      <Grid item>Featured</Grid>
    </Grid>
    <Grid container className="section news">
      <Grid item>News</Grid>
    </Grid> */}
  </PageContainer>
)

export default Homepage