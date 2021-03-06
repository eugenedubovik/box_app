import React, { useEffect, useRef } from 'react'
import styles from './styles.module.css'

export const Input = ({value, onChange, autoFocus = false}) => {
    
    const onChangeHandler = (event) => {
        onChange(event.target.value)
    }
    const inputRef = useRef(null)

    useEffect(() => {
        if(autoFocus) {
           inputRef.current.focus()
        }
    }, [autoFocus])
   
    return <input type="search" ref={inputRef} className={styles.input} value={value} onChange={onChangeHandler} />
            
}