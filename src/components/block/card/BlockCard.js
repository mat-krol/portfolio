import React from 'react'
import classes from './BlockCard.module.css'
import Backdrop from '../../ui/backdrop/Backdrop';
import { MdClose } from 'react-icons/md';

function BlockCard(props) {
  return (
    <>
      <div className={className(props)}>
        <div className={classes.BlockCardExit}>
          <MdClose onClick={props.handleClose} />
        </div>
        <div className={classes.BlockCardImage} />
        <div className={classes.BlockCardCopy}>
          <h2>Emmi.ai</h2>
          <p>Worked on the front end of the site</p>
        </div>
      </div>
      <Backdrop show={props.show} onClick={props.handleClose} />
    </>
  )
}

const className = props => {
  const arr = [classes.BlockCard]
  props.show ? arr.push(classes.BlockCardShow) : arr.push(classes.BlockCardHide);
  return arr.join(' ')
}

export default BlockCard