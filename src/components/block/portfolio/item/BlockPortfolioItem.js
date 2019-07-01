import React from 'react'
import classes from './BlockPortfolioItem.module.css'

function BlockPortfolioItem(props) {
  return (
    <div className={classes.BlockPortfolioItem}>
      <div className={classes.BlockPortfolioItemContent}>
        <h2>Emmi.ai</h2>
        <span>Static Pages</span>
        <p>Gatsby, React, Photoshop</p>
      </div>
    </div>
  )
}



export default BlockPortfolioItem