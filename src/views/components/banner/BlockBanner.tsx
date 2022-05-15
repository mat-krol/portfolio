import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

import * as styles from "./BlockBanner.module.css";

export function BlockBanner() {
  return (
    <div className={styles.BlockBanner}>
      <div className={styles.BlockBannerNav}>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <h1>
          Hi! My name is <span>Mat Krol</span>
        </h1>
        <p>
          I'm a web designer & front end developer with a passion for clean and
          usable design
        </p>
      </div>
      <div>
        <h2 id="portfolio">Portfolio</h2>
        <FaAngleDoubleDown className={styles.BlockBannerArrow} />
      </div>
    </div>
  );
}
