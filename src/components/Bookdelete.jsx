import axios from 'axios';
import React from 'react'
import { useState } from 'react'

const Bookdelete = () => {
  const [x,setx]=  useState({
    name : ""
  });
  const fun1 = (e)=>{
    setx({[e.target.name] : e.target.value});
  }

  const fun= async()=>{
      const name = x.name;
      const res = await axios.delete(`http://localhost:5555/book/${name}`);
      console.log(res);
      if(res.data.success===false){
        window.alert("no such book exists");
        return;
      }

      window.alert("deleted the book");
      
  }
  return (
    
    <><div >
      <p >Enter the details</p>
      <input type="text" name="name" onChange={fun1}></input>
      <button name = "del" onClick={fun}>delete</button>
      
      </div></>
  )
}

export default Bookdelete