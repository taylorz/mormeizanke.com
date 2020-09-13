import React from 'react';
import './Homepage.scss';
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../components/PageContainer/PageContainer';

import MormeiHeadshot from '../../assets/images/mormei-test.png';

const Homepage = () => (
  <PageContainer className="homepage">
    <Grid container>
      <Grid item xs={6}>Writes, Draws, Records, Edits, Builds, & Transmits stories.</Grid>
    </Grid>
  </PageContainer>
)

export default Homepage

// class Homepage extends Component {
//   render() {
//     return (
//       <>
//         <PageContainer className="homepage-container">
//           <div className="header">
//             <div className="header-home">
//               <a href="/">Mormei Zanke</a>
//             </div>
//             <div className="header-links">
//               <a href="/">Writing</a>
//               <a href="/">About Me</a>
//             </div>
//           </div>
//           <Grid container className="homepage-hero">
//             <Grid item md={6} className="hero-statement">
//               <div className="statement-text">
//                 <p className="text-main">Mormei is a Canadian writer of poetry and essays.</p>
//                 {/*<p className="text-cta"></p>*/}
//               </div>
//             </Grid>
//             <Grid item md={6} className="hero-graphic">
//               <div className="graphic-headshot">
//                 <img src={MormeiHeadshot}/>
//               </div>
//             </Grid>
//           </Grid>
//           <Grid container className="homepage-statement" justify="center" alignItems="center">
//             <Grid item md={8} className="statement-text">
//               <p>As a storyteller she is compelled by the power of language whether that be in journalism, academia, or advertisement copy. Mormei has work experience as a copywriter, editor, digital content creator, project coordinator, and English language teacher.</p>
//             </Grid>
//           </Grid>
//           { EXCERPTS.map((excerpt) =>
//               <WorkExcerpt
//                 title={excerpt.title}
//                 publication={excerpt.publication}
//                 datePublished={excerpt.datePublished}

//                 excerpt={excerpt.excerpt}
//               />
//             )
//           }
//         </PageContainer>
//       </>
//     );
//   }
// }

// export default Homepage;
