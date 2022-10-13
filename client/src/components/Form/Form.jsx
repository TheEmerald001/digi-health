import React,{useState} from 'react'
import "./form.css"

const Form = () => {
  const [patient_id, setPatient] = useState("");
  const [doctor_id, setDoctor] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [reason, setReason] = useState("");
  

  function handlePatientChange(event) {
    setPatient(event.target.value);
  }
  function handleDoctorChange(event) {
    setDoctor(event.target.value);
  }

  function handleStartChange(event) {
    setStart(event.target.value);
  }
  function handleReasonChange(event) {
    setReason(event.target.value);
  }
  function handleEndChange(event) {
    setEnd(event.target.value);
  }

  function HandleSubmit(e) {
    e.preventDefault();
    const infoData = {
      patient_id: patient_id,
      doctor_id: doctor_id,
      start: start,
      reason: reason,
      end: end,
    };

    fetch("/appointments",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(infoData),
    });

    setPatient("");
    setDoctor("");
    setStart("");
    setReason("");
    setEnd("");
  }
  return (
    <form className='form' onSubmit={HandleSubmit}>
        <h2>Personal information</h2>
       <div className='personal-info'>
        <div className='form-control'>
        <label>Patient</label>
        <input placeholder='Patient'
         onChange={handlePatientChange}
        value={patient_id}
        required/>
        </div>
        <div className='form-control'>
        <label>Doctor</label>
        <input placeholder='Doctor'
              onChange={handleDoctorChange}
              value={doctor_id}
        required/>
        </div>

        <div className='form-control'>
        <label>Start Time</label>
        <input placeholder='Start Time'
              onChange={handleStartChange}
              value={start}
        />
        </div>
    
        <div className='form-control'>
        <label>Time</label>
        <input placeholder='End Time'
              onChange={handleEndChange}
              value={end}
        />
        </div>
        <div className='form-control'>
        <label>Reason</label>
        <input placeholder='Reason'
              onChange={handleReasonChange}
              value={reason}
        required/>
        </div>
       </div>
    
       <input type="submit" className='subbtn'/>
    </form>
  )
}

export default Form