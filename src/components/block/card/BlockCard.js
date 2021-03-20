import React from "react"
import { MdClear } from "react-icons/md"
import classnames from "classnames"

import * as styles from "./BlockCard.module.css"

export default function BlockCard({ show, image, handleClose }) {
  return (
    <div
      className={classnames(styles.wrapper, {
        [styles.show]: show,
        [styles.hide]: !show,
      })}
    >
      <MdClear className={styles.close} onClick={handleClose} />
      <div
        className={classnames(styles.image, {
          [styles.emmi]: image === "emmi",
          [styles.metro]: image === "metro",
          [styles.polsoc]: image === "polsoc",
          [styles.camclass]: image === "camclass",
          [styles.brainliens]: image === "brainliens",
          [styles.masternotes]: image === "masternotes",
          [styles.emmimobile]: image === "emmi-mobile",
        })}
      />
    </div>
  )
}
