import React from 'react'
import styles from "./ProductSpecs.module.scss";

const ProductSpecs = ({ PCInfo }) => {
  return (
    <div>
         <div className={styles.Specs}>
            <h1 className={styles.Specs_Header}>Specifications</h1>
            <table className={styles.Specs_Table}>
                <tr>
                    <td>Brand: </td>
                    <td>{PCInfo.Brand}</td>
                </tr>
                <tr>
                    <td>Model: </td>
                    <td>{PCInfo.Model}</td>
                </tr>
                <tr>
                    <td>CPU: </td>
                    <td>{PCInfo.CPU}</td>
                </tr>
                <tr>
                    <td>GPU: </td>
                    <td>{PCInfo.GPU}</td>
                </tr>
                <tr>
                    <td>RAM: </td>
                    <td>{PCInfo.RAM}</td>
                </tr>
                <tr>
                    <td>Storage Capacity: </td>
                    <td>{PCInfo.Storage}</td>
                </tr>
            </table>
        </div>
    </div>
  )
}

export default ProductSpecs