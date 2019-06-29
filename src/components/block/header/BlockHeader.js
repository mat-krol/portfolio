import React from 'react'
import classes from './BlockHeader.module.css'

function BlockHeader(props) {
  return (
    <div className={classes.BlockHeaderHolder}>
      <div className={classes.BlockHeader}>
        <span></span>
        <h1 style={{ justifySelf: "center" }}>Mat Krol</h1>
        <a href="#portfolio" style={{ justifySelf: "end" }}>Portfolio</a>
      </div>
    </div>
  )
}

export default BlockHeader