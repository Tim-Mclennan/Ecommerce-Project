// In this file, you will create all the functions youll need in oredr to create, read, update and delete data from firestore. 

import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, increment, updateDoc, setDoc } from "firebase/firestore"; 
import { db } from "./Firestore.js";

// Function that gets all PC information from Firestore database:
export const getAllPCs = async () => {

    const collectionRef =  collection(db, "PCs");
    const querySnapshot = await getDocs(collectionRef);

    const data = querySnapshot.docs.map((doc) => {
        const id = doc.id;
        const restOfData = doc.data();

        return { id, ...restOfData};
    });

    console.log(data);
    return data;
}

// function below retrieves a single document using the  get method and the ID:
    export const getPcById = async (id) => {
        const docRef = doc(db, "PCs", id);
        const docSnap = await getDoc(docRef);

        if(!docSnap.exists()) {
            throw new Error("Product not found!");
        } 
        return {id: docSnap.id, ...docSnap.data()};
    };
    

// CART FUNCTIONS:
// function belows adds a document to the 'Cart' collection from ProductPage.jsx:
    // export const addCart = async (data) => {
    //     const collectionRef = collection(db, "Cart");
    //     const newDoc = await addDoc(collectionRef, data);
    //     return newDoc;
    // };

    export const addCart = async (id, data) => {
        const docRef = doc(db, "Cart", id);
        const newDoc = await setDoc(docRef, data)
        return newDoc;
    };

// The function below gets 'Cart' collection for the Cart.jsx component:
    export const getCartData = async () => {

        const collectionRef =  collection(db, "Cart");
        const querySnapshot = await getDocs(collectionRef);

        const data = querySnapshot.docs.map((doc) => {
            const id = doc.id;
            const restOfData = doc.data();

            return { id, ...restOfData };
        });

        console.log(data);
        return data;
    };

// This function will remove a product from the Cart:
export const deleteCartItem = async (id) => {
    const docRef = doc(db, "Cart", id);
    await deleteDoc(docRef);
    console.log("Item was removed", id);
};

// This function will increment a products quantity when called upon: 


// This function will decrement a products quantity when called upon: 




// This function will add a new document to the 'Purchased' collection when a user checks out:
