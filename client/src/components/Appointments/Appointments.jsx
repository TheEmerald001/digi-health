import React,{useState, useEffect} from 'react'
import Appointment from "../Appointment/Appointment"
import './appointment.css';


const Appointments = ({onUpdateMessage}) => {
    const [appointments, getAppointments] = useState([]);

    useEffect(() => {
        fetch("https://safe-reaches-42746.herokuapp.com/comments")
          .then((r) => r.json())
          .then((data) => {
            getAppointments(data);
          });
      }, [appointments]);

      const viewAppointments = appointments.map((appointment) => (
        <Appointment key={appointment.id} appointment={appointment} onDelete={handleDeleteAppointments} onUpdateMessage={onUpdateMessage}/>
      ));

      function handleDeleteAppointments(deletedappointments) {
        const updatedAppointments = appointments.filter(
          (appointment) => appointment.id !== deletedappointments.id
        );
        getAppointments(updatedAppointments);
      }

  return (
    <div className="appointments">
        <h1>My Appointments</h1>
        <div className='show-data'>
    <h2>Doctor</h2>
    <h2>Appointment Date</h2>
    <h2>Name(s)</h2>
    <h2>City</h2>
    <h2>Action</h2>
        </div>
        <div className="app-container">
      {appointments?.length > 0 ? viewAppointments : (
      <div className='not-found'>
      <h2>No Appointments found</h2>
      </div>
      )}
    </div>
</div>
  )
}

export default Appointments

