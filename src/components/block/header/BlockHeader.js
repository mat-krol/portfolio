import React from 'react'
import classes from './BlockHeader.module.css'

function BlockHeader(props) {
  return (
    <div className={classes.BlockHeaderHolder}>
      <div className={classes.BlockHeader}>
        <span>UI Designer</span>
        <h1>Mat Krol</h1>
        <span style={{ justifySelf: "end" }}>Front End Developer</span>
      </div>
    </div>
  )
}

export default BlockHeader