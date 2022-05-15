import { Heading, Stack } from "@chakra-ui/react";
import React from "react";
import "./IndexView.css";

import { MetaData } from "../../components/MetaData";

import { BlockAbout } from "./components/about/BlockAbout";
import { BlockBanner } from "./components/banner/BlockBanner";
import { BlockPortfolio } from "./components/portfolio/BlockPortfolio";
import { BlockSeparator } from "./components/separator/BlockSeparator";

export function IndexView() {
  return (
    <>
      <MetaData title="Mat Krol - Portfolio" />
      <BlockBanner />
      <Stack spacing="200px" align="center">
        <BlockPortfolio list={projectList} />
        <Stack spacing={8} align="center">
          <Heading as="h2" id="professional">
            Professional Experience
          </Heading>
          <BlockPortfolio list={experienceList} />
        </Stack>
      </Stack>

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
    src: "ywa/cover.png",
    slug: "yoga-with-ania",
  },
  {
    title: "UWC Poland",
    subtitle: "Static Site",
    tech: "Next.js",
    src: "uwc/cover.png",
    slug: "uwc-poland",
  },
  {
    title: "Portfolio",
    subtitle: "Site",
    tech: "Gatsby",
    src: "portfolio/cover.png",
  },
];

const experienceList = [
  {
    title: "Academy",
    subtitle: "Jun 2021 - now",
    tech: "React, TypeScript, PostgreSQL, Next.js",
    src: "academy/cover.png",
  },
  {
    title: "Seneca Learning",
    subtitle: "Oct 2019 - May 2021",
    tech: "React + Redux, AWS, Node.js, Gatsby",
    src: "seneca/cover.png",
  },
  {
    title: "OneMaths",
    subtitle: "Oct 2018 - Jul 2019",
    tech: "JavaScript, Ruby on Rails, React",
    src: "om/cover.png",
  },
];
