import React from 'react'
import { useState, useEffect } from 'react';
import { deleteCartItem } from '../../services/PCs';
import styles from "./CartCard.module.scss";

const CartCard = ({ pc, removeItem, setRemoveItem, totalItems, setTotalItems, totalPrice, setTotalPrice }) => {

    // State that tracks the individual product quantity. I had to move the state inside this component, as it would end up changing the state for all the otehr cards aswell:
    const [productQuantity, setProductQuantity] = useState(0);

    //useEffect hook that will keep track of qty additions to the subtotal:
    useEffect(() => {
    const updateCartTotal = () => {
      setTotalItems(totalItems += productQuantity);
      setTotalPrice(totalPrice += pc.price);
    };
    updateCartTotal();
}, [productQuantity]);


    //handles the change in a product's quantity:
    const handleQtyChange = (event) => {
        console.log(event.target.value);
        // Using parseInt method as the value is a string by default.
        const qty = parseInt(event.target.value);
        setProductQuantity(qty);
        // setTotalItems(totalItems += productQuantity);
        // console.log(totalItems);
    };

    // function that deletes a cart item when "remove" is triggered:
    const handleRemove = async () => {
        await deleteCartItem(pc.id)
        setRemoveItem(removeItem + 1);
    };

  return (
    <div className={styles.Product}>
        <div className={styles.Product_Info}>
            <div className={styles.Product_Info_Img}><img className={styles.Product_Info_Img_Link} src={pc.Image}/></div>
            <div className={styles.Product_Info_Details}>
                <div className={styles.Product_Info_Details_Title}>{pc.Brand} {pc.Model}</div>
                <div className={styles.Product_Info_Details_Colour}>Colour: {pc.colour}</div>
            </div>
        </div>
        <div className={styles.Product_Metrics}>
            <div className={styles.Product_Metrics_Quantity}>
                <form>
                    <label for="quantity">Qty: </label>
                    <select id="quantity" name="qty" onChange={handleQtyChange}>
                        <option selected>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </form>
                <button className={styles.Product_Metrics_Quantity_Remove} onClick={handleRemove}>Remove</button>
            </div>
            <div>
                <p>${pc.Price}</p>
            </div>
            <div>
                <p>${productQuantity ? pc.Price * productQuantity : pc.Price}</p>
            </div>
        </div>

    </div>
  )
}

export default CartCard