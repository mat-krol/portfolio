import React from 'react'
import classes from './BlockPortfolioItem.module.css'

function BlockPortfolioItem(props) {
  return (
    <div className={classes.BlockPortfolioItem} style={{ background: props.color}}>
    </div>
  )
}

export default BlockPortfolioItem