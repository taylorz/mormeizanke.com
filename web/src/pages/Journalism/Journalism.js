import React, { useEffect, useState  } from 'react';
import sanityClient from '../../client'

import './Journalism.scss';
import PageContainer from '../../components/PageContainer/PageContainer';
import WritingItem from '../../components/WritingItem/WritingItem';

const Journalism = () => {
  const [journalismWorks, setJournalismWorks] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "work" && references(*[_type=="category" && title == 'Journalism']._id)
          ] | order(year desc) { ..., publication-> }
          {
            title,
            link,
            year,
            description,
            publication
          }
        `
      )
      .then((data) => setJournalismWorks(data))
      .catch(console.error);
  }, []);

  return (
    <PageContainer className="journalism">

      {journalismWorks ?
        journalismWorks.map((p, i) =>
          <WritingItem
            key={i}
            writing={p}
          />
        )
      : null}

    </PageContainer>
  )

}

export default Journalism;
