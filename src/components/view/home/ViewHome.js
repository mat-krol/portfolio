import React from "react"

import classes from "./ViewHome.module.css"
import BlockHeader from "../../block/header/BlockHeader";
import BlockPortfolio from "../../block/portfolio/BlockPortfolio";
import BlockSeparator from "../../block/separator/BlockSeparator";
import BlockBanner from "../../block/banner/BlockBanner";
import BlockCard from "../../block/card/BlockCard";
import SEO from "../../seo";

function ViewHome(props) {
  const [showing, setShowing] = React.useState(false)

  const handleClose = () => {
    setShowing(false)
  }

  const handleShow = () => {
    setShowing(true)
  }

  return (
    <>
      <SEO title="" keywords={[`mat krol`, `front end developer`, `software engineer`]} />
      <BlockHeader />
      <BlockBanner />
      <BlockSeparator />
      <BlockPortfolio handleShow={handleShow} />
      <BlockCard show={showing} handleClose={handleClose} />
      <BlockSeparator rotated />
      {/* <div className={classes.ViewHome}>
      </div> */}
    </>
  )
}

export default ViewHome
