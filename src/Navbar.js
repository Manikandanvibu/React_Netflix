import React from 'react'
import "./Navbar.css"
import { useState,useEffect } from 'react'

function Navbar() {

    const[show,handleshow]=useState(false)

    useEffect(()=>{
        // to check event happen or not
        window.addEventListener('scroll',()=>{
            if(window.scrollY>450){
                handleshow(true)
            }
            else{
                handleshow(false)
            }
        }) 
    },[])
    console.log(show);

  return (
    <div className='Nav'>
        <img className='logo' src='https://i.postimg.cc/2SKJqfz4/netflix-logo-png-11593869496jqso5gxgsy-removebg-preview.png'></img>
        <h1 className={`logoname ${show && 'nav_black'}`}>Netflix</h1>
    </div>
  )
}

export default Navbar