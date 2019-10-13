import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkExcerpt.scss'

class WorkExcerpt extends Component {
  render() {
    const { children, className } = this.props
    return (
      <div className={`work-excerpt ${className}`}>
        <Grid container className="work-excerpt-wrapper">
          <Grid item md={6} className="excerpt-titles">
            <p className="titles-title">The Sopron Story: Looking back 60 years later</p>
            <p>UBC NOW • September 23, 2018</p>
          </Grid>
          <Grid item md={6} className="excerpt-linkto">2</Grid>
          <Grid item md={12} className="excerpt-writing">2</Grid>
          <Grid item md={6} className="excerpt-context">1</Grid>
        </Grid>
      </div>
    );
  }
}

export default WorkExcerpt;
