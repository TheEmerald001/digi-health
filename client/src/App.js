import React from "react";
import Sidebar from "./Sidebar"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Sidebar>
    <Routes>
      {/* <Route path="/" element ={<Home />}/> */}

    </Routes>
     </Sidebar>
     </BrowserRouter>
    </div>
  );
}

export default App;
