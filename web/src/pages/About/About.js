import React, { useEffect, useState  } from 'react';
import sanityClient from '../../client'
import BlockContent from '@sanity/block-content-to-react'

import './About.scss'
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../components/PageContainer/PageContainer';

const About = () => {
  const [aboutContent, setAboutContent] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "aboutPage"]
          {
            aboutText
          }
        `
      )
      .then((data) => setAboutContent(data))
      .catch(console.error);
  }, []);

  return (
    <PageContainer className="about">
      <Grid container className="copy">
        <Grid item xs={12} sm={8} className="bio">
          {aboutContent ?
            <BlockContent
              blocks={aboutContent[0].aboutText}
            />
          : null}
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default About;
