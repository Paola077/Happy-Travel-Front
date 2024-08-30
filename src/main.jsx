import React from "react";
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from "@material-tailwind/react";
import App from './App.jsx'
import './index.css'
import { AuthProvider } from "./auth/AuthWrapper.jsx";

createRoot(document.getElementById('root')).render(
  
    <AuthProvider>
      <App />
    </AuthProvider>
)
