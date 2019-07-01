import React from 'react'
import classes from './BlockSeparator.module.css'

function BlockSeparator(props) {
  return (
    <div className={classes.BlockSeparatorHolder} style={{ transform: props.rotated ? "rotate(180deg) scaleX(-1)" : "rotate(0)"}}>
      <svg viewBox="0 0 1100 300" className={classes.BlockSeparator} preserveAspectRatio="none">
        <defs>
          <clipPath id="_clipPath_zYpNHjHQEzDhmPJpokdxYw0hlx8Alyao">
            <rect width="1100" height="300" />
          </clipPath>
        </defs>
        <g clip-path="url(#_clipPath_zYpNHjHQEzDhmPJpokdxYw0hlx8Alyao)">
          {/* <rect x="0" y="0" width="550" height="300" transform="matrix(1,0,0,1,0,0)" fill="rgb(255,255,255)" /> */}
          {/* <rect x="550" y="0" width="550" height="300" transform="matrix(1,0,0,1,0,0)" fill="rgb(243,243,243)" /> */}
          <polygon points="1100,300,0,300,550,0" fill="#2442bd" />
        </g>
      </svg>
    </div>
  )
}

export default BlockSeparator