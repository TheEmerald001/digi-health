import React from 'react'
import './appoint.css';
import { AiFillDelete } from 'react-icons/ai';
import {RiQuillPenFill} from "react-icons/ri";

const Appointment = ({appointment}) => {
    const { food, author, updated_at:updatedAt } =appointment;
    const timestamp = new Date(updatedAt).toLocaleTimeString();

  return (
    <div className='contents'>
    <h3>{food}</h3>
    <p>{timestamp}</p>
    <p> {author}</p>
    <p>Nairobi</p>
    <div className='action'>
        <button className='delete'><AiFillDelete/></button>
        <button className='patch'><RiQuillPenFill/></button>
    </div>
    </div>
  )
}

export default Appointment;