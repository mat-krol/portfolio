import React from 'react'
import classes from './BlockPortfolio.module.css'
import _ from 'lodash';
import BlockPortfolioItem from './item/BlockPortfolioItem';

function BlockPortfolio(props) {
  return (
    <div className={classes.BlockPortfolio}>
      {/* <h2 id="portfolio">Portfolio</h2> */}
      <div className={classes.BlockPortfolioContent}>
        {_.map(list, item => (
          <BlockPortfolioItem { ...item } onClick={props.handleShow} />
        ))}
        </div>
    </div>
  )
}

const list = [
  { key: 1, heading: "Emmi.ai", subheading: "Static Pages", tech: "Gatsby, React.js, Photoshop", image: "emmi" },
  { key: 2, heading: "Cambridge cLASs", subheading: "Wordpress Site", tech: "Wordpress", image: "camclass" },
  { key: 3, heading: "CU PolSoc", subheading: "Wordpress Site", tech: "Wordpress", image: "polsoc" },
  { key: 4, heading: "CU PolSoc", subheading: "Wordpress Site", tech: "Wordpress", image: "polsoc" },
  { key: 5, heading: "Emmi.ai", subheading: "Static Pages", tech: "Gatsby, React.js, Photoshop", image: "emmi" },
  { key: 6, heading: "Cambridge cLASs", subheading: "Wordpress Site", tech: "Wordpress", image: "camclass" },
]

export default BlockPortfolio