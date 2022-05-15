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
      <BlockPortfolio list={projectList} />
      <h2 id="professional">Professional Experience</h2>
      <BlockPortfolio list={experienceList} />
      <BlockAbout />
      <BlockSeparator />
    </>
  );
}

const projectList = [
  {
    title: "Yoga with Ania",
    subtitle: "Static Site",
    tech: "Next.js",
    src: "ywa/main.png",
  },
  {
    title: "UWC Poland",
    subtitle: "Static Site",
    tech: "Next.js",
    src: "uwc/main.png",
  },
  {
    title: "Portfolio",
    subtitle: "Site",
    tech: "Gatsby",
    src: "camclass",
  },
];

const experienceList = [
  {
    title: "Academy",
    subtitle: "Jun 2021 - now",
    tech: "React, TypeScript, PostgreSQL, Next.js",
    src: "camclass",
  },
  {
    title: "Seneca Learning",
    subtitle: "Oct 2019 - May 2021",
    tech: "React + Redux, AWS, Node.js, Gatsby",
    src: "emmi",
  },
  {
    title: "OneMaths",
    subtitle: "Oct 2018 - Jul 2019",
    tech: "JavaScript, Ruby on Rails, React",
    src: "om/main.png",
  },
];
