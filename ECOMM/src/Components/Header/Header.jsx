import React from 'react'
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.Header}>
      <NavLink to="/" >
        <div className={styles.Header_Logo}></div>
      </NavLink>
      <div className={styles.Header_Icons}>
        <NavLink to="/Favourites">
          <div className={styles.Header_Icons_Fav}>
            <box-icon color="white" size="md"  name='heart' animation='tada-hover'></box-icon>
          </div>
        </NavLink>
        <NavLink to="/cart">
          <div className={styles.Header_Icons_Cart}>
            <box-icon color="white" size="md" name='cart' animation='tada-hover'></box-icon>
          </div>
        </NavLink>
      </div>
    </div>
  )
}

export default Header