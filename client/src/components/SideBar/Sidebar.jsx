import React from 'react'
import './sidebar.css';
import{FaHospital,FaTwitter,FaFacebookF,FaInstagram,FaPinterest,FaWhatsapp}from "react-icons/fa"
import {NavLink} from 'react-router-dom';

const Sidebar = ({children}) => {
    const menuItem =[
        {
            path:'/',
            name:"Doctors",
            icon:""
        },
        {
            path:'/Gynecologist',
            name:"Gynecologist",
            icon:""
        },
        {
            path:'/Neurologist',
            name:"Neurologist",
            icon:""
        },
        {
            path:'/Cardiologist',
            name:"Cardiologist",
            icon:""
        },
        {
            path:'/Appointments',
            name:"Appointments",
            icon:""
        }
    ]
  return (
    <div className='container'>
        <div className="sidebar">
            <div className='top'>
            <div className='logo'><FaHospital/></div>
            <h1 className='head'>Digi-health</h1>
            </div>

        {
            menuItem.map((item,index) =>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className='icon'>{item.icon}</div>
                    <div className='link_text'>{item.name}</div>
                </NavLink>
            ))
        }
             <div className='contacts'>
            <FaTwitter/>
            <FaFacebookF/>
            <FaInstagram/>
            <FaPinterest/>
            <FaWhatsapp/>
        </div>
        </div>
        <main>{children}</main>
   
    </div>
  )
}

export default Sidebar