import React from 'react'
import './header.css';
import {IoIosContact} from "react-icons/io"

const Header = () => {
  return (
    <div className='header'>
        <div className='view'>
            <IoIosContact/>
            <h3>Welcome</h3>
        </div>
    </div>
  )
}

export default Header