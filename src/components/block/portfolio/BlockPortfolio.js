import React from "react"
import _ from "lodash"

import BlockPortfolioItem from "./item/BlockPortfolioItem"

import * as styles from "./BlockPortfolio.module.css"

function BlockPortfolio({ handleShow }) {
  return (
    <div className={styles.BlockPortfolio}>
      <div className={styles.BlockPortfolioContent}>
        {_.map(list, item => (
          <BlockPortfolioItem {...item} onClick={handleShow} />
        ))}
      </div>
    </div>
  )
}

const list = [
  {
    key: 4,
    heading: "Emmi.ai",
    subheading: "Web App",
    tech: "React + Redux, CSS",
    image: "emmi-mobile",
  },
  {
    key: 1,
    heading: "Emmi.ai",
    subheading: "Static Pages",
    tech: "Gatsby, React.js, Photoshop",
    image: "emmi",
  },
  {
    key: 2,
    heading: "Cambridge cLASs",
    subheading: "Wordpress Site",
    tech: "Wordpress, CSS",
    image: "camclass",
  },
  // { key: 5, heading: "Brainliens", subheading: "Game Prototype", tech: "React.js, CSS, Photoshop", image: "brainliens" },
  {
    key: 5,
    heading: "Metro Metro Metro",
    subheading: "Game Prototype",
    tech: "React.js, CSS, Photoshop",
    image: "metro",
  },
  {
    key: 6,
    heading: "Masternotes",
    subheading: "App Prototype",
    tech: "React.js, CSS, Photoshop",
    image: "masternotes",
  },
  {
    key: 3,
    heading: "CU PolSoc",
    subheading: "Wordpress Site",
    tech: "Wordpress, CSS",
    image: "polsoc",
  },
]

export default BlockPortfolio
