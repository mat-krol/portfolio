import React from 'react'

import classes from './BlockAbout.module.css'
import Progress from '../../ui/progress/Progress';

function BlockAbout(props) {
  return (
    <div className={classes.BlockAbout} id="about">
      <h2>About</h2>
      <div className={classes.BlockAboutCopy}>
        <span>I have 1 year of professional experience in using React to create responsive web apps and prototypes.</span>
        <span>And 3 years of non-professional experience in using WordPress, HTML, CSS and Photoshop to create simple static pages.</span>
        {/* <p>My prior experience includes creating WordPress sites and web graphics for student societies</p> */}
      </div>
      <div className={classes.BlockAboutContent}>
        <Progress title="HTML5" width="90%" />
        <Progress title="CSS3" width="80%" />
        <Progress title="JavaScript" width="55%" />
        <Progress title="React" width="50%" />
        <Progress title="Gatsby" width="60%" />
        <Progress title="WordPress" width="80%" />
        <Progress title="UX/UI" width="50%" />
        <Progress title="Photoshop" width="90%" />
      </div>
    </div>
  )
}

export default BlockAbout