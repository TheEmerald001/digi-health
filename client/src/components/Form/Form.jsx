import React from 'react'
import "./form.css"

const Form = () => {
  return (
    <form className='form'>
        <h2>Personal information</h2>
       <div className='personal-info'>
        <div className='form-control'>
        <label>First Name</label>
        <input placeholder='First Name'required/>
        </div>
        <div className='form-control'>
        <label>Last Name</label>
        <input placeholder='Last Name'required/>
        </div>
        <div className='form-control'>
        <label>Phone Number</label>
        <input placeholder='Phone Number'required/>
        </div>
        <div className='form-control'>
        <label>Address</label>
        <input placeholder='Address'required/>
        </div>
       </div>

       <h2>Professional information</h2>
       <div className='professional-info'>
       <div className='form-control'>
        <label>Doctor's Name</label>
        <input placeholder='Doctors Name 'required/>
        </div>
        <div className='form-control'>
        <label>Specialization</label>
        <input placeholder='Specialization'required/>
        </div>
        <div className='form-control'>
        <label>Fee per consultation</label>
        <input placeholder='Fee per consultation'required/>
        </div>
        <div className='form-control'>
        <label>Timing</label>
        <input placeholder='Timing'required/>
        </div>
       </div>
       <input type="submit" className='subbtn'/>
    </form>
  )
}

export default Form