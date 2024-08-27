// import { useState } from 'react'
import React from 'react';
import './App.css';
// import ButtonExample from './components/ButtonExample'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import DestinationCardUser from './components/card/DestinationCardUser';
import HeaderUser from './components/header/HeaderUser';
import images from "../public/assets/images.jpg";


function App() {

  return (
    <React.StrictMode> 
    <RouterProvider router={router}/>
    <HeaderUser/>
    <DestinationCardUser
            imageSrc={images}
            title="Islas Azores"
            subtitle="Portugal"/>
           
    {/* <div className="p-4 bg-blue-500 text-white">
      Tailwind CSS is working!
    </div>
    <ButtonExample/> */}
    
    </React.StrictMode> 
  )
}

export default App
