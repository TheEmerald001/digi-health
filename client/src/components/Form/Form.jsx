import React from 'react'

const Form = () => {
  return (
    <form className='form'>
       <div className='personal-info'>
        <div className='form-control'>
        <label>First Name</label>
        <input placeholder='First Name'/>
        </div>
        <div className='form-control'>
        <label>Last Name</label>
        <input placeholder='Last Name'/>
        </div>
        <div className='form-control'>
        <label>Phone Number</label>
        <input placeholder='Phone Number'/>
        </div>
        <div className='form-control'>
        <label>Time</label>
        <input placeholder='Time'/>
        </div>
        <div className='form-control'>
        <label>Address</label>
        <input placeholder='Address'/>
        </div>

       </div>
       <input type="submit" className='subbtn'/>
    </form>
  )
}

export default Form