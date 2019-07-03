import React from "react"

import classes from "./ViewHome.module.css"
import BlockHeader from "../../block/header/BlockHeader";
import BlockPortfolio from "../../block/portfolio/BlockPortfolio";
import BlockSeparator from "../../block/separator/BlockSeparator";
import BlockBanner from "../../block/banner/BlockBanner";
import BlockCard from "../../block/card/BlockCard";
import SEO from "../../seo";
import BlockAbout from "../../block/about/BlockAbout";
import Backdrop from "../../ui/backdrop/Backdrop";
import BlockContact from "../../block/contact/BlockContact";

function ViewHome(props) {
  const [showing, setShowing] = React.useState(false)
  const [pic, setPic] = React.useState(null)

  const handleClose = () => {
    setShowing(false)
    setPic(null)
  }

  const handleShow = image => {
    setShowing(true)
    setPic(image)
  }

  return (
    <>
      <SEO title="Mat Krol - Portfolio" keywords={[`mat krol`, `front end developer`, `software engineer`]} />
      {/* <BlockHeader /> */}
      <BlockBanner />
      <BlockSeparator wave title="portfolio" color="#2442bd" />
      {/* <BlockSeparator triangle title="portfolio" color="#2442bd" /> */}
      <div style={{ position: "relative" }}>
        <BlockPortfolio handleShow={handleShow} />
        <BlockCard show={showing} handleClose={handleClose} image={pic} />
        <Backdrop show={showing} onClick={handleClose} />
      </div>
      <BlockSeparator title="about" color="#2442bd" />
      <BlockAbout />
      <BlockSeparator wave title="contact" color="#2442bd" />
      <BlockContact />
      {/* <div className={classes.ViewHome}>
      </div> */}
    </>
  )
}

export default ViewHome
