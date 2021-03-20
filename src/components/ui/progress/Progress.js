import React from "react"

import * as styles from "./Progress.module.css"

function Progress({ title, width }) {
  return (
    <div className={styles.ProgressHolder}>
      <span>{title}</span>
      {/* <div className={styles.Progress} style={{ background: `linear-gradient(90deg, #fff ${width}%, #2442bd ${width}%, #2442bd calc(${width}% + 2px), #fff calc(${width}% + 2px)` }}> */}
      <div className={styles.Progress}>
        <div className={styles.ProgressBar} style={{ width: width }} />
      </div>
      <span>{width}</span>
    </div>
  )
}

export default Progress
