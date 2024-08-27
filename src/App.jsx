// import { useState } from 'react'
import React from 'react';
import './App.css';
// import ButtonExample from './components/ButtonExample'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

function App() {

  return (
    <React.StrictMode> 
    <RouterProvider router={router}/>
    {/* <div className="p-4 bg-blue-500 text-white">
      Tailwind CSS is working!
    </div>
    <ButtonExample/> */}
    
    </React.StrictMode> 
  )
}

export default App
