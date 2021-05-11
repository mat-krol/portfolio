import React from "react"
import _ from "lodash"

import BlockPortfolioItem from "./item/BlockPortfolioItem"

import * as styles from "./BlockPortfolio.module.css"

export default function BlockPortfolio({ handleShow, portfolio }) {
  return (
    <div className={styles.BlockPortfolio}>
      <div className={styles.BlockPortfolioContent}>
        {_.map(portfolio, item => (
          <BlockPortfolioItem key={item.image} {...item} onClick={handleShow} />
        ))}
      </div>
    </div>
  )
}
