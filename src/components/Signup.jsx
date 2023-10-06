import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const[x,setx]=useState({
        user : "",
        pass : ""
    });
    const funct=(e)=>{
        setx({
            ...x,[e.target.name] : e.target.value
        })
    }

    const navigate = useNavigate();

    const funx=()=>{
      navigate('/login');
    }

    const fun=async ()=>{
      const {user,pass}=x;
      
      const res = await axios.post('http://localhost:5555/user',{id:user,word:pass});
      if(res.data.success==false){
        window.alert(res.data.message);
        return;
      }
      window.alert(res.data.message);


    }
  return (
  
    <>
    
    <div>signup</div>
    <input name='user' value={x.user} onChange={funct}/><br/>
    <input name='pass' value={x.pass} onChange={funct}/><br/>
    <button className='bg-red-600 border-black bg-clip-padding' onClick={fun} >register</button>
    <button className='bg-red-600 border-black bg-clip-padding' onClick={funx} >login</button>
    </>
  )
}

export default Signup