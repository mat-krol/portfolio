import React from 'react';

import classes from './Backdrop.module.css';

function Backdrop(props) {
  return (
    <div className={className(props)} onClick={props.onClick} />
  )
}

const className = props => {
  const arr = [classes.Backdrop]
  props.show ? arr.push(classes.BackdropShow) : arr.push(classes.BackdropHide);
  return arr.join(' ')
}

export default Backdrop