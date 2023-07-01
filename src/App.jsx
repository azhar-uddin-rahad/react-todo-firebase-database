import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputValue,setInputValue]=useState({
    firstName: "",
    lastName: "",
  })
  const handleChange=(e)=>{
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
    console.log(inputValue)

  }

  return (
    <>
     <input type="text" name='firstName' placeholder='Type First Name' onChange={handleChange}/>
     <input type="text" name="lastName" placeholder='Type last Name' onChange={handleChange}/>
     <button>Post</button>

    </>
  )
}

export default App
