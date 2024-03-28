import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import background from "../assests/background.svg";
import logo from "../assests/logo.png";
// import { Button } from '@mui/material';


function Navbar() {


    return (
        <nav className='navbar'>
            <Link to="/"><img className='logo-img' src={logo} /></Link>
            <ul className='nav-links'>
                <Link to="/flights" className='flights'>
                    <li>Flights</li>
                </Link>
                <Link to="/hotels" className='hotels'>
                    <li>Hotels</li>
                </Link>
                <Link to="/trains" className='trains'>
                    <li>Trains</li>
                </Link>
                <Link to="/cabs" className='cabs'>
                    <li>Cabs</li>
                </Link>
                <Link to="/bus" className='bus'>
                    <li>Bus</li>
                </Link>
                <Link to="/holidays" className='holidays'>
                    <li>Holidays</li>
                </Link>
                <Link to="/forex" className='forex'>
                    <li>Forex</li>
                </Link>
                <Link to="/login" className='login'>
                    <li>Login / Signup</li>
                </Link>
            </ul>

        </nav >









    )
}

export default Navbar;