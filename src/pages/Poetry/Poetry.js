import React from 'react';
import './Poetry.scss'
import PageContainer from '../../components/PageContainer/PageContainer';
import WritingItem from '../../components/WritingItem/WritingItem';

import POETRY from '../../constants/poetry'

const Poetry = () => (
  <PageContainer className="poetry">
    {POETRY.map((p) => 
      <WritingItem
        writing={p}
      />
    )}
  </PageContainer>
)

export default Poetry;
