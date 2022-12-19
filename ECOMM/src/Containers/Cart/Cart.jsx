import React, { useEffect } from 'react'
import styles from "./Cart.module.scss";
import { getCartData } from '../../services/PCs';
import { useState } from 'react';
import CartCard from '../../Components/CartCard/CartCard';

const Cart = ({}) => {

// State containing Cart data:
const [cart, setCart] = useState([]);

// renders all PC data once page is rendered after initialising:
  useEffect(() => {
    const wrapper = async () => {
      const cartData = await getCartData();
      setCart(cartData);
    };
    wrapper();
  }, []);

  console.log(cart);

  return (
    <>
      <div className={styles.CartPage}>

        <div className={styles.CartPage_Cart}>
            <h1  className={styles.CartPage_Cart_Header}>Shopping Cart</h1>
            <div className={styles.CartPage_Cart_Line}></div>
            <div className={styles.CartPage_Cart_Categories}>
              <p id={styles.ProductDetails} className={styles.CartPage_Cart_Categories_Para}>Product Details</p>
              <p className={styles.CartPage_Cart_Categories_Para}>Quantity</p>
              <p className={styles.CartPage_Cart_Categories_Para}>Price</p>
              <p className={styles.CartPage_Cart_Categories_Para}>Total</p>      
            </div>
            <div  className={styles.CartPage_Cart_Line}></div>

            {cart && cart.map((pc) => {
              return (<CartCard className={styles.CartPage_Cart_Card} key={pc.id} pc={pc} />)
            })}
        </div>

        <div className={styles.CartPage_Payment}>

        </div>

      </div>
    </>
  )
};

export default Cart;