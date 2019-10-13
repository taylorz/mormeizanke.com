import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import MormeiHeadshot from '../../assets/images/mormei-headshot-transparent.png';

import PageContainer from '../../components/PageContainer/PageContainer';
import WorkExcerpt from '../../components/WorkExcerpt/WorkExcerpt';

class Homepage extends Component {
  render() {
    return (
      <>
        <PageContainer className="homepage-container">
          <Grid container className="homepage-hero">
            <Grid item md={6} className="hero-statement">
              <div className="statement-text">
                <p className="text-main"><span className="line-1">I’m a purposeful writer who </span><span className="line-2">frames words into stories to </span><span className="line-3">create value and impact.</span></p>
                <p className="text-cta">Learn more about me.</p>
              </div>
            </Grid>
            <Grid item md={6} className="hero-graphic">
              <div className="graphic-headshot">
                <img src={MormeiHeadshot}/>
              </div>
            </Grid>
          </Grid>
          <Grid container className="homepage-statement" justify="center" alignItems="center">
            <Grid item md={6} className="statement-text">
              <p>I have created content for organizations like UBC Communications and Marketing, Prism International, and Iridia Medical.</p>
            </Grid>
          </Grid>
          <WorkExcerpt/>
        </PageContainer>
      </>
    );
  }
}

export default Homepage;
