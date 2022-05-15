import React from "react";
import { FaAngleDoubleDown } from "react-icons/fa";

//@ts-ignore
import * as styles from "./BlockBanner.module.css";

export function BlockBanner() {
  return (
    <div className={styles.BlockBanner}>
      <div className={styles.BlockBannerNav}>
        <a href="#projects">Personal Projects</a>
        <a href="#professional">Professional Experience</a>
        <a href="#about">About</a>
      </div>
      <div>
        <h1>
          Hi! My name is <span>Mat Krol</span>
        </h1>
        <p>
          I'm a full stack engineer with a passion for clean and usable design
        </p>
      </div>
      <div>
        <h2 id="projects">Personal Projects</h2>
        <FaAngleDoubleDown className={styles.BlockBannerArrow} />
      </div>
    </div>
  );
}
