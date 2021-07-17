import React from 'react';
import './Audio.scss'
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../components/PageContainer/PageContainer';
import Text from '../../components/Text/Text';
import WritingItem from '../../components/WritingItem/WritingItem';
import creativityCalls from '../../assets/images/creativity-calls.JPG';

import AUDIO from '../../constants/audio'

const Audio = () => (

  <PageContainer className="audio">
    {AUDIO.map((p) =>
      <WritingItem
        writing={p}
      />
    )}
  </PageContainer>


  // <PageContainer className="audio">
  //     <Grid container>
  //       <Grid item xs={2} sm={1}>2020</Grid>
  //       <Grid item xs={10} sm={11}>
  //         <Text p>Creativity Calls</Text>
  //         <Grid container>
  //           <Grid item xs={12} sm={4} className="pod-thumb">
  //             <img src={creativityCalls}/>
  //           </Grid>
  //         </Grid>
  //         <Text p>Join, Mormei, as she calls up her friends who are artists, poets, musicians, cartoonists, architects, and anthropologists—all finding meaning in their private corner of the world.</Text>
  //         <Text p>Together they investigate creative questions, decisively or uncertainly— but always catching up at the end of each call.</Text>
  //         <Grid container className="episodes">
  //           <Grid item>

  //             <Text className="episode-title"><a href="https://podcasts.apple.com/ca/podcast/social-media-monster/id1537335104?i=1000496033339" target="_blank">Episode 1: Social Media...Monster? <span className="available">Listen on Apple Podcasts</span></a></Text>
  //             <Grid container className="pod-description">
  //               <Grid item xs={12} sm={12}>
  //                 <Text p>Mormei makes her first creativity call to longtime friend, Rachel Li. They discuss Rachel’s artistic process and the launch of her business, Water & Color Vintage. Plus, they delve into the world of social media—does it help or hinder creativity?</Text>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <Episode1/>
  //               </Grid>
  //             </Grid>

  //             <Text className="episode-title"><a href="https://podcasts.apple.com/ca/podcast/preserving-moments/id1537335104?i=1000497318393" target="_blank">Episode 2: Preserving Moments <span className="available">Listen on Apple Podcasts</span></a></Text>
  //             <Grid container className="pod-description">
  //               <Grid item xs={12} sm={12}>
  //                 <Text p>Mormei reconnects with her former radio co-host, Brandon Rivas. They take a walk down memory lane and reminisce about their days in advice radio. Later, they discuss Brandon’s career in curation and restoration as well as his fascination with preserving objects.</Text>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <Episode2/>
  //               </Grid>
  //             </Grid>

  //             <Text className="episode-title"><a href="https://podcasts.apple.com/ca/podcast/alternative-world/id1537335104?i=1000498210875" target="_blank">Episode 3: Alternative World <span className="available">Listen on Apple Podcasts</span></a></Text>
  //             <Grid container className="pod-description">
  //               <Grid item xs={12} sm={12}>
  //                 <Text p>Mormei goes on a field trip to think about how social responsibility should engage with the design of public spaces. To better understand this topic, she calls up her friend Clara Dykstra, who is trained in architecture and cultural anthropology.</Text>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <Episode3/>
  //               </Grid>
  //             </Grid>

  //             <Text className="episode-title"><a href="https://podcasts.apple.com/ca/podcast/back-to-nature/id1537335104?i=1000499301477" target="_blank">Episode 4: Back To Nature <span className="available">Listen on Apple Podcasts</span></a></Text>
  //             <Grid container className="pod-description">
  //               <Grid item xs={12} sm={12}>
  //                 <Text p>When’s the last time you were totally immersed in nature? Mormei dials up her old friend, Karson Fritzler, to talk about the impact of the outdoors on his creative process. Plus, a detailed conversation on typewriters and why introverts seem to thrive in isolation.</Text>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <Episode4/>
  //               </Grid>
  //             </Grid>

  //             <Text className="episode-title"><a href="https://podcasts.apple.com/ca/podcast/interior-lives/id1537335104?i=1000500311931" target="_blank">Episode 5: Interior Lives <span className="available">Listen on Apple Podcasts</span></a></Text>
  //             <Grid container className="pod-description">
  //               <Grid item xs={12} sm={12}>
  //                 <Text p>Poet and writer, Alison Braid, joins Mormei to talk about her recently published chapbook of poems, Little Hunches. They get into the specifics of the process of writing and rewriting, as well as the role interiority can play in developing rich stories. Plus, they make a case for letter-writing in modern times.</Text>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <Episode5/>
  //               </Grid>
  //             </Grid>

  //             <Text className="episode-title"><a href="https://podcasts.apple.com/ca/podcast/keep-the-mystery/id1537335104?i=1000501214411" target="_blank">Episode 6: Keep The Mystery <span className="available">Listen on Apple Podcasts</span></a></Text>
  //             <Grid container className="pod-description">
  //               <Grid item xs={12} sm={12}>
  //                 <Text p>In the last episode of the season, Mormei calls her friend, Michelle Ku, from the other side of the Atlantic. They talk about Michelle’s career as a 2D animator, her artistic journey, and where she looks for inspiration. Later, they compare story planning techniques and why they prefer spontaneity over detailed mapping.</Text>
  //               </Grid>
  //               <Grid item xs={12} sm={6}>
  //                 <Episode6/>
  //               </Grid>
  //             </Grid>

  //           </Grid>

  //         </Grid>
  //         <Text p><a href="https://podcasts.apple.com/ca/podcast/creativity-calls/id1537335104" target="_blank">Available on Apple Podcasts</a></Text>
  //         <Text><a href="https://www.instagram.com/creativitycallspod/" target="_blank">@creativitycallspod</a></Text>
  //       </Grid>
  //     </Grid>
  // </PageContainer>
)

export default Audio;

const Episode1 = () => (
  <iframe title="Social Media...Monster?" frameBorder="0" height="122" width="100%" style={{border: "none;"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/x47f8-f05b05?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=102"></iframe>
)
const Episode2 = () => (
  <iframe title="Preserving Moments" frameBorder="0" height="122" width="100%" style={{border: "none;"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/kktzg-f15be3?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=102"></iframe>
)
const Episode3 = () => (
  <iframe title="Alternative World" frameBorder="0" height="122" width="100%" style={{border: "none;"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/drggx-f1ffc8?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=102"></iframe>
)
const Episode4 = () => (
  <iframe title="Back to Nature" frameBorder="0" height="122" width="100%" style={{border: "none;"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/aicvz-f2a75b?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=102"></iframe>
)
const Episode5 = () => (
  <iframe title="Interior Lives" frameBorder="0" height="122" width="100%" style={{border: "none;"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/fj66s-f34d64?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=102"></iframe>
)
const Episode6 = () => (
  <iframe title="Keep The Mystery" frameBorder="0" height="122" width="100%" style={{border: "none;"}} scrolling="no" data-name="pb-iframe-player" src="https://www.podbean.com/media/player/r2vpq-f3e5d9?from=pb6admin&download=1&version=1&auto=0&share=1&download=1&rtl=0&fonts=Helvetica&skin=1&pfauth=&btn-skin=102"></iframe>
)
