import React from 'react';
import './Contact.scss'
import Grid from '@material-ui/core/Grid';
import PageContainer from '../../components/PageContainer/PageContainer';

const Contact = () => (
  <PageContainer className="contact">
    <Grid container>
      <Grid item>
        <div>Email mormeizanke@gmail.com</div>
        <div>Instagram @meiznke </div>
      </Grid>
    </Grid>
  </PageContainer>
)

export default Contact;
