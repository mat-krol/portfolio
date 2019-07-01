import React from 'react'
import classes from './BlockPortfolio.module.css'
import _ from 'lodash';
import BlockPortfolioItem from './item/BlockPortfolioItem';

function BlockPortfolio(props) {
  return (
    <div className={classes.BlockPortfolio} id="portfolio">
      <span id="portfolio">Portfolio</span>
      <div className={classes.BlockPortfolioContent}>
        {_.map(list, item => (
          <BlockPortfolioItem { ...item } />
        ))}
        </div>
    </div>
  )
}

const list = [
  { key: 1, heading: "Emmi.ai", subheading: "Static Pages", tech: "Gatsby, React.js, Photoshop", image: "emmi-thumb" },
  { key: 2, heading: "Cambridge cLASs", subheading: "", tech: "Wordpress", image: "camclass-thumb" },
  { key: 3, heading: "Cambridge cLASs", subheading: "", tech: "Wordpress", image: "camclass" }
]

export default BlockPortfolio