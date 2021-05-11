import React from "react"

import * as styles from "./BlockPortfolioItem.module.scss"

export default function BlockPortfolioItem({
  id,
  image,
  heading,
  subheading,
  tech,
  onClick,
}) {
  return (
    <div className={styles.wrapper} onClick={() => onClick(id)}>
      <div className={styles.content}>
        <h2>{heading}</h2>
        <span>{subheading}</span>
        <p>{tech}</p>
      </div>
      <img src={image} className={styles.image} />
    </div>
  )
}
