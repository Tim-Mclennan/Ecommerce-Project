import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from "./ComputerCard.module.scss";

const ComputerCard = ({ pc }) => {
  return (
        <NavLink style={{textDecoration: 'none'}} to={`/product/${pc.id}`}>
            <div className={styles.ComputerCard}>
                <div className={styles.ComputerCard_Content}>
                    <img className={styles.ComputerCard_Img} alt="PC" src={pc.Image}/>
                    <h4 className={styles.ComputerCard_Title}>{pc.Brand} {pc.Model}</h4>
                    <h3 className={styles.ComputerCard_Price}>${pc.Price}</h3>
                </div>
                <div className={styles.ComputerCard_Btns}>
                    <button className={styles.ComputerCard_Btns_MoreInfoBtn}>More Info</button>
                </div>
            </div>
        </NavLink>
  )
}

export default ComputerCard;