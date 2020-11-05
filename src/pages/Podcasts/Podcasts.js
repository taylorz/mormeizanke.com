import React from 'react';
import './Podcasts.scss'
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../components/PageContainer/PageContainer';
import Text from '../../components/Text/Text';
import creativityCalls from '../../assets/images/creativity-calls.JPG';

const Podcasts = () => (
  <PageContainer className="podcasts">
      <Grid container>
        <Grid item xs={2} sm={1}>2020</Grid>
        <Grid item xs={10} sm={11}>
          <Text p>Creativity Calls</Text>
          <Grid container>
            <Grid item xs={12} sm={4} className="pod-thumb">
              <img src={creativityCalls}/>
            </Grid>
          </Grid>
          <Text p>Join, Mormei, as she calls up her friends who are artists, poets, musicians, cartoonists, architects, and anthropologists—all finding meaning in their private corner of the world.</Text> 
          <Text p>Together they investigate creative questions, decisively or uncertainly— but always catching up at the end of each call.</Text> 
          <Grid container className="episodes">
            <Grid item>
              <Text className="episode-title"><a href="https://podcasts.apple.com/ca/podcast/social-media-monster/id1537335104?i=1000496033339" target="_blank">Episode 1: Social Media...Monster? <span className="available">Listen on Apple Podcasts</span></a></Text>
              <Grid container className="pod-description">
                <Grid item xs={12} sm={12}>
                  <Text p>Mormei makes her first creativity call to longtime friend, Rachel Li. They discuss Rachel’s artistic process and the launch of her business, Water & Color Vintage. Plus, they delve into the world of social media—does it help or hinder creativity?</Text>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Episode1/>
                </Grid>
              </Grid>
              <Text className="episode-title"><a href="https://podcasts.apple.com/ca/podcast/preserving-moments/id1537335104?i=1000497318393" target="_blank">Episode 2: Preserving Moments <span className="available">Listen on Apple Podcasts</span></a></Text>
              <Grid container className="pod-description">
                <Grid item xs={12} sm={12}>
                  <Text p>Mormei reconnects with her former radio co-host, Brandon Rivas. They take a walk down memory lane and reminisce about their days in advice radio. Later, they discuss Brandon’s career in curation and restoration as well as his fascination with preserving objects.</Text>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Episode2/>
                </Grid>
              </Grid>
              <Text>Episode 3: Coming Soon</Text>
              <Text>Episode 4: Coming Soon</Text>
              <Text>Episode 5: Coming Soon</Text>
              <Text>Episode 6: Coming Soon</Text>
            </Grid>

          </Grid>
          <Text p><a href="https://podcasts.apple.com/ca/podcast/creativity-calls/id1537335104" target="_blank">Available on Apple Podcasts</a></Text>
          <Text><a href="https://www.instagram.com/creativitycallspod/" target="_blank">@creativitycallspod</a></Text>
        </Grid>
      </Grid>
  </PageContainer>
)

export default Podcasts;

const Episode1 = () => (
  <iframe title="Social Media...Monster?" frameBorder="0" height="122" width="100%" style={{border: "none;"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/x47f8-f05b05?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=102"></iframe>
)
const Episode2 = () => (
  <iframe title="Preserving Moments" frameBorder="0" height="122" width="100%" style={{border: "none;"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/kktzg-f15be3?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=102"></iframe>
)

const CREATIVITYCALLS = [
  {
    episode: "1",
    description: "Mormei makes her first creativity call to longtime friend, Rachel Li. They discuss Rachel’s artistic process and the launch of her business, Water & Color Vintage. Plus, they delve into the world of social media—does it help or hinder creativity?",
    episodeLink: "https://podcasts.apple.com/ca/podcast/social-media-monster/id1537335104?i=1000496033339",
  },
  {
    episode: "2",
    description: "Mormei reconnects with her former radio co-host, Brandon Rivas. They take a walk down memory lane and reminisce about their days in advice radio. Later, they discuss Brandon’s career in curation and restoration as well as his fascination with preserving objects.",
    episodeLink: "https://podcasts.apple.com/ca/podcast/social-media-monster/id1537335104?i=1000496033339",
  },
]