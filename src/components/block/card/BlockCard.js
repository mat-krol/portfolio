import React from 'react'
import classes from './BlockCard.module.css'

function BlockCard(props) {
  return (
    <div className={className(props)}>
      <div className={imageClassName(props.image)} />
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
  image === "polsoc" && arr.push(classes.BlockPortfolioItemPolSoc);
  image === "emmi" && arr.push(classes.BlockPortfolioItemEmmi);
  image === "camclass" && arr.push(classes.BlockPortfolioItemCamClass);
  image === "brainliens" && arr.push(classes.BlockPortfolioItemBrainliens);
  image === "masternotes" && arr.push(classes.BlockPortfolioItemMasternotes);
  image === "emmi-mobile" && arr.push(classes.BlockPortfolioItemEmmiMobile);
  return arr.join(' ')
}

export default BlockCard