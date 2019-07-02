import React from 'react'
import classes from './BlockAbout.module.css'

function BlockAbout(props) {
  return (
    <div className={classes.BlockAbout} id="#about">
      <h2>About</h2>
      <div>UI Designer</div>
      <div>Front End Developer</div>
    </div>
  )
}

export default BlockAbout