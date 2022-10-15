import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignupForm from "./SignupForm";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
    <div>
    <Routes>
      <Route exact path="/login" element={<Login />} /> 
      <Route exact path="/signup" element={<SignupForm onLogin={setUser}/>} /> 
    </Routes>
    <HomeNavSide user={user} setUser={setUser} />
    </div>
  );
}

export default App;