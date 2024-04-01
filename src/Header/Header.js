import React from 'react'
import styles from './Header.module.css'

export const Header = () => {

    return <div data-testid="div-test-id" className={`bg-primary text-center text-white ${styles.header} fs`}>My First React Application</div>
}

