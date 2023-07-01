import { useState } from 'react'
import './App.css'
import {getDatabase, onValue, push, ref, remove, set, update} from 'firebase/database'
function App() {
  const db=getDatabase()
  const [inputValue,setInputValue]=useState({
    firstName: "",
    lastName: "",
  })
  const [infoArr,setInfoArr]=useState([]);
  const [id,setId]=useState("");

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
  const handleEdit=(item)=>{
    setInputValue({
      firstName: item.fName,
      lastName: item.lName
    })
    setId(item.id)
  }

const handleUpdate=()=>{

  update(ref(db,'todoReact/' + id),{
    fName: inputValue.firstName,
    lName:inputValue.lastName
  })

  
}
  return (
    <>
     <input type="text" name='firstName' placeholder='Type First Name' onChange={handleChange} value={inputValue.firstName}/>
     <input type="text" name="lastName" placeholder='Type last Name' onChange={handleChange} value={inputValue.lastName}/>
     <button onClick={handlePost}>Post</button>
     <button onClick={handleUpdate}>Update</button>
      <ul>{infoArr.map((item,index)=><li key={index}>{item.fName}----{item.lName}---{item.id} <button onClick={()=>{handleEdit(item)}}>Edit</button><button onClick={()=>{handleDelete(item.id)}}>Delete</button></li>)
         }</ul>
    </>
  )
}

export default App
