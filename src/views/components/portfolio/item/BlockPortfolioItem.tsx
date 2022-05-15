import classnames from "classnames";
import React from "react";

//@ts-ignore
import * as styles from "./BlockPortfolioItem.module.css";

type Props = {
  image: string;
  heading: string;
  subheading: string;
  tech: string;
};

export function BlockPortfolioItem({
  image,
  heading,
  subheading,
  tech,
}: Props) {
  return (
    <div
      className={classnames(styles.BlockPortfolioItem, {
        [styles.BlockPortfolioItemPolSoc]: image === "polsoc",
        [styles.BlockPortfolioItemEmmi]: image === "emmi",
        [styles.BlockPortfolioItemMetro]: image === "metro",
        [styles.BlockPortfolioItemCamClass]: image === "camclass",
        [styles.BlockPortfolioItemBrainliens]: image === "brainliens",
        [styles.BlockPortfolioItemMasternotes]: image === "masternotes",
        [styles.BlockPortfolioItemEmmiMobile]: image === "emmi-mobile",
      })}
    >
      <div className={styles.BlockPortfolioItemContent}>
        <h2>{heading}</h2>
        <span>{subheading}</span>
        <p>{tech}</p>
      </div>
    </div>
  );
}
