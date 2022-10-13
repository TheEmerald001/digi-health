import React from 'react'
import './sidebar.css';
import{FaHospital,FaTwitter,FaFacebookF,FaInstagram,FaPinterest,FaWhatsapp,FaWpforms}from "react-icons/fa"
import {GiDoctorFace} from "react-icons/gi"

import {IoNewspaperSharp} from "react-icons/io5"
import {MdEmail} from "react-icons/md"
import {NavLink} from 'react-router-dom';

const Sidebar = ({children}) => {
    const menuItem =[
        {
            path:'/',
            name:"View all doctors",
            icon:<GiDoctorFace/>,
        },
        {
            path:'/Form',
            name:"book an appointment",
            icon:<FaWpforms/>
        },
        {
            path:'/Appointments',
            name:"My Appointments",
            icon:<IoNewspaperSharp/>
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
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
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
            <MdEmail/>
        </div>
        </div>
        <main>{children}</main>
   
    </div>
  )
}

export default Sidebar