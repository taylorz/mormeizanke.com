import React from 'react';
import './Essays.scss'
import PageContainer from '../../components/PageContainer/PageContainer';
import WritingItem from '../../components/WritingItem/WritingItem';

import ESSAYS from '../../constants/essays';

const Essays = () => (
  <PageContainer className="essays">
    {ESSAYS.map((p) => 
      <WritingItem
        writing={p}
      />
    )}
  </PageContainer>
)

export default Essays;
