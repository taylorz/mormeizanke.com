import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Homepage.scss';
import MormeiHeadshot from '../../assets/images/mormei-test.png';

import PageContainer from '../../components/PageContainer/PageContainer';
import WorkExcerpt from '../../components/WorkExcerpt/WorkExcerpt';
import Header from '../../components/Header/Header';

import { MdArrowForward } from 'react-icons/md';

import EXCERPTS from '../../constants/excerpts';

class Homepage extends Component {
  render() {
    return (
      <>
        <PageContainer className="homepage-container">
          <Header/>
          <Grid container className="homepage-hero" id="homepage-top-section">
            <Grid item md={6} className="hero-statement">
              <div className="statement-text">
                <p className="text-main">Mormei is a Canadian <br/>poet and essayist.</p>
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
          <div className="homepage-sectionTitle" id="writing-section">
            WRITING
          </div>
          { EXCERPTS.map((excerpt) =>
            <Grid container className="homepage-writings">
              <Grid item xs={12} className="writings-item">
                <Grid container className="item-container">
                  <Grid item xs={12} className="item-title">
                  {excerpt.title}
                  </Grid>
                  <Grid item xs={4} className="item-publication">
                  {excerpt.publication}
                  </Grid>
                  <Grid item xs={4} className="item-publish-date">
                  {excerpt.datePublished}
                  </Grid>
                  <Grid item xs={3} className="item-publish-date">
                    Poetry
                  </Grid>
                  <Grid item xs={1} className="item-link-icon">
                    <MdArrowForward/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            )
          }
          {/*
          <WorkExcerpt
            title={excerpt.title}
            publication={excerpt.publication}
            datePublished={excerpt.datePublished}
            excerpt={excerpt.excerpt}
          />*/}
        </PageContainer>
      </>
    );
  }
}

export default Homepage;
