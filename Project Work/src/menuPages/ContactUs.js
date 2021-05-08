import logo from '../Images/logo.png';
import NavBar from './NavBar';
import React,{useState} from 'react';
import {Contacts} from './Contacts';
import './ContactUs.css';
import Pic from './../Images/profilepic.png'
const ContactUs=()=>{

    const SinglePerson=({P})=>{

        
    const handleEnter=()=>{
        setShow(true);
    }

    const handleLeave=()=>{
        setShow(false);
    }
        const [show,setShow]=useState(false);
        const images = require.context("./Images/", true);
        
        return(
            <div className={show?'contact-display contact':'contact'} 
            onMouseEnter={()=>setShow(true)} 
            onMouseLeave={()=>setShow(false)} >            
            <div>
                    {/* <img src={images(`./${P.person}.png`).default}/> */}
                    <img src={Pic}/>
            </div>
                    <div className={show?'contact-vars-display':'contact-not-display'}>{P.email}</div>
                    <div className={show?'contact-vars-display':'contact-not-display'}>{P.phone}</div>
                    <div>{P.person}</div>
                    <div>{P.title}</div>
            </div>
        )
    }
    const Printer=()=>{
        return(
            <>
        {
            Contacts.map((P)=>{
            return(
                
                <SinglePerson P={P}/>                    
            )
        }
    )
        }
        </>
    )}
    
    return(
        <>  
            <div className='upper-container'>
                <NavBar/>
                <div className='logo'>
                    <img src={logo} alt='Logo of website'/>
                <div className='title'>
                Contact Us
                </div>
                </div>
            </div>
            <div className="inline-contacts">
                    <Printer/>
            </div>
            
        </>
    )
}

export default ContactUs;