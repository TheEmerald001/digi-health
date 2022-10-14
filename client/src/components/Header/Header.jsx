import React from 'react'
import './header.css';
import {RiLogoutBoxLine} from "react-icons/ri"

const Header = () => {


  return (
    <div className='header'>
        <div className='view'>
          <div className='left'>
            <h3>Welcome</h3>
          </div>
      <button className='right'>
      <h3>Logout</h3>
          <RiLogoutBoxLine/>
      </button>
          
        </div>
    </div>
  )
}

export default Header