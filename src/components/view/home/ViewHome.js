import React from "react"

import "./ViewHome.module.css"
import Backdrop from "../../ui/backdrop/Backdrop";
import BlockAbout from "../../block/about/BlockAbout";
import BlockBanner from "../../block/banner/BlockBanner";
import BlockCard from "../../block/card/BlockCard";
import BlockContact from "../../block/contact/BlockContact";
import BlockPortfolio from "../../block/portfolio/BlockPortfolio";
import BlockSeo from "../../block/seo/BlockSeo";
import BlockSeparator from "../../block/separator/BlockSeparator";

function ViewHome(props) {
  const [showing, setShowing] = React.useState(false)
  const [pic, setPic] = React.useState(null)

  const handleClose = () => {
    setShowing(false)
    setTimeout(() => {
      setPic(null)
    }, 300);
  }

  const handleShow = image => {
    setShowing(true)
    setPic(image)
  }

  return (
    <>
      <BlockSeo title="Mat Krol - Portfolio" keywords={[`mat krol`, `front end developer`, `web designer`]} />
      <BlockBanner />
      <div style={{ position: "relative" }}>
        <BlockPortfolio handleShow={handleShow} />
        <BlockCard show={showing} handleClose={handleClose} image={pic} />
        <Backdrop show={showing} onClick={handleClose} />
      </div>
      <BlockAbout />
      <BlockSeparator wave title="contact" color="#2442bd" />
      <BlockContact />
    </>
  )
}

export default ViewHome
