import React from 'react'
import classes from './BlockBanner.module.css'
import { FaAngleDoubleDown } from 'react-icons/fa'

function BlockBanner(props) {
  return (
    <div className={classes.BlockBanner}>
      <div className={classes.BlockBannerNav}>
          <a href="#portfolio">Portfolio</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
      </div>
      <div>
        <h1>Hi! My name is <span>Mat Krol</span></h1>
        <p>I'm a web designer & front end developer with a passion for clean and usable design</p>
      </div>
      <div>
         <h2 id="portfolio">Portfolio</h2> 
        <FaAngleDoubleDown className={classes.BlockBannerArrow} />
      </div>
    </div>
  )
}

export default BlockBanner