import React from "react";
import Header from "./components/Header/Header"
import Sidebar from "./components/SideBar/Sidebar"
import Doctors from "./components/Doctors/Doctors"
import Form from "./components/Form/Form"
import Appointments from "./components/Appointments/Appointments"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Sidebar>
      <Header/>
    <Routes>
      <Route path="/" element ={<Doctors />}/>
      <Route path="/Form" element ={<Form />}/>
      <Route path="/Appointments" element ={<Appointments />}/>

    </Routes>
     </Sidebar>
     </BrowserRouter>
    </div>
  );
}

export default App;
