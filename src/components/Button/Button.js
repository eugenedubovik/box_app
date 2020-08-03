import React from 'react'
import styles from './styles.module.css'

export const Button = ({onClick, children}) =>{
    return <button className={styles.button}
                   onClick={onClick}>
        {children}
    </button>
}