import React from "react"

import Signup from "../../ui/signup/Signup"

import * as styles from "./BlockContact.module.css"

function BlockContact() {
  return (
    <div className={styles.BlockContact} id="contact">
      <h2>Contact</h2>
      <p>
        If you have any questions or would like to work on a project with me,
        don't hesitate to drop me a message!
      </p>
      <Signup />
    </div>
  )
}

export default BlockContact
