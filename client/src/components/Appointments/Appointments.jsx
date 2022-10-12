import React,{useState, useEffect} from 'react'
import './appointment.css';

const API_URL = "https://safe-reaches-42746.herokuapp.com/comments";

const Appointments = () => {
    const [appointments, getAppointments] = useState([]);
    useEffect(() => {
        fetch("")
          .then((r) => r.json())
          .then((data) => {
            getAppointments(data);
          });
      }, [appointments]);

      const viewAppointments = appointments.map((appointment) => (
        // <Comment key={appointment.id} appointment={appointment}  />
      ));

  return (
    <div className="appointments">
        <h1>My Appointments</h1>
        <div className='show-data'>
    <h2>Doctor</h2>
    <h2>Appointment Date</h2>
    <h2>City</h2>
    <h2>Action</h2>
        </div>
        <div className="app-container">
      {appointments?.length > 0 ? viewAppointments : <h2>No reviews found</h2>}
    </div>

    </div>
  )
}

export default Appointments