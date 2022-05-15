import React from "react";

//@ts-ignore
import * as styles from "./Progress.module.css";

type Props = { title: string; width: string };

export function Progress({ title, width }: Props) {
  return (
    <div className={styles.ProgressHolder}>
      <span>{title}</span>
      {/* <div className={styles.Progress} style={{ background: `linear-gradient(90deg, #fff ${width}%, #2442bd ${width}%, #2442bd calc(${width}% + 2px), #fff calc(${width}% + 2px)` }}> */}
      <div className={styles.Progress}>
        <div className={styles.ProgressBar} style={{ width }} />
      </div>
      <span>{width}</span>
    </div>
  );
}
