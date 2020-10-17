import React from 'react';
import './Reviews.scss';
import PageContainer from '../../components/PageContainer/PageContainer';
import WritingItem from '../../components/WritingItem/WritingItem';

import REVIEWS from '../../constants/reviews';

const Reviews = () => (
  <PageContainer className="reviews">
    {REVIEWS.map((p) => 
      <WritingItem
        writing={p}
      />
    )}
  </PageContainer>
)

export default Reviews;
