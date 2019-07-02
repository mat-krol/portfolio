import React from "react"

import  './ViewHome.module.css';
import Backdrop from "../../ui/backdrop/Backdrop";
import BlockAbout from "../../block/about/BlockAbout";
import BlockBanner from "../../block/banner/BlockBanner";
import BlockCard from "../../block/card/BlockCard";
import BlockContact from "../../block/contact/BlockContact";
import BlockHeader from "../../block/header/BlockHeader";
import BlockPortfolio from "../../block/portfolio/BlockPortfolio";
import BlockSeparator from "../../block/separator/BlockSeparator";
import SEO from "../../seo";

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
      <SEO title="" keywords={[`mat krol`, `front end developer`, `software engineer`]} />
      <BlockHeader />
      <BlockBanner />
      <BlockSeparator triangle />
      <div style={{ position: "relative" }}>
        <BlockPortfolio handleShow={handleShow} />
        <BlockCard show={showing} handleClose={handleClose} image={pic} />
        <Backdrop show={showing} onClick={handleClose} />
      </div>
      <BlockAbout />
      <BlockSeparator />
      <BlockContact />
      {/* <div className={classes.ViewHome}>
      </div> */}
    </>
  )
}

export default ViewHome
