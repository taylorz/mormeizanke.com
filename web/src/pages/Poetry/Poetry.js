import React, { useEffect, useState  } from 'react';
import sanityClient from '../../client'

import './Poetry.scss'
import PageContainer from '../../components/PageContainer/PageContainer';
import WritingItem from '../../components/WritingItem/WritingItem';

const Poetry = () => {
  const [poetryWorks, setPoetryWorks] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "work" && references(*[_type=="category" && title == 'Poetry']._id)
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
      .then((data) => setPoetryWorks(data))
      .catch(console.error);
  }, []);

  return (
    <PageContainer className="poetry">
      {poetryWorks ?
        poetryWorks.map((p) =>
          <WritingItem
            writing={p}
          />
        )
      : null}
    </PageContainer>
  )
}
export default Poetry;
