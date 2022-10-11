import React from 'react'
import {NavLink} from 'react-router-dom';

const Sidebar = ({Children}) => {
    const menuItem =[
        {
            path:'/',
            name:"",
            icon:""
        },
        {
            path:'/',
            name:"",
            icon:""
        },
        {
            path:'/',
            name:"",
            icon:""
        },
        {
            path:'/',
            name:"",
            icon:""
        },
        {
            path:'/',
            name:"",
            icon:""
        }
    ]
  return (
    <div className='container'>
        <div style={{width:"200px"}} className="sidebar">
        {
            menuItem.map((item,index) =>(
                <NavLink>
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