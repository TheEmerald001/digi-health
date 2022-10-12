import React from "react";
import{AiFillCloseCircle} from "react-icons/ai"
import "./overlay.css"

const Overlay = ({ show, doctor, onClose,handleClick }) => {
  if (!show) {
    return null;
  }
  let thumbnail = doctor.Poster;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
        <button className="close" onClick={onClose}><AiFillCloseCircle/></button>
          <div className="inner-box">
            <img src={thumbnail} alt={doctor.Title} />
            <div className="info">
              <h2>{doctor.Title}</h2>
              <h3>{doctor.Year}</h3>
              <h4>{doctor.Type}</h4>
              <a href={"previewLink"}>
                <button className='flex' onClick={() => handleClick(doctor)}>Book an appointment</button>
              </a>
              <h4 className="description">{doctor.Type}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overlay;
