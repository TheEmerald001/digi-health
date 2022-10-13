import React,{useState} from 'react'
import './update.css';

const Update = ({id,reason,onUpdateAppointment}) => {
    const [messageBody, setMessageBody] = useState(reason);

    function handleFormSubmit(e) {
      e.preventDefault();
  
      fetch(`/appointments/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            reason: messageBody,
        }),
      })
        .then((r) => r.json())
        .then((updatedAppointment) => onUpdateAppointment(updatedAppointment));
    }
  return (
    <form className='form' onSubmit={handleFormSubmit}>
             <div className='formControl'>
        <input placeholder='Name'
              onChange={(e) =>setMessageBody(e.target.value)}
              value={messageBody}/>
              <input type='update'  value='Update' className="btn-block"/>
        </div>
    </form>
  )
}

export default Update