import React from "react";

//@ts-ignore
import * as styles from "./BlockAbout.module.css";
import { Progress } from "./components/Progress";

export function BlockAbout() {
  return (
    <div className={styles.BlockAbout} id="about">
      <h2>About</h2>
      <div className={styles.BlockAboutCopy}>
        <span>
          I have 4 years of professional experience in using React, TypeScript,
          and Node.js to create full-stack apps and static sites
        </span>
      </div>
      <div className={styles.BlockAboutContent}>
        <Progress title="React" width="75%" />
        <Progress title="JavaScript" width="90%" />
        <Progress title="Next.js" width="75%" />
        <Progress title="TypeScript" width="60%" />
        <Progress title="Gatsby" width="75%" />
        <Progress title="Node.js" width="80%" />
        <Progress title="Figma" width="90%" />
      </div>
    </div>
  );
}
