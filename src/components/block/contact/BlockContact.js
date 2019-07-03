import React from 'react'
import classes from './BlockContact.module.css'
import Signup from '../../ui/signup/Signup';

function BlockContact(props) {
  return (
    <div className={classes.BlockContact} id="contact">
      <h2>Contact</h2>
      <Signup />      
    </div>
  )
}

export default BlockContact