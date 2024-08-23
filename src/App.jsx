import { useState } from 'react'

import './App.css'
import ButtonExample from './components/ButtonExample'
import { SignInForm } from './components/signInForm/SignInForm'

function App() {
  
  return (
    <>
    <div className="p-4 bg-blue-500 text-white">
      Tailwind CSS is working!
    </div>
    <ButtonExample/>
    <SignInForm />
    </>
  )
}

export default App
