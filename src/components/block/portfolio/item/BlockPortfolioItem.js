import React from 'react'
import classes from './BlockPortfolioItem.module.css'

function BlockPortfolioItem(props) {
  return (
    <div className={className(props.image)} onClick={props.onClick}>
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
  image === "camclass" && arr.push(classes.BlockPortfolioItemCamClass);
  image === "emmi" && arr.push(classes.BlockPortfolioItemEmmi);
  return arr.join(' ')
}

export default BlockPortfolioItem