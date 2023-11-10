import React from 'react'
import ComputerCard from '../../Components/ComputerCard/ComputerCard';
import styles from "./HomeGrid.module.scss";

const HomeGrid = ({ PCs }) => {
  return (
    <div>
        <h1 className={styles.Header}>Welcome to Tim's Computers!</h1>
        <p className={styles.Para}>Shop for great deals on top quality PCs.</p>
        <div className={styles.HomeGrid}>
            {PCs && PCs.map((pc) => {
                return <ComputerCard key={pc.id} pc={pc}/>
            })}
        </div>
    </div>
  )
}

export default HomeGrid;