import React from "react"

import * as styles from "./BlockAbout.module.css"
import Progress from "../../ui/progress/Progress"

export default function BlockAbout() {
  return (
    <div className={styles.BlockAbout} id="about">
      <h2>About</h2>
      <div className={styles.BlockAboutCopy}>
        <span>
          I have 2.5 years of professional experience in using React to create
          responsive web apps and prototypes.
        </span>
        <span>
          And 1.5 years of professional experience in using node.js to build
          backend services.
        </span>
      </div>
      <div className={styles.BlockAboutContent}>
        <Progress title="JavaScript" width="55%" />
        <Progress title="React" width="50%" />
        <Progress title="Node.js" width="50%" />
        <Progress title="Gatsby" width="60%" />
        <Progress title="UX/UI" width="50%" />
        <Progress title="Photoshop" width="90%" />
        <Progress title="Figma" width="80%" />
      </div>
    </div>
  )
}
