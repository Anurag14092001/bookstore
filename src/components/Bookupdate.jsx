import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const Bookupdate = () => {

  const nameref = React.createRef();
  const name2ref = React.createRef();
  const authorref = React.createRef();
  const yearref = React.createRef();
  const[x,setx]=useState({
    name: "",
    id: "",
  
    is : false,
    name2: "",
    author: "",
    year: ""

  })

  const f1 = (e)=>{
    setx({
      ...x,[e.target.name]: e.target.value
    })
  }

  const f2=async()=>{
    const {name} =x;
    const y = await axios.get(`http://localhost:5555/book/pootis/${name}`);
    
    if(y.data.success===true && y.data.data.length ==0){
      window.alert("No such book exists");
      return;
    }


    setx({...x,is:true,id: y.data.data[0]._id});


  }

  const f3 = async ()=>{
    const id = x.id;
    const newbook = {

      title : x.name2,
      author : x.author,
      year : x.year
    }

    const conf = await axios.put(`http://localhost:5555/book/${id}`,newbook);
    setx({
     name: "",
     id: "",
     is: false,
     name2: "",
     year: "",
     author: ""
    });

    nameref.current.value ="";
    name2ref.current.value ="";
    authorref.current.value = "";
    yearref.current.value = "";
    console.log(conf);
    if(conf.data.message==="found"){
      window.alert("Update successful");
      return;
    }


  }

  return (
    <>
    <div>Bookupdate</div>
     <input name='name' ref ={nameref}  value={x.name} onChange={f1}/>
     
     <button name='check' onClick={f2}>find</button>
     
     {x.is &&
     (<><div>New details</div>
     <div style={{flex : "display",flexDirection: "column"}}>
     <input name='name2' ref={name2ref} value={x.name2} onChange={f1}/>
     <input name='author' ref={authorref} value={x.author} onChange={f1}/>
     <input name='year' ref={yearref} value={x.year} onChange={f1}/>
     <button name='check2' onClick={f3}>clix</button>
     </div></>
     
     )


     }
     
     </>
  )
}

export default Bookupdate