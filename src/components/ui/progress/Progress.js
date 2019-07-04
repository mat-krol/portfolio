import React from 'react';

import classes from './Progress.module.css';

function Progress({ title, width }) {
  return (
    <div className={classes.ProgressHolder}>
      <span>{title}</span>
      {/* <div className={classes.Progress} style={{ background: `linear-gradient(90deg, #fff ${width}%, #2442bd ${width}%, #2442bd calc(${width}% + 2px), #fff calc(${width}% + 2px)` }}> */}
      <div className={classes.Progress}>
        <div className={classes.ProgressBar} style={{ width: width }} />
      </div>
      <span>{width}</span>
    </div>
  )
}

export default Progress