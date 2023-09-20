import React from 'react'
import { useState } from 'react'
import './Nav.css'
export default function NewsComp(props) {

  return (

    <div className='Nc'>
        <img src={props.img} width ="200" alt="" />
       <h2>{props.title}</h2>
       <p>{props.dsc}</p>
       <div style={{display: "flex",
    textAlign: "center",
    flexDirection: "column",
    justifyContent: "space-between"}}>
       <span style={{color: "grey"}}>{props.author}</span>
       <span><button><a href={props.url} target='main' >KnowMore</a></button></span>
       </div>
     

    </div>
  )
}
