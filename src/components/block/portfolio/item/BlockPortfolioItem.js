import React from 'react'
import classes from './BlockPortfolioItem.module.css'

function BlockPortfolioItem(props) {
  return (
    <div className={classes.BlockPortfolioItem}>
      <div className={classes.BlockPortfolioItemContent}>
        <h2>{props.heading}</h2>
        <span>{props.subheading}</span>
        <p>{props.tech}</p>
      </div>
    </div>
  )
}



export default BlockPortfolioItem