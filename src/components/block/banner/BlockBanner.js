import React from 'react'
import classes from './BlockBanner.module.css'

function BlockBanner(props) {
  return (
    <div className={classes.BlockBanner}>
      <div>UI Designer</div>
      <div>Front End Developer</div>
    </div>
  )
}

export default BlockBanner