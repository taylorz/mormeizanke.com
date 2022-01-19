import React, { useEffect, useState  } from 'react';
import sanityClient from '../../client'

import './Audio.scss'
import PageContainer from '../../components/PageContainer/PageContainer';
import WritingItem from '../../components/WritingItem/WritingItem';


const Audio = () => {
  const [audioWorks, setAudioWorks] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "work" && references(*[_type=="category" && title == 'Audio']._id)
          ] | order(year desc, month desc) { ..., publication-> }
          {
            title,
            link,
            "pdfURL": pdf.asset->url,
            year,
            description,
            publication
          }
        `
      )
      .then((data) => setAudioWorks(data))
      .catch(console.error);
  }, []);

  return (
    <PageContainer className="poetry">
      {audioWorks ?
        audioWorks.map((p) =>
          <WritingItem
            writing={p}
          />
        )
      : null}
    </PageContainer>
  )
}

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
