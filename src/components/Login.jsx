import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom';


const Login = (props) => {
  const navigate = useNavigate();
    const[x,setx]=useState({
        user : "",
        pass : ""
    });

    const funct=(e)=>{
        setx({
            ...x,[e.target.name] : e.target.value
        })
    }

    const ft=()=>{
       navigate('/register');
    }

    const fun=async ()=>{
       const {pass,user} = x;
       console.log(pass+" "+user);
       const res =await axios.get(`http://localhost:5555/user?id=${user}&word=${pass}`);
       
       if(res.data.success === true){
          props.bit();
          navigate('/');
          return;
       }

       window.alert("no user");
        
       
      }

    
  return (
    <>
    <div>login</div>
    <input type="text" name='user' value={x.user} onChange={funct}/><br/>
    <input type="text" name = 'pass' value={x.pass} onChange={funct}/><br/>
    <button className='bg-red-600 border-black align-middle w-12' onClick={fun}>Click</button>
    <button className='bg-red-600 border-black align-middle w-12' onClick={ft}>Register</button>
    

    </> 
  )
}

export default Login