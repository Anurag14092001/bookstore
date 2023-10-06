import axios from 'axios';
import React, { useState,useRef } from 'react'


const Bookadd = () => {
    const nameref = React.createRef();
    const authorref = React.createRef();
    const yearref = React.createRef();
    
    const[x,setx]=useState({
      name: "",
      author: "",
      year: ""
    });
    const func=(e)=>{

      setx({...x,[e.target.name]: e.target.value});
    }

    const  func1=async (e)=>{
      e.preventDefault();
       const {name,author,year} = x;
       
       console.log(name);
       console.log(author);
       console.log(year);
       const p = await axios.post('http://localhost:5555/book',{title :name,author: author,year: year});
       setx({
        name:"",
        author:"",
        year:""

       });
       
       nameref.current.value="";
       authorref.current.value="";
       yearref.current.value="";
       
       if(p.status==500){
        window.alert("Not entered");
        return
       }

       if(p.status==400){
        window.alert("please enter all the fields");
        return
       }
       window.alert("entered");
       


}
  return (
    <>
    <div > Enter the name of book:
    <input name='name' ref={nameref} value={x.name} type="text" onChange={func}/><br/>
    </div>
    <div > Enter the name of author :
    <input name='author' ref={authorref} value={x.author} type="text" onChange={func}/><br/>
    </div>
    <div > Enter the year of publishing:
    <input name='year' ref={yearref} value={x.year} type="text" onChange={func}/><br/>
    </div>
    <button className='bg-red-600 border-black align-middle w-12' onClick={func1}>Click</button>
    </>
  )
}

export default Bookadd