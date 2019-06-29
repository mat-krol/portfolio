import React from 'react'
import classes from './BlockPortfolio.module.css'
import _ from 'lodash';
import BlockPortfolioItem from './item/BlockPortfolioItem';

function BlockPortfolio(props) {
  return (
    <div className={classes.BlockPortfolio} id="portfolio">
      <span id="portfolio">View Portfolio</span>
      <div className={classes.BlockPortfolioContent}>
        {_.map(list, item => (
          <BlockPortfolioItem { ...item } />
        ))}
        </div>
    </div>
  )
}

const list = [
  { color: "white" },
  { color: "#f3f3f3" },
  { color: "white" },
  { color: "#f3f3f3" },
  { color: "white" },
  { color: "#f3f3f3" },
]

export default BlockPortfolio