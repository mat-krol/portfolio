import React from 'react'
import classes from './BlockContact.module.css'
import Signup from '../../ui/signup/Signup';

function BlockContact(props) {
  return (
    <div className={classes.BlockContact} id="contact">
      <h2>Contact</h2>
      <p>If you have any questions or would to work on a project with me, don't hesitate to drop me a message!</p>
      <Signup />      
    </div>
  )
}

export default BlockContact