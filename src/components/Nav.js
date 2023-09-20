import React from 'react'
import './Nav.css'
import Part from './Part';
import { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
export default function Nav() 
{    const[search,setSearch]= useState('');
const sea=(e)=>{
 setSearch(e.target.value);
//  const filter = object.filter((ev)=> ev.title.toLowerCase().includes(e.target.value.toLowerCase())
}
  return (
<>
    <div className='Nav'>
      <h1 style={{fontSize: "4rem"}}><Link to="/">News</Link></h1>
      <ul>
      <li><Link to="/Science">Science</Link></li>
      <li><Link to="/Entertainment">Entertainment</Link></li>
   
      <li><Link to="/Bussiness">Bussiness</Link></li>
      <li><Link to="/Sports">Sports</Link></li>
      </ul>
      <div className='inp'><input type="search" placeholder='search' onChange={sea} value={search} /></div>

    
    </div>
    <Routes>
       <Route path="/" element={<Part search={search} cat={``}></Part>}/>
          <Route  path="/Science"  element={<Part search={search} cat={`science`}></Part>}/>
      
          <Route path="/Bussiness"  element={<Part search={search} cat={`business`}></Part>}/>
          <Route path="/Entertainment"  element={<Part search={search} cat={`Entertainment`}></Part>}/>
          <Route path="/Sports"  element={<Part search={search} cat={`sports`}></Part>}/>
        </Routes>
    </>
  )
}
