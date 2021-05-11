import React from "react"
import { MdClear } from "react-icons/md"
import classnames from "classnames"

import * as styles from "./BlockCard.module.scss"

export default function BlockCard({
  show,
  image,
  handleClose,
  heading,
  tech,
  description,
  repoLink,
  siteLink,
}) {
  return (
    <div
      className={classnames(styles.wrapper, {
        [styles.show]: show,
        [styles.hide]: !show,
      })}
    >
      <div className={styles.topSection}>
        <MdClear className={styles.close} onClick={handleClose} />
        <h1>{heading}</h1>
        {repoLink && <a href={repoLink}>Link to repo</a>}
        {siteLink && <a href={siteLink}>Link to site</a>}
        <p>Tech used: {tech}</p>
        <p>{description}</p>
      </div>
      <img src={image} className={styles.image} />
    </div>
  )
}
