import React from 'react'
import styles from '../css/screen.module.css'

const Screen = () => {
  return (
    <div className={styles.screen}>

      <div className={styles.mode}>
        <span className={styles.containerBtn}>
          <button className={`${styles.modeBtn} ${styles.modeLight}`}>
          <i className="fa-solid fa-sun"></i>
          </button>
          <button className={`${styles.modeBtn} ${styles.modeDark}`}>
          <i className="fa-regular fa-moon"></i>
          </button>
        </span>
      </div>
      <div className={styles.operation}>
        308<span className={styles.operador}> × </span>42
      </div>
      <div className={styles.result}>
        12,936
      </div>

    </div>
  )
}

export default Screen