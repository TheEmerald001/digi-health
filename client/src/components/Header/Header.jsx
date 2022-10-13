import React,{useState,useEffect} from 'react'
import './header.css';
import {RiLogoutBoxLine} from "react-icons/ri"

const Header = () => {

  const {user, setUser} = useState(null);

  function handleLogout() {
    fetch("/logout", {method: "DELETE",}).then((res) => {
      if(res.ok){
        setUser(null);
      }
    });
    }
  return (
    <div className='header'>
        <div className='view'>
          <div className='left'>
            <h3>Welcome</h3>
          </div>
      <button className='right' onClick={handleLogout}>
      <h3>Logout</h3>
          <RiLogoutBoxLine/>
      </button>
          
        </div>
    </div>
  )
}

export default Header