import React,{useState} from 'react';
import './cards.css';
import Overlay from '../Overlay/Overlay';

const Card = ({ doctor}) => {
    const{first_name, last_name,image_url, location } = doctor;
    const [show, setShow] = useState(false);
    const [item, setItem] = useState();
  return (
    <>
    <div className="movie"
    onClick={() => {
        setShow(true);
        setItem(doctor);
      }}
    >
      <div><p>{location}</p></div>
      <div><img src={image_url !== "N/A" ? image_url : "https://via.placeholder.com/400"} alt={first_name} /></div>
      <div>
        <span>{first_name}</span>
        <h3>{last_name}</h3>
      </div>
      
    </div>
    <Overlay show={show} doctor={item} onClose={() => setShow(false)} />
    </>
  );
}

export default Card;