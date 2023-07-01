import { useState } from 'react'
import './App.css'
import {getDatabase, onValue, push, ref, remove, set} from 'firebase/database'
function App() {
  const db=getDatabase()
  const [inputValue,setInputValue]=useState({
    firstName: "",
    lastName: "",
  })
  const [infoArr,setInfoArr]=useState([])
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

  useState(()=>{
    const databaseRef=ref(db,'todoReact');
    onValue(databaseRef,(snapshot)=>{
      let arr=[];
        snapshot.forEach(item=>{
          arr.push({...item.val(),id: item.key})
        })
        setInfoArr(arr)
    })
  },[])

  const handleDelete=(id)=>{
    remove(ref(db,'todoReact/' + id))

  }
  return (
    <>
     <input type="text" name='firstName' placeholder='Type First Name' onChange={handleChange}/>
     <input type="text" name="lastName" placeholder='Type last Name' onChange={handleChange}/>
     <button onClick={handlePost}>Post</button>
      <ul>{infoArr.map((item,index)=><li key={index}>{item.fName}----{item.lName}---{item.id} <button>Edit</button><button onClick={()=>{handleDelete(item.id)}}>Delete</button></li>)
        
        
        }</ul>
    </>
  )
}

export default App
