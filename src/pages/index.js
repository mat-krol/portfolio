import React from "react"

import metro from "../images/portfolio/metro.png"
import camclass from "../images/portfolio/camclass.png"
import polsoc from "../images/portfolio/polsoc.png"

import Backdrop from "../components/ui/backdrop/Backdrop"
import BlockAbout from "../components/block/about/BlockAbout"
import BlockBanner from "../components/block/banner/BlockBanner"
import BlockCard from "../components/block/card/BlockCard"
import BlockContact from "../components/block/contact/BlockContact"
import BlockPortfolio from "../components/block/portfolio/BlockPortfolio"
import BlockSeo from "../components/block/seo/BlockSeo"
import BlockSeparator from "../components/block/separator/BlockSeparator"

import "./index.scss"

export default function IndexPage() {
  const [showing, setShowing] = React.useState(false)
  const [portfolioItem, setPortfolioItem] = React.useState(null)

  const currentPortfolioItem = portfolio.find(({ id }) => id === portfolioItem)

  const handleClose = () => {
    setShowing(false)
    setTimeout(() => {
      setPortfolioItem(null)
    }, 300)
  }

  const handleShow = image => {
    setPortfolioItem(image)
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
        <BlockPortfolio portfolio={portfolio} handleShow={handleShow} />
        <BlockCard
          show={showing}
          handleClose={handleClose}
          {...currentPortfolioItem}
        />
        <Backdrop show={showing} onClick={handleClose} />
      </div>
      <BlockAbout />
      <BlockSeparator wave title="contact" color="#2442bd" />
      <BlockContact />
    </>
  )
}

const portfolio = [
  {
    id: "camclass",
    heading: "Cambridge cLASs",
    subheading: "Wordpress Site",
    tech: "Wordpress, CSS",
    description:
      "This is the first wordpress side I made. It helped me learn more about the routing structure of static sites and improve my CSS skills",
    image: camclass,
  },
  {
    id: "metro",
    heading: "Metro Metro Metro",
    subheading: "Game Prototype",
    tech: "React.js, Redux, Figma",
    description:
      "Metro Metro Metro is a game prototype that uses React + Redux and SVG images to let users cater to the demands of a growing city population.",
    image: metro,
    repoLink: "https://github.com/mat-krol/metro-frontend",
    siteLink: "https://metrometrometro.com/",
  },
  {
    id: "polsoc",
    heading: "CU PolSoc",
    subheading: "Wordpress Site",
    tech: "Wordpress, CSS",
    image: polsoc,
  },
]
