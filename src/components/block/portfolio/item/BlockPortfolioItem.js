import React from "react"

import * as styles from "./BlockPortfolioItem.module.css"

function BlockPortfolioItem(props) {
  return (
    <div
      className={className(props.image)}
      onClick={() => props.onClick(props.image)}
    >
      <div className={styles.BlockPortfolioItemContent}>
        <h2>{props.heading}</h2>
        <span>{props.subheading}</span>
        <p>{props.tech}</p>
      </div>
    </div>
  )
}

const className = image => {
  const arr = [styles.BlockPortfolioItem]
  image === "polsoc" && arr.push(styles.BlockPortfolioItemPolSoc)
  image === "emmi" && arr.push(styles.BlockPortfolioItemEmmi)
  image === "metro" && arr.push(styles.BlockPortfolioItemMetro)
  image === "camclass" && arr.push(styles.BlockPortfolioItemCamClass)
  image === "brainliens" && arr.push(styles.BlockPortfolioItemBrainliens)
  image === "masternotes" && arr.push(styles.BlockPortfolioItemMasternotes)
  image === "emmi-mobile" && arr.push(styles.BlockPortfolioItemEmmiMobile)
  return arr.join(" ")
}

export default BlockPortfolioItem
