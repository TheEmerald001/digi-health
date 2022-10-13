import React,{useState} from 'react'
import './appoint.css';
import Update from "../Updates/Update";
import { AiFillDelete } from 'react-icons/ai';
import {RiQuillPenFill} from "react-icons/ri";

const Appointment = ({appointment, onDelete, onUpdateAppointment}) => {
    const {id, patient_id, doctor_id,reason } =appointment;
    const [isEditing, setIsEditing] = useState(false);

    function deleteAppointments() {
      fetch(`/appointments/${appointment.id}`, {
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
     reason={ reason}
     onUpdateAppointment={handleUpdateAppointment}
    />) : (
          <div className='contents'>
    <h3>{patient_id}</h3>
    <p>{doctor_id}</p>
    <p>{reason}</p>
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