import { useState } from 'react'

import './App.css'
import ButtonExample from './components/ButtonExample'
import { SignInForm } from './components/signInForm/SignInForm'
import { LogInForm } from './components/logInForm/LogInForm'

function App() {
  
  return (
    <>
    <div className="p-4 bg-blue-500 text-white">
      Tailwind CSS is working!
    </div>
    <ButtonExample/>
    <SignInForm />
    <LogInForm/>
    </>
  )
}

export default App
