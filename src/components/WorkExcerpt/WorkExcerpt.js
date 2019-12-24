import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './WorkExcerpt.scss'

class WorkExcerpt extends Component {
  render() {
    const {
      children,
      className,
      title,
      publication,
      datePublished,
      statement,
      excerpt,
      marginNoteFirst,
      marginNoteSecond,
      marginNoteThird
    } = this.props
    return (
      <div className={`work-excerpt ${className}`}>
        <Grid container className="work-excerpt-wrapper">
          <Grid item md={12} className="excerpt-writing">
            <Grid container className="excerpt-writing-wrapper" justify="center" alignItems="center">
              <Grid item md={12} lg={12} className="writing-copy">
                {excerpt}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default WorkExcerpt;
