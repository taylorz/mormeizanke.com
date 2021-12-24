import React from 'react';
import { Link } from "react-router-dom";
import './Homepage.scss';
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../components/PageContainer/PageContainer';
import Text from '../../components/Text/Text';

const Homepage = () => (
  <PageContainer className="homepage">
    <Grid container>
      <Grid item xs={12} sm={6}>
        <Text p>Journalist and poet.</Text>
      </Grid>
    </Grid>
  </PageContainer>
)

export default Homepage
