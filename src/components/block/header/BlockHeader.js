import React from "react"

import * as styles from "./BlockHeader.module.css"

function BlockHeader(props) {
  return (
    <div className={styles.BlockHeaderHolder}>
      <div className={styles.BlockHeader}>
        <span></span>
        <h1 style={{ justifySelf: "center" }}>Mat Krol</h1>
        <div className={styles.BlockHeaderNav}>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default BlockHeader
