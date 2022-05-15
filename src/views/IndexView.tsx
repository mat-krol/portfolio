import React from "react";
import "./IndexView.css";

import { MetaData } from "../components/MetaData";

import { BlockAbout } from "./components/about/BlockAbout";
import { BlockBanner } from "./components/banner/BlockBanner";
import { BlockPortfolio } from "./components/portfolio/BlockPortfolio";
import { BlockSeparator } from "./components/separator/BlockSeparator";

export function IndexView() {
  return (
    <>
      <MetaData title="Mat Krol - Portfolio" />
      <BlockBanner />
      <BlockPortfolio />
      <BlockAbout />
      <BlockSeparator />
    </>
  );
}
