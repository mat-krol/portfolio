import React from 'react'
import classes from './BlockSeparator.module.css'

function BlockSeparator(props) {
  if (props.triangle) {
    return (
      <div className={classes.BlockSeparatorHolder}>
        <svg viewBox="0 0 1200 300"  className={classes.BlockSeparator} preserveAspectRatio="none">
          <defs>
            <clipPath id="_clipPath_mN1cZdwAGGcYFGZO1uBwrrBeliFO0QWh">
              <rect width="1200" height="300"/>
            </clipPath>
          </defs>
            <g clip-path="url(#_clipPath_mN1cZdwAGGcYFGZO1uBwrrBeliFO0QWh)">
              <polygon points="1220,310,-20,310,600,0" fill="rgb(255,255,255)" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5"/>
            </g>
        </svg>
        <h2 className={classes.BlockSeparatorText} id="#portfolio">Portfolio</h2>
      </div>
    )
  } else if (props.wave) {
    return (
      <div className={classes.BlockSeparatorHolder}>
        <svg viewBox="0 0 1050 90"  className={classes.BlockSeparator} preserveAspectRatio="none">
          <defs>
            <clipPath id="_clipPath_qDwIPkv1w9CWXokr2uuXreQN8YzRvHrU">
              <rect width="1050" height="90"/>
            </clipPath>
          </defs>
          <g clip-path="url(#_clipPath_qDwIPkv1w9CWXokr2uuXreQN8YzRvHrU)">
            <path d=" M 0 45 C 57.724 102.724 91.95 103.05 150 45 C 208.05 -13.05 242.276 -12.724 300 45 C 357.724 102.724 389.512 105.488 450 45 C 510.488 -15.488 541.192 -13.808 600 45 C 658.808 103.808 692.601 102.399 750 45 C 807.399 -12.399 843.278 -11.722 900 45 C 956.722 101.722 990.108 104.892 1050 45" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/>
          </g>
        </svg>
        <h2 className={classes.BlockSeparatorText} id="#portfolio">Portfolio</h2>
      </div>
    )
  } else {
    return (
      <div className={classes.BlockSeparatorHolder}>
        <svg viewBox="0 0 1200 250"  className={classes.BlockSeparator} preserveAspectRatio="none">
          <defs>
            <clipPath id="_clipPath_rrO3p6oswYn16OxuRyK4aYyqjvHaF3uw">
              <rect width="1200" height="250"/>
            </clipPath>
          </defs>
          <g clip-path="url(#_clipPath_rrO3p6oswYn16OxuRyK4aYyqjvHaF3uw)">
            <path d=" M 0 124 C 169.026 282.685 178.136 286.18 400 124 C 621.864 -38.18 578.864 -41.6 800 124 C 1021.136 289.6 987.535 285.938 1200 124" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="3"/>
          </g>
        </svg>
        <h2 className={classes.BlockSeparatorText} id="#portfolio">Contact</h2>
      </div>
    )
  }
}

export default BlockSeparator