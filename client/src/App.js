import React from "react";
import Header from "./components/Header/Header"
import Sidebar from "./components/SideBar/Sidebar"
import Doctors from "./components/Doctors/Doctors"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Sidebar>
      <Header/>
    <Routes>
      <Route path="/" element ={<Doctors />}/>

    </Routes>
     </Sidebar>
     </BrowserRouter>
    </div>
  );
}

export default App;
