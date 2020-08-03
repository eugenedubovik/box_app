import React from 'react'
import styles from './styles.module.css'

export const Box = ({children}) => {
    return <div className={styles.box}>
            {children}
           </div>
}