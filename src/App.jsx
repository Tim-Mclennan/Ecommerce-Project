// REACT libraries:
import { useState,useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components/Containers import:
import Header from './Components/Header/Header';
import CarouselComponent from './Components/Carousel/Carousel';
import HomeGrid from './Containers/HomeGrid/HomeGrid';
import  Cart from './Containers/Cart/Cart';
import ProductPage from './Containers/ProductPage/ProductPage';

// services:
import { getAllPCs } from './services/PCs';
import 'boxicons';


function App() {

  // state containing data on all PCs:
  const [PCs, setPCs] = useState([]);

  // renders all PC data once page is rendered after initialising:
    useEffect(() => {
      const wrapper = async () => {
        const allPCs = await getAllPCs();
        setPCs(allPCs);
      };
      wrapper();
    }, [])

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <CarouselComponent />
              <HomeGrid PCs={PCs}/>
            </>
          }/>
          <Route path="/product/:id" element={<ProductPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App;
