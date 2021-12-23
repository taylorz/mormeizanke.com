import React, { useEffect, useState  } from 'react';
import './Journalism.scss';
import sanityClient from '../../client'

import PageContainer from '../../components/PageContainer/PageContainer';
import WritingItem from '../../components/WritingItem/WritingItem';

import JOURNALISM from '../../constants/journalism';

const Journalism = () => {
  const [allPostsData, setAllPosts] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post' &&
            *[_type == "category" &&
              title == "Journalism"][0]._id in categories[]._ref]{
                body,
                title,
                slug,
        }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  console.log({allPostsData})

  return (
    <PageContainer className="journalism">
      {JOURNALISM.map((p) =>
        <WritingItem
          writing={p}
        />
      )}
      {/* {allPostsData ?
        allPostsData.map((p,i) => (
          <div key={i}>{p.title}</div>
        ))
      : null} */}
    </PageContainer>
  )

}

export default Journalism;
