import React from 'react'
import './doctors.css';
import {BiSearchAlt} from 'react-icons/bi'

const Doctors = () => {
  return (
    <div className='doctors'>
        <div className='search'>
          <input placeholder='Search for doctors'/>
          <button className='search-btn'><BiSearchAlt/></button>
        </div>
    </div>
  )
}

export default Doctors