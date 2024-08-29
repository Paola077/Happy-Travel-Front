
import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { DestinationsProvider } from './context/DestinationsContext';

function App() {

  return (
    <React.StrictMode> 
      <DestinationsProvider>
        <RouterProvider router={router}/>
      </DestinationsProvider>
    </React.StrictMode> 
  )
}

export default App
