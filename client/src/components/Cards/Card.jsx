import React,{useState} from 'react';
import './cards.css';
import Overlay from '../Overlay/Overlay';

const Card = ({ doctor}) => {
    const{imdbID, Year, Poster, Title, Type } = doctor;
    const [show, setShow] = useState(false);
    const [item, setItem] = useState();
  return (
    <>
    <div className="movie" key={imdbID}
    onClick={() => {
        setShow(true);
        setItem(doctor);
      }}
    >
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      </div>
      
    </div>
    <Overlay show={show} doctor={item} onClose={() => setShow(false)} />
    </>
  );
}

export default Card;