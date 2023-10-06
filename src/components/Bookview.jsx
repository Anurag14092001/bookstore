import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';

const Bookview = (props) => {
  const [data, setData] = useState([]);
 const navigate = useNavigate();
  const t=(k)=>{
    props.func(k);
    navigate('/Sample');
  }
  
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5555/book");
        console.log(response);
        if (response.data.message === "found") {
          setData(response.data.data);
          ;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  },[]);

  

  return (
    <>
    
      {data.map((book) => (
        
        <button onClick={()=>{t(book._id);}} key={book._id} className={`bg-blue-500 m-5 inline-block`} > 
           <p className='text-center text-white font-sans'> 
           Name: {book.name} </p>
           <p className='text-center text-white font-sans'> 
           Author: {book.author} </p>
           <p className='text-center text-white font-sans'> 
           year of publishing: {book.publishedyear} </p>
            </button>
            
      ))}
      
    </>
  );
};

export default Bookview;
