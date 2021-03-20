import React from "react"

import * as styles from "./Backdrop.module.css"

function Backdrop(props) {
  return <div className={className(props)} onClick={props.onClick} />
}

const className = props => {
  const arr = [styles.Backdrop]
  props.show ? arr.push(styles.BackdropShow) : arr.push(styles.BackdropHide)
  return arr.join(" ")
}

export default Backdrop
