import React from 'react'
import { deleteCartItem } from '../../services/PCs';
import styles from "./CartCard.module.scss";

const CartCard = ({ pc, removeItem, setRemoveItem }) => {

    const handleRemove = async () => {
        console.log(pc.id)
        await deleteCartItem(pc.id)
        setRemoveItem(removeItem + 1);
    }   

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
                        <select id="quantity" >
                            {/* {pc } */}
                        </select>
                </form>
                <button className={styles.Product_Metrics_Quantity_Remove} onClick={handleRemove}>Remove</button>
            </div>
            <div>
                <p>${pc.Price}</p>
            </div>
            <div>
                <p>${pc.Price * pc.Quantity}</p>
            </div>
        </div>

    </div>
  )
}

export default CartCard