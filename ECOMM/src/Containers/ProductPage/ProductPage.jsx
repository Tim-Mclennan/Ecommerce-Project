import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { addCart, getPcById } from '../../services/PCs';
import styles from "./ProductPage.module.scss";

const ProductPage = () => {
    // makes an api call that grabs the specific PC from the database using its ID:
    const { id } = useParams();

    //state that updates according to the id that was provided, via the useEffect hook:
    const [PCInfo, setPCInfo] = useState({});

    // state that updates the cart accordingly:
    const [addToCart, setAddToCart] = useState({});

    // refreshes data that is appropriate to the PC id specified in useParams:
    useEffect(() => {
        const productWrapper = async () => {
            const data = await getPcById(id);
            setPCInfo(data);
        };
        productWrapper();
    }, [id])

    // Page was rendering from the bottom of the window - This useEffect hook sets initial window view to the top of the component using 'window.scrollTo(x,y)'.
    useEffect(() => {
        window.scrollTo(0,0);
     }, [])

     // function that handles the user selecting the PC colour:
     const handleChange = (event) => {
        // Targets the name and value of the selected option when the form changes (eg. "colour red"):
        const { name, value } = event.target;
        //sets the cart state to contain all variables of the selected PC (from PCInfo state) and the new selected option:
        setAddToCart({...PCInfo, [name]: (name, value)});
     }

     // Function that will submit  the newly set 'cart' state as an object, while also deleting the 'Colours' array:
     const handleSubmit = async (event) => {
        event.preventDefault();
        delete addToCart['Colours'];
        console.log(addToCart);
        await addCart(addToCart);
     }  

    
  return (
    <>
        <div className={styles.ProductPage}>
            <div className={styles.ProductPage_Photo}>
                <img  className={styles.ProductPage_Photo_Img} src={PCInfo.Image} alt="PC Photo" />
            </div>  
            <div className={styles.ProductPage_Info}>
                <h1 className={styles.ProductPage_Info_Title}>{PCInfo.Brand} {PCInfo.Model}</h1>
                <div className={styles.ProductPage_Info_Block}></div>
                <p className={styles.ProductPage_Info_Price}>${PCInfo.Price}</p>
                <p className={styles.ProductPage_Info_Desc}>{PCInfo.Description}</p>

                <form className={styles.ProductPage_Info_Form} onSubmit={handleSubmit}>
                    <label  className={styles.ProductPage_Info_Label} for="colour">Select Colour: </label>
                    <select className={styles.ProductPage_Info_Colours} id="colour" name="colour" onChange={handleChange}>
                        <option disabled>Select Colour:</option>
                        {PCInfo.Colours && PCInfo.Colours.map((colour, i) => {
                        return <option key={PCInfo.id} value={colour}>{PCInfo.Colours[colour, i]}</option>
                        })};
                    </select>
                    <input type="submit" className={styles.ProductPage_Info_CartBtn} value="Add To Cart"></input>
                </form>

            </div>
        </div>
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
    </>
  )
};

export default ProductPage;