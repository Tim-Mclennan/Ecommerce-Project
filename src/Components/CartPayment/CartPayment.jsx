import React from 'react'
import styles from "./CartPayment.module.scss";

const CartPayment = ({ totalItems, totalPrice }) => {


  return (
    <div className={styles.Payment}>
        <p className={styles.Payment_Header}>ORDER SUMMARY</p>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: ${totalPrice}</p>
        <form>
            <label></label>
        </form>
        <button className={styles.Payment_OrderBtn}>Place Order</button>
    </div>
  )
}

export default CartPayment