import { useState } from 'react'
import './App.css'
import {getDatabase, push, ref, set} from 'firebase/database'
function App() {
  const db=getDatabase()
  const [inputValue,setInputValue]=useState({
    firstName: "",
    lastName: "",
  })
  const handleChange=(e)=>{
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value
    })
  }

  const handlePost=()=>{
    set(push(ref(db,'todoReact')),{
      fName: inputValue.firstName,
      lName: inputValue.lastName
    })
   
  }
  return (
    <>
     <input type="text" name='firstName' placeholder='Type First Name' onChange={handleChange}/>
     <input type="text" name="lastName" placeholder='Type last Name' onChange={handleChange}/>
     <button onClick={handlePost}>Post</button>

    </>
  )
}

export default App
