import React from 'react'
import classes from './BlockCard.module.css'
import Backdrop from '../../ui/backdrop/Backdrop';
import { MdClose } from 'react-icons/md';

function BlockCard(props) {
  return (
    <>
      <div className={classes.BlockCard}>
        <div className={classes.BlockCardExit}>
          <MdClose />
        </div>
        <div className={classes.BlockCardImage} />
        <div className={classes.BlockCardCopy}>
          <h2>Emmi.ai</h2>
          <p>Worked on the front end of the site</p>
        </div>
      </div>
      <Backdrop show />
    </>
  )
}

export default BlockCard