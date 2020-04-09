import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Foot from "./components/Footer"

function App() {
  return (
    <div className="container">
      <Navbar/>,
      <Main/>,
    <Foot/>
    </div>
  );
}

export default App;
