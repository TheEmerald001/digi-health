import React,{useState} from 'react'
import './appoint.css';
import Update from "../Updates/Update";
import { AiFillDelete } from 'react-icons/ai';
import {RiQuillPenFill} from "react-icons/ri";

const Appointment = ({appointment, onDelete, onUpdateAppointment}) => {
    const {id, food, author, updated_at:updatedAt } =appointment;
    const timestamp = new Date(updatedAt).toLocaleTimeString();
    const [isEditing, setIsEditing] = useState(false);

    function deleteAppointments() {
      fetch(`/${appointment.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((r) => r.json())
        .then(() => onDelete(appointment));
    }
  
    function handleUpdateAppointment(updatedAppointment) {
      setIsEditing(false);
      onUpdateAppointment(updatedAppointment);
    }

  return (
    <>
    {isEditing ? (
    <Update
    id={id}
     author={ author}
     onUpdateAppointment={handleUpdateAppointment}
    />) : (
          <div className='contents'>
    <h3>{food}</h3>
    <p>{timestamp}</p>
    <p> {author}</p>
    <p>Nairobi</p>
    <div className='action'>
        <button className='delete'onClick={deleteAppointments}><AiFillDelete/></button>
        <button className='patch' onClick={() => setIsEditing((isEditing) => !isEditing)}><RiQuillPenFill/></button>
    </div>
    </div>
    )}
  </>
  )
}

export default Appointment;