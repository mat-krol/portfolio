import React from "react"
import classes from "./ViewHome.module.css"
import BlockHeader from "../../block/header/BlockHeader";
import BlockPortfolio from "../../block/portfolio/BlockPortfolio";

function ViewHome(props) {
  return (
    <>
      <BlockHeader />
      <BlockPortfolio />
      {/* <div className={classes.ViewHome}>
      </div> */}
    </>
  )
}

export default ViewHome
