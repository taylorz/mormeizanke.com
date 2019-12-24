import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import MormeiHeadshot from '../../assets/images/mormei-test.png';

import PageContainer from '../../components/PageContainer/PageContainer';
import WorkExcerpt from '../../components/WorkExcerpt/WorkExcerpt';
import Header from '../../components/Header/Header';

import EXCERPTS from '../../constants/excerpts';

class Homepage extends Component {
  render() {
    return (
      <>
        <PageContainer className="homepage-container">
          <Header/>
          <Grid container className="homepage-hero">
            <Grid item md={6} className="hero-statement">
              <div className="statement-text">
                <p className="text-main">Mormei is a Canadian writer of poetry and essays.</p>
              </div>
            </Grid>
            <Grid item md={6} className="hero-graphic">
              <div className="graphic-headshot">
                <img src={MormeiHeadshot}/>
              </div>
            </Grid>
          </Grid>
          <Grid container className="homepage-statement" justify="center" alignItems="center">
            <Grid item md={10} className="statement-text">
            <WorkExcerpt
              excerpt="Chances are, you know someone who has immigrated to Canada from another part of the world. Whether this person is your grandmother, your father or your friend — you’ve likely heard an immigrant’s tale of persistence and incredible risk, one in which they left everything behind in the hopes of finding a haven from conflict or a place for their descendants to thrive."
            />
            </Grid>
          </Grid>
          <Grid container className="homepage-writings">
            <Grid item xs={12} className="writings-item">
              <h1>The Sopron Story</h1>
            </Grid>
          </Grid>
          {/*
          { EXCERPTS.map((excerpt) =>
              <WorkExcerpt
                title={excerpt.title}
                publication={excerpt.publication}
                datePublished={excerpt.datePublished}
                excerpt={excerpt.excerpt}
              />
            )
          }
          */}
        </PageContainer>
      </>
    );
  }
}

export default Homepage;
