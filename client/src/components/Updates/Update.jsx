import React from 'react'

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
             <div className='form-control'>
        <input placeholder='Name'
              onChange={(e) =>setMessageBody(e.target.value)}
              value={first}
        required/>
        </div>
        <input type='submit' value='Update' className="btn-block"/>
    </form>
  )
}

export default Update