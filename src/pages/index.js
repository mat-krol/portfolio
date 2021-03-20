import React from "react"

import Backdrop from "../components/ui/backdrop/Backdrop"
import BlockAbout from "../components/block/about/BlockAbout"
import BlockBanner from "../components/block/banner/BlockBanner"
import BlockCard from "../components/block/card/BlockCard"
import BlockContact from "../components/block/contact/BlockContact"
import BlockPortfolio from "../components/block/portfolio/BlockPortfolio"
import BlockSeo from "../components/block/seo/BlockSeo"
import BlockSeparator from "../components/block/separator/BlockSeparator"

import styles from "./index.module.css"

export default function IndexPage() {
  const [showing, setShowing] = React.useState(false)
  const [pic, setPic] = React.useState(null)

  const handleClose = () => {
    setShowing(false)
    setTimeout(() => {
      setPic(null)
    }, 300)
  }

  const handleShow = image => {
    setPic(image)
    setTimeout(() => {
      setShowing(true)
    }, 300)
  }

  return (
    <>
      {/* <BlockSeo
        title="Mat Krol - Portfolio"
        keywords={[`mat krol`, `front end developer`, `web designer`]}
      /> */}
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
