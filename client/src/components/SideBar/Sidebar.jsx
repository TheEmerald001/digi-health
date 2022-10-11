import React from 'react'
import './sidebar.css';
import {NavLink} from 'react-router-dom';

const Sidebar = ({Children}) => {
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
        {
            menuItem.map((item,index) =>(
                <NavLink to={item.path} key={index} className="link" activeclassName="active">
                    <div className='icon'>{item.icon}</div>
                    <div className='link_text'>{item.name}</div>
                </NavLink>
            ))
        }
        </div>
        <main>{Children}</main>
    </div>
  )
}

export default Sidebar