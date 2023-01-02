import React from 'react'
import styles from "./CartPayment.module.scss";

const CartPayment = ({ totalItems }) => {


  return (
    <div className={styles.Payment}>
        <p className={styles.Payment_Header}>ORDER SUMMARY</p>
        <p>Total Items: {totalItems}</p>
        <form>
            <label></label>
        </form>
        <button>Place Order</button>
    </div>
  )
}

export default CartPayment