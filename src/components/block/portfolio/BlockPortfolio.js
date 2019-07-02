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
  { key: 4, heading: "Emmi.ai", subheading: "Web App", tech: "React + Redux, CSS", image: "emmi-mobile" },
  { key: 1, heading: "Emmi.ai", subheading: "Static Pages", tech: "Gatsby, React.js, Photoshop", image: "emmi" },
  { key: 5, heading: "Brainliens", subheading: "Game Prototype", tech: "React.js, CSS, Photoshop", image: "brainliens" },
  { key: 2, heading: "Cambridge cLASs", subheading: "Wordpress Site", tech: "Wordpress", image: "camclass" },
  { key: 6, heading: "Masternotes", subheading: "App Prototype", tech: "React.js, CSS, Photoshop", image: "masternotes" },
  { key: 3, heading: "CU PolSoc", subheading: "Wordpress Site", tech: "Wordpress", image: "polsoc" },
]

export default BlockPortfolio