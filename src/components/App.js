import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../pages/Navbar";
import OffersForYou from "../pages/Flights";
import "../styles/Navbar.css";
import Flights from "../pages/Flights";
import Hotels from "../pages/Hotels";
import Trains from "../pages/Trains";
import Cabs from "../pages/Cabs";
import Bus from "../pages/Bus";
import Holidays from "../pages/Holidays";
import Forex from "../pages/Forex";
import Login from "../pages/Login";

function App() {
  return <div >
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<goibibo />}></Route>
          <Route path="/flights" element={<Flights />}></Route>
          <Route path="/hotels" element={<Hotels />}></Route>
          <Route path="/trains" element={<Trains />}></Route>
          <Route path="/cabs" element={<Cabs />}></Route>
          <Route path="/bus" element={<Bus />}></Route>
          <Route path="/holidays" element={<Holidays />}></Route>
          <Route path="/forex" element={<Forex />}></Route>
          <Route path="/login" element={<Login />}></Route>/
        </Routes>
      </BrowserRouter>
    </>

  </div>;
}

export default App;
