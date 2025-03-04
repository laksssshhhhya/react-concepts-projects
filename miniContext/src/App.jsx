import { useState } from 'react'
import './App.css'
import Usercontextprovider from './context/Usercontextprovider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {

  return (
    <Usercontextprovider>
      <h1>Context Api</h1>
      <Login></Login>
      <Profile/>
    </Usercontextprovider>
  )
}

export default App
