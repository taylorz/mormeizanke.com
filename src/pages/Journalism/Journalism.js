import React from 'react';
import './Journalism.scss';
import PageContainer from '../../components/PageContainer/PageContainer';
import WritingItem from '../../components/WritingItem/WritingItem';

import JOURNALISM from '../../constants/journalism';

const Journalism = () => (
  <PageContainer className="journalism">
    {JOURNALISM.map((p) =>
      <WritingItem
        writing={p}
      />
    )}
  </PageContainer>
)

export default Journalism;
