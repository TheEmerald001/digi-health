import React,{useState} from 'react'
import './update.css';

const Update = ({id,author,onUpdateAppointment}) => {
    const [messageBody, setMessageBody] = useState(author);

    function handleFormSubmit(e) {
      e.preventDefault();
  
      fetch(`/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            author: messageBody,
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
              value={author}
        required/>
                <input type='update' value='Update' className="btn-block"/>
        </div>

    </form>
  )
}

export default Update