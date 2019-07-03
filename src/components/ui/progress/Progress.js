import React from 'react';

import classes from './Progress.module.css';

function Progress({ title, width }) {
  return (
    <div className={classes.ProgressHolder}>
      <span>{title}</span>
      <div className={classes.Progress} style={{ background: `linear-gradient(90deg, #2442bd ${width}, #eee ${width})` }} />
      <span>{width}</span>
    </div>
  )
}

export default Progress