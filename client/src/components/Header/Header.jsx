import React from 'react'
import './header.css';
import {FaStethoscope} from "react-icons/fa"

const Header = () => {
  return (
    <div className='header'>
        <div className='view'>
            <FaStethoscope/>
            <h3>Welcome</h3>
        </div>
    </div>
  )
}

export default Header