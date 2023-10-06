import React from 'react';
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom'; // Import from 'react-router-dom'
import Bookadd from './components/Bookadd';
import Bookdelete from './components/Bookdelete';
import Bookview from './components/Bookview';
import Home from './components/Home';
import Bookupdate from './components/Bookupdate';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Navbar from './components/Navbar'
import Sample from './components/Sample';

const App = () => {
  const[login,setlogin]=useState(false);
  const[touchid,settouchid]=useState("");

  const bix=()=>{
    setlogin(true);
  }

  const tix=()=>{
    setlogin(false);
  }
 

  const func=(dit)=>{
    settouchid(dit);
    
    
  }
  return (
    <>
    
    
    
    {!login && 
    <Router>
    <Routes>
        <Route exact path = '/' element={<Login bit={bix} />}/>
        <Route exact path = '/login' element={<Login bit={bix} />}/>
        <Route exact path = '/register' element={<Signup/>}/>

    </Routes>
    </Router>
    
    
    } 
    
    {login &&
     <Router>
      <Navbar tix = {tix} />
      <Routes>
        <Route exact path= '/Sample' element={<Sample touch = {touchid} />} />
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/Books' element={<Bookadd/>} />
        <Route exact path='/Booklist' element={<Bookview func={func}/>} />
        <Route exact path='/Bookdel' element={<Bookdelete />} />
        <Route exact path='/Bookupdate' element={<Bookupdate />} />
      </Routes>
    </Router>}
    
      
    </>
  );
};

export default App;