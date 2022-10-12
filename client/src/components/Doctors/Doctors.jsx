import React,{useState,useEffect} from 'react'
import './doctors.css';
import Card from "../Cards/Card"
import {BiSearchAlt} from 'react-icons/bi'

const API_URL ="https://www.omdbapi.com?apikey=b6003d8a";

const Doctors = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [doctors, setDoctors] = useState([])

 useEffect(()=>{
  searchDoctor("Batman")
 }) 

  const searchDoctor = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setDoctors(data.Search)
  }


  return (
    <div className='doctors'>
        <div className='search'>

          <input 
          value ={searchTerm}
          onChange ={(e)=> setSearchTerm(e.target.value)}
          placeholder='Search for doctors'/>
          <button className='search-btn' 
          onClick={() =>searchDoctor(searchTerm)}>
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