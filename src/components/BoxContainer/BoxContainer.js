import React from 'react'
import styles from './styles.module.css'

export const BoxContainer = ({children}) => {
    return <div className={styles.container}>
        {children}
    </div>

}