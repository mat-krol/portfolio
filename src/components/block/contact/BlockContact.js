import React from 'react'
import classes from './BlockContact.module.css'

function BlockContact(props) {
  return (
    <div className={classes.BlockContact} id="#contact">
      <h2>Contact</h2>
      <div>UI Designer</div>
      <div>Front End Developer</div>
    </div>
  )
}

export default BlockContact