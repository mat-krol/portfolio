import React from 'react'
import classes from './BlockPortfolioItem.module.css'

function BlockPortfolioItem(props) {
  return (
      <div className={className(props.image)} onClick={() => props.onClick(props.image)}>
        <div className={classes.BlockPortfolioItemContent}>
          <h2>{props.heading}</h2>
          <span>{props.subheading}</span>
          <p>{props.tech}</p>
        </div>
      </div>
  )
}

const className = image => {
  const arr = [classes.BlockPortfolioItem]
  image === "polsoc" && arr.push(classes.BlockPortfolioItemPolSoc);
  image === "emmi" && arr.push(classes.BlockPortfolioItemEmmi);
  image === "camclass" && arr.push(classes.BlockPortfolioItemCamClass);
  image === "brainliens" && arr.push(classes.BlockPortfolioItemBrainliens);
  image === "masternotes" && arr.push(classes.BlockPortfolioItemMasternotes);
  image === "emmi-mobile" && arr.push(classes.BlockPortfolioItemEmmiMobile);
  return arr.join(' ')
}

export default BlockPortfolioItem