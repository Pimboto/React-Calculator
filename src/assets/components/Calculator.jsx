import React from 'react'
import Board from './Board'
import Screen from './Screen'
import styles from '../css/calculator.module.css'


export const Calculator = () => {
  return (
    <div className={styles.calculator}>

    <Screen/>
    <Board/>

    </div>
  )
}
