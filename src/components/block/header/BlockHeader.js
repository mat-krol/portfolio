import React from 'react'
import classes from './BlockHeader.module.css'

function BlockHeader(props) {
  return (
    <div className={classes.BlockHeaderHolder}>
      <div className={classes.BlockHeader}>
        <h1>Name</h1>
        <span>UI Designer | Front End Developer</span>
      </div>
    </div>
  )
}

export default BlockHeader