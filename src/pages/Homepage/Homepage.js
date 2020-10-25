import React from 'react';
import './Homepage.scss';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import PageContainer from '../../components/PageContainer/PageContainer';

const Homepage = () => (
  <PageContainer className="homepage">
    <Grid container className="section hero">
      <Grid item xs={12} className="hero-statement">
        Mormei writes <br/> draws records <br/> edits builds <br/> transmits<br/>stories.
      </Grid>
      {/* <Grid item xs={12} className="hero-cta">
        <Link to="/about">Learn about me</Link>
      </Grid> */}
    </Grid>
    {/* <Grid container className="section featured">
      <Grid item xs={12} sm={4}>
        Read about my poetry
      </Grid>
    </Grid> */}
  </PageContainer>
)

export default Homepage