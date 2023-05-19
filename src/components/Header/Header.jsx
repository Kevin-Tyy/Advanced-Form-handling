import React from 'react'
import styles from './Header.module.css'
import { AiOutlineMenu } from "react-icons/ai"
const Header = () => {
  return (
    <div className={styles.header}>
        <h1 className={styles.h1}>
            Special car offers
        </h1>
        <ul>
          <li>Offers</li>
          <li>Prices</li>
          <li>Contact</li>
          <li>Discount</li>
          <li>More</li>
        </ul>
        <div className={styles.icon} style={{color : 'white', fontSize : '25px' , cursor : 'pointer'}}>
          <AiOutlineMenu/>
        </div>
    </div>
  )
}

export default Header