import React from 'react'
import classes from './BlockHeader.module.css'

function BlockHeader(props) {
  return (
    <div className={classes.BlockHeaderHolder}>
      <div className={classes.BlockHeader}>
        <span></span>
        <h1 style={{ justifySelf: "center" }}>Mat Krol</h1>
        <div className={classes.BlockHeaderNav}>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default BlockHeader