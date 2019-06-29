import React from "react"
import classes from "./ViewHome.module.css"
import BlockHeader from "../../block/header/BlockHeader";
import BlockPortfolio from "../../block/portfolio/BlockPortfolio";
import BlockSeparator from "../../block/separator/BlockSeparator";
import BlockBanner from "../../block/banner/BlockBanner";

function ViewHome(props) {
  return (
    <>
      <BlockHeader />
      <BlockBanner />
      <BlockSeparator />
      <BlockPortfolio />
      <BlockSeparator rotated />
      {/* <div className={classes.ViewHome}>
      </div> */}
    </>
  )
}

export default ViewHome
