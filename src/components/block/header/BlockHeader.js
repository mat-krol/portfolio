import React from 'react'
import classes from './BlockHeader.module.css'

function BlockHeader(props) {
  return (
    <div className={classes.BlockHeaderHolder}>
      <div className={classes.BlockHeader}>
        <h1>Mat Krol</h1>
      </div>
    </div>
  )
}

export default BlockHeader