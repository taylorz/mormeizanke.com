import React from 'react';
import './About.scss'
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../components/PageContainer/PageContainer';
import Text from '../../components/Text/Text';

import MormeiHeadshot from '../../assets/images/mormei-headshot.png';

const About = () => (
  <PageContainer className="about">
    <Grid container>
      <Grid item xs={12} className="image">
        <img src={MormeiHeadshot}/>
      </Grid>
    </Grid>
    <Grid container className="copy">
      <Grid item xs={12} sm={8} className="bio">
        <Text p>Mormei Zanke is a journalist and poet from Calgary, Alberta. She double majored in English literature and creative writing at the University of British Columbia. After earning her B.A., she relocated to Hyōgo Prefecture, Japan, to teach English at a rural junior high school for one year. During the pandemic lockdown she produced an independent podcast, <em>Creativity Calls</em>, in which she interviewed artists over the phone to determine if isolation impacted their work.</Text>
        <Text p>She is currently pursuing her MFA in Literary Reportage at NYU's Arthur L. Carter Journalism Institute. Her poems and writing have appeared in Hart House Review, Humana Obscura, Juniper, Kyoto Journal, The Maynard, New Forum, and NōD Magazine.</Text>
      </Grid>
      <Grid item xs={2} sm={0} className="spacer"/>
      {/* <Grid item xs={10} sm={4} className="acknowledgement">
        <Text>Mormei acknowledges the traditional territories of the Blackfoot Confederacy, on which she lives and works, including the Tsuut’ina, the Îyâxe Nakoda Nations, The Metis Nation (region 3), and all people from the Treaty 7 region of southern Alberta.</Text>
      </Grid> */}
    </Grid>
  </PageContainer>
)

export default About;
