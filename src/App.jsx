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
    </React.StrictMode> 
  )
}

export default App
