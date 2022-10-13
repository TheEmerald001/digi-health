import React from "react";
import{AiFillCloseCircle} from "react-icons/ai"
import "./overlay.css"

const Overlay = ({ show, doctor, onClose,handleClick }) => {
  if (!show) {
    return null;
  }
  let thumbnail = doctor.image_url;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
        <button className="close" onClick={onClose}><AiFillCloseCircle/></button>
          <div className="inner-box">
            <img src={thumbnail} alt={doctor.first_name} />
            <div className="info">
              <h2>{doctor.first_name}</h2>
              <h4>{doctor.last_name}</h4>
              <h3>{doctor.location}</h3>
              <h4 className="description">{doctor.description}</h4>
              <a href={"previewLink"}>
                <button className='flex' onClick={() => handleClick(doctor)}>Book an appointment</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
