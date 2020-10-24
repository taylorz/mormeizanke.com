import React from 'react';
import './Podcasts.scss'
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../components/PageContainer/PageContainer';
import Text from '../../components/Text/Text';

const Podcasts = () => (
  <PageContainer className="podcasts">
      <Grid container>
        <Grid item xs={3} sm={1}>2020</Grid>
        <Grid item xs={9} sm={11}>
          <Text p>Creativity Calls</Text>
          <Text p>Join, Mormei, as she calls up her friends who are artists, poets, musicians, cartoonists, architects, and anthropologists—all finding meaning in their private corner of the world.</Text> 
          <Text p>Together they investigate creative questions, decisively or uncertainly— but always catching up at the end of each call.</Text> 
          <Text>Episode 1: Social Media...Monster?</Text>
          <Text>Episode 2: Preserving Moments</Text>
          <Text>Episode 3: TBD</Text>
          <Text>Episode 4: TBD</Text>
          <Text>Episode 5: TBD</Text>
          <Text p>Episode 6: TBD</Text>
          <Text><a href="https://www.instagram.com/creativitycallspod/" target="_blank">@creativitycallspod</a></Text>
        </Grid>
      </Grid>
  </PageContainer>
)

export default Podcasts;
