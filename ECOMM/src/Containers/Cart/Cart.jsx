import React, { useEffect } from 'react'
import styles from "./Cart.module.scss";
import { getCartData } from '../../services/PCs';
import { useState } from 'react';
import CartCard from '../../Components/CartCard/CartCard';
import CartPayment from '../../Components/CartPayment/CartPayment';

const Cart = ({}) => {
// State containing Cart data:
const [cart, setCart] = useState([]);

// State that contains item to be removed from cart:
const [removeItem, setRemoveItem] = useState({});

// State that contains the total Item amount for entire cart:
const [totalItems, setTotalItems] = useState(0);

// State that contains the total price for entire cart:
const [totalPrice, setTotalPrice] = useState(0);

// const totalItemCount = productQuantity.reduce((acc, cur) => acc + cur, 0)

// useEffect(() => {
//     const updateCartTotal = () => {
//       setTotalItems(totalItems += productQuantity);
//     };
//     updateCartTotal();
// }, [productQuantity]);

// console.log(cart);

// renders all cart data when intialised and after product is removed:
  useEffect(() => {
    const cartFunction = async () => {
      const cartData = await getCartData();
      setCart(cartData);
      console.log("Useeffect was triggered");
    };
    cartFunction();
  }, [removeItem]);


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
              return (<CartCard className={styles.CartPage_Cart_Card} key={pc.id} pc={pc} cart={cart} setCart={setCart} removeItem={removeItem} setRemoveItem={setRemoveItem} totalItems={totalItems} setTotalItems={setTotalItems} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />)              
            })}
        </div>

        <CartPayment totalItems={totalItems} setTotalItems={setTotalItems} totalPrice={totalPrice} />
      </div>
    </>
  )
};

export default Cart;