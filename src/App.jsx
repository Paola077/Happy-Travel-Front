import { useState } from 'react'

import './App.css'
import CancelButton from './components/buttons/CancelButton'
import AcceptButton from './components/buttons/AcceptButton'
import PaginationButton from './components/buttons/PaginationButton'
import { SignInForm } from './components/signInForm/SignInForm'
import { LogInForm } from './components/logInForm/LogInForm'
import CommonInput from './components/inputs/CommonInput'

function App() {

  const handleCancel = ()  => {
    alert("Has presionado el botón cancelar.")
  }

  const handleAcept = ()  => {
    alert("Has presionado el botón aceptar.")
  }
  
  return (
    <>
    
    <PaginationButton rotate={"180"}/>
    <SignInForm />
    <LogInForm/>
    </>
  )
}

export default App
