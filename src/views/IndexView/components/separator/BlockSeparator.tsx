import React from "react";

//@ts-ignore
import * as styles from "./BlockSeparator.module.css";

type Props = { title?: string };

export function BlockSeparator({ title }: Props) {
  // if (props.triangle) {
  //   return (
  //     <div className={styles.BlockSeparatorHolder}>
  //       <svg viewBox="0 0 1200 300"  className={styles.BlockSeparator} preserveAspectRatio="none">
  //         <defs>
  //           <clipPath id="_clipPath_R69NnAnFkb29WQ4xcTIKdoItPSEWyCPn">
  //             <rect width="1200" height="300" />
  //           </clipPath>
  //         </defs>
  //         <g clip-path="url(#_clipPath_R69NnAnFkb29WQ4xcTIKdoItPSEWyCPn)">
  //           {/* <polygon points="1242.857,300,-42.857,300,600,0" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="2807.143,1010,-1607.143,1010,600,-20" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="2807.143,990,-1607.143,990,600,-40" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="2807.143,970,-1607.143,970,600,-60" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="2807.143,950,-1607.143,950,600,-80" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="2807.143,930,-1607.143,930,600,-100" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="2807.143,910,-1607.143,910,600,-120" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="2807.143,890,-1607.143,890,600,-140" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="2807.143,870,-1607.143,870,600,-160" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="2807.143,850,-1607.143,850,600,-180" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="2807.143,830,-1607.143,830,600,-200" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="1200,300,0,300,600,20" fill="rgb(36,66,189)" />
  //           <polygon points="2807.143,810,-1607.143,810,600,-220" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="2807.143,790,-1607.143,790,600,-240" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" />
  //           <polygon points="2807.143,770,-1607.143,770,600,-260" fill="none" vector-effect="non-scaling-stroke" stroke-width="1" stroke="rgb(36,66,189)" stroke-linejoin="miter" stroke-linecap="square" stroke-miterlimit="5" /> */}
  //           <polygon points="1200,300,0,300,600,20" fill="rgb(36,66,189)" />
  //         </g>
  //       </svg>
  //       <h2 className={styles.BlockSeparatorText} id={`#${props.title}`}>{props.title}</h2>
  //     </div>
  //   )
  // } else if (props.wavelet) {
  //   return (
  //     <div className={styles.BlockSeparatorHolder}>
  //       <svg viewBox="0 0 1050 90"  className={styles.BlockSeparator} style={{ height: "100px" }}preserveAspectRatio="none">
  //         <defs>
  //           <clipPath id="_clipPath_qDwIPkv1w9CWXokr2uuXreQN8YzRvHrU">
  //             <rect width="1050" height="90"/>
  //           </clipPath>
  //         </defs>
  //         <g clipPath="url(#_clipPath_qDwIPkv1w9CWXokr2uuXreQN8YzRvHrU)">
  //           <path d=" M 0 45 C 57.724 102.724 91.95 103.05 150 45 C 208.05 -13.05 242.276 -12.724 300 45 C 357.724 102.724 389.512 105.488 450 45 C 510.488 -15.488 541.192 -13.808 600 45 C 658.808 103.808 692.601 102.399 750 45 C 807.399 -12.399 843.278 -11.722 900 45 C 956.722 101.722 990.108 104.892 1050 45" fill="none" vector-effect="non-scaling-stroke" strokeWidth="1" stroke={props.color} strokeLinejoin="miter" strokeLinecap="square" strokeMiterlimit="3"/>
  //         </g>
  //       </svg>
  //       <h2 className={styles.BlockSeparatorText} id={`#${props.title}`}>{props.title}</h2>
  //     </div>
  //   )
  // } else if (props.wave) {
  return (
    <svg
      viewBox="0 0 1200 250"
      className={styles.BlockSeparator}
      preserveAspectRatio="none"
    >
      <defs>
        <clipPath id="_clipPath_rrO3p6oswYn16OxuRyK4aYyqjvHaF3uw">
          <rect width="1200" height="250" />
        </clipPath>
      </defs>
      <g clipPath="url(#_clipPath_rrO3p6oswYn16OxuRyK4aYyqjvHaF3uw)">
        <path
          d=" M 0 124 C 169.026 282.685 178.136 286.18 400 124 C 621.864 -38.18 578.864 -41.6 800 124 C 1021.136 289.6 987.535 285.938 1200 124"
          fill="none"
          vector-effect="non-scaling-stroke"
          strokeWidth="1"
          stroke="#2442bd"
          strokeLinejoin="miter"
          strokeLinecap="square"
          strokeMiterlimit="3"
        />
      </g>
    </svg>
  );
}
