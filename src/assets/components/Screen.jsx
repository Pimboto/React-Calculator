import React from 'react'
import styles from '../css/screen.module.css'

const Screen = () => {
  return (
    <div className={styles.screen}>

      <div className={styles.mode}>
        <span className={styles.containerBtn}>
          <button className={`${styles.modeBtn} ${styles.modeLight}`}>☀</button>
          <button className={`${styles.modeBtn} ${styles.modeDark}`}>🌙</button>
        </span>
      </div>

    </div>
  )
}

export default Screen