import React,{useState,useEffect} from 'react'
import './doctors.css';
import Card from "../Cards/Card"
import {BiSearchAlt} from 'react-icons/bi'


const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    fetch("/doctors")
      .then((r) => r.json())
      .then((data) => {
        setDoctors(data);
      });
  }, []);

//  const searchDoctor = async (first_name) => {
//   const response = await fetch(`${API_URL}`);
//   const data = await response.json();

//   setDoctors(data.Search);
// };


  return (
    <div className='doctors'>
        <div className='search'>
          <input 
          value ={searchTerm}
          onChange ={(e)=> setSearchTerm(e.target.value)}
          placeholder='Search for doctors'/>
          <button className='search-btn' 
          >
            <BiSearchAlt/>
          </button>
        </div>

    {doctors?.length > 0?(
      <div className='containers'>
      {doctors.map((doctor)=>(
        <Card doctor={doctor}/>
      ))}
      </div> 
    ) : (
      <div className='empty'>
      <h2>Please wait...</h2>
      </div>
    )}
        </div>
  )
}

export default Doctors