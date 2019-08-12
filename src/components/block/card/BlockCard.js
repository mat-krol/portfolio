import React from 'react'
import classes from './BlockCard.module.css'
import { MdClear } from "react-icons/md";

function BlockCard(props) {
  return (
    <div className={className(props)}>
      <div className={imageClassName(props.image)} />
      <MdClear className={classes.BlockCardClose} onClick={props.handleClose} />
    </div>
  )
}

const className = props => {
  const arr = [classes.BlockCard]
  props.show ? arr.push(classes.BlockCardShow) : arr.push(classes.BlockCardHide);
  return arr.join(' ')
}

const imageClassName = image => {
  const arr = [classes.BlockCardImage]
  image === "emmi" && arr.push(classes.BlockPortfolioItemEmmi);
  image === "metro" && arr.push(classes.BlockPortfolioItemMetro);
  image === "polsoc" && arr.push(classes.BlockPortfolioItemPolSoc);
  image === "camclass" && arr.push(classes.BlockPortfolioItemCamClass);
  image === "brainliens" && arr.push(classes.BlockPortfolioItemBrainliens);
  image === "masternotes" && arr.push(classes.BlockPortfolioItemMasternotes);
  image === "emmi-mobile" && arr.push(classes.BlockPortfolioItemEmmiMobile);
  return arr.join(' ')
}

export default BlockCard