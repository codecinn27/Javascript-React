import { useState } from 'react'
import './App.css'
import UsernameForm from './UsernameForm'
import SignupForm from './SignupForm';
import SignupFormV2 from './SignupFormV2';
function App() {

  return (
    <>
      <UsernameForm />
      <SignupForm />
      <SignupFormV2 />
    </>
  )
}

export default App
