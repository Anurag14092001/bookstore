import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';

function Sample(props) {
 const [pod,setpod]=useState("");

 useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/book/${props.touch}`);
      console.log(response.data.data); // Assuming the data you want to display is in response.data
      setpod(response.data.data); // Update pod with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, [props.touch]);
  return (
    <>

     <div>{pod.name}</div>
     <div>{pod.author}</div>
     <div>{pod.publishedyear}</div>
    </>
  )
}

export default Sample