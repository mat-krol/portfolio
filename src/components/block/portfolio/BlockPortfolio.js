import React from 'react'
import classes from './BlockPortfolio.module.css'

function BlockPortfolio(props) {
  return (
    <div className={classes.BlockPortfolio}>
      <span>View Portfolio</span>
      
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