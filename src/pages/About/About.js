import React from 'react';
import './About.scss'
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../components/PageContainer/PageContainer';
import Text from '../../components/Text/Text';

import MormeiHeadshot from '../../assets/images/mormei-image.png';

const About = () => (
  <PageContainer className="about">
    <Grid container spacing={4} alignItems="flex-end">
      <Grid item xs={12} className="image">
        <img src={MormeiHeadshot}/>
      </Grid>
      {/* <Grid item xs={10} sm={3} className="featured-quote">
      Every day is a new day. It is better to be lucky. But I would rather be exact. Then when luck comes you are ready.
      <p>Ernest Hemmingway</p>
      </Grid> */}
    </Grid>
    <Grid container>
      <Grid item xs={12} className="bio">
        <p>Mormei is a writer, artist and podcaster from Calgary, Alberta. She holds a Bachelor of Arts in English Literature and Creative Writing from UBC.</p>
        <p>Compelled by stories, she employs various methods and processes to bring them to life. In her essays, poetry and audio journalism she looks for the narrative and follows it to the end.</p>
        <p>Mormei acknowledges the traditional territories of the Blackfoot Confederacy, on which she lives and works, including the Tsuut’ina, the Îyâxe Nakoda Nations, The Metis Nation (region 3), and all people from the Treaty 7 region of southern Alberta.</p>
      </Grid>
    </Grid>
  </PageContainer>
)

export default About;
