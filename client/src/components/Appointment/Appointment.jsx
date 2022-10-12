import React from 'react'

const Appointment = ({appointment}) => {
    const { food, feedback, author, updated_at: updatedAt } =appointment;
    const timestamp = new Date(updatedAt).toLocaleTimeString();

  return (
    <div className='contents'>
    <h3>{food}</h3>
    <p>{feedback}</p>
    <div className="flexInfo">
    <p><strong>- By {author}</strong></p>
    <span className="time">{timestamp}</span>
    </div>
    </div>
  )
}

export default Appointment;