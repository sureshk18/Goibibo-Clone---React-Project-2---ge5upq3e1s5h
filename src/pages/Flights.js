import "../styles/Flights.css";
import addvert from "../assests/addvert.jpg";
import background from "../assests/background.svg";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";



const OffersForYou = () => {
    const [userData, setUserData] = useState([]);
    const [showData, setShowData] = useState(false);
    const navigate = useNavigate()

    const Flights = async () => {
        try {
            const response = await axios.get('https://academics.newtonschool.co/api/v1/bookingportals/offers', {
                headers: {
                    projectId: 'ge5upq3e1s5h'
                }
            });
            const json = response.data;
            console.log(json.data.offers);
            setUserData(json.data.offers);
        } catch (err) {
            console.log('Error:', err);
        }

    };
    useEffect(() => {
        Flights()
    }, []);

    const searchFlight = () => {
        // if (showData == true) {
        //     setShowData(false)
        // } else {
        //     setShowData(true)
        // }
        navigate('/searchFlight')
    }

    return (
        <section>
            <div className='flight-container container-margin'>
                <img className="bg-img" src={background} />
                <div className='basic-icon'>
                    <p> Book Domestic and International Flight Tickets</p>
                    <div className='search-container'>
                        <div className='radio-btn'>
                            <div>
                                <input type='radio' name='one-way' id='one-way' />
                                <label for='one-way'>One-way</label>
                            </div>
                            <div>
                                <input type='radio' name='one-way' id='round-trip' />
                                <label for='round-trip'>Round-trip</label>
                            </div>
                            <div>
                                <input type='radio' name='one-way' id='multi-city' />
                                <label for='multi-city'>Multi-city</label>
                            </div>
                        </div>

                        <div className="sc-12foipm-14 lhvXDk">
                            <div className="sc-12foipm-34 iHoHRr">
                                <div className="sc-12foipm-36 hFZOAX">
                                    <div className="sc-12foipm-16 wRKJm fswFld " style={{ width: '260px' }}>
                                        <span className="sc-12foipm-17 eBxhjL fswWidgetLabel">From</span>
                                        <p className="sc-12foipm-20 bhnHeQ">Enter city or airport</p>
                                    </div>
                                </div>

                                <div className="sc-12foipm-34 iHoHRr">
                                    <div className="sc-12foipm-36 jcFcyw">
                                        <div className="sc-12foipm-16 wRKJm fswFld" style={{ width: '260px', paddingLeft: '27px' }}>
                                            <span className="sc-12foipm-17 eBxhjL fswWidgetLabel">To</span>
                                            <p>Enter city or airport</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="sc-12foipm-34 iHoHRr">
                                    <div className="sc-12foipm-16 wRKJm fswFld " style={{ width: '142px' }}>
                                        <span className="sc-12foipm-17 eBxhjL fswWidgetLabel">Departure</span>
                                        <p className="sc-12foipm-18 cTPYom fswWidgetTitle">"21 Mar' 24"
                                            <span className="sc-12foipm-22 cUvQPq fswDownArrow"></span>
                                        </p>
                                        {/* <p className="sc-12foipm-19 heOORq">Thrusday</p> */}
                                    </div>
                                </div>

                                <div className="sc-12foipm-34 iHoHRr">
                                    <div className="sc-12foipm-16 wRKJm fswFld " style={{ width: '142px' }}>
                                        <span className="sc-12foipm-17 eBxhjL fswWidgetLabel"> Return</span>
                                        <p className="sc-12foipm-23 iFkclr">Click to add a return flight for better discounts</p>
                                    </div>
                                </div>

                                <div className="sc-12foipm-34 imEUuQ">
                                    <div className="sc-12foipm-16 wRKJm fswFld" style={{ style: 'flex: 1 1 0%' }}>
                                        <span className="sc-12foipm-17 eBxhjL fswWidgetLabel">Travellers & Class</span>
                                        <p className="sc-12foipm-18 cTPYom fswWidgetTitle">1 Adult
                                            <span className="sc-12foipm-22 cUvQPq fswDownArrow fswDownArrowTraveller"></span></p>
                                        <p className="sc-12foipm-19 heOORq">economy</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <button className="fly flyt flight-search-btn" onClick={searchFlight}>SEARCH FLIGHTS</button>
                    {/* {showData &&
                        <p>Hi, suresh choudhary</p>
                    } */}
                </div>
                <div className="add-first-some">
                    <img className="add_some_img" src={addvert} alt="other-image" />
                </div>
            </div >

            <footer className="footer-cyz">
                <div className="footer-container-main">
                    <div className="footer-container">
                        <div className="footer-first">
                            <h5>OUR PRODUCTS</h5>
                            <li className="footer-para">Domestic Hotels</li>
                            <li className="footer-para">International Hotels</li>
                            <li className="footer-para">Domestic Flights</li>
                            <li className="footer-para">International Flights</li>
                            <li className="footer-para">Multi-City Flights</li>
                            <li className="footer-para">Couple Friendly Hotels</li>
                            <li className="footer-para">Nearby Getaways</li>
                            <li className="footer-para">Bus Booking</li>
                            <li className="footer-para">Cab Booking</li>
                            <li className="footer-para">Airport Cabs Booking</li>
                            <li className="footer-para">Outstation Cabs Booking</li>
                            <li className="footer-para">Train Booking</li>
                            <li className="footer-para">Go Stay</li>
                            <li className="footer-para">Trip Money</li>
                            <li className="footer-para">Goibibo Advertising Solutions</li>
                        </div>
                        <div className="footer-first">
                            <h5>ABOUT US</h5>
                            <li className="footer-para">About Us</li>
                            <li className="footer-para">Investor Relations</li>
                            <li className="footer-para">Management</li>
                            <li className="footer-para">Terms of Services</li>
                            <li className="footer-para">User Agreement</li>
                            <li className="footer-para">Privacy</li>
                            <li className="footer-para">Careers</li>
                            <li className="footer-para">YouTube Channel</li>
                            <li className="footer-para">Technology@Goibibo</li>
                            <li className="footer-para">Customer Support</li>
                            <li className="footer-para">Facebook Page</li>
                            <li className="footer-para">Twitter Handle</li>
                        </div>
                        <div className="footer-first">
                            <h5>TRAVEL ESSENTIALS</h5>
                            <li className="footer-para">PNR Status</li>
                            <li className="footer-para">Offers</li>
                            <li className="footer-para">Airline Routes</li>
                            <li className="footer-para">Train Running Status</li>
                        </div>
                        <div className="footer-first">
                            <h5>MORE LINKS</h5>
                            <li className="footer-para">Cheap Flights</li>
                            <li className="footer-para">Hotels Near Me</li>
                            <li className="footer-para">My Bookings</li>
                            <li className="footer-para">Cancellation</li>
                            <li className="footer-para">My Account</li>
                            <li className="footer-para">Wallet</li>
                            <li className="footer-para">My Account</li>
                        </div>
                    </div>
                    <div className="footer-underline"></div>
                    <div className="footer-content">
                        <div className="footer-bottom-container">
                            <h5 className="footer-heading">Popular Flight Sectors</h5>
                            <p className="footer-para">
                                Kolkata to Delhi Flight | Hyderabad to Delhi Flight | Chennai to Hyderabad Flight | Delhi to Guwahati Flight | Lucknow to Delhi Flight | Nagpur to Mumbai Flight | Ranchi to Delhi Flight | Ahmedabad to Goa Flight | Mumbai to Chandigarh Flight | Pune to Kolkata Flight | Bangalore to Bhubaneshwar Flight | Bangalore to Guwahati Flight | Chennai to Goa Flight | Chennai to Kolkata Flight | Delhi to Jaipur Flight | Delhi to Leh Flight | Hyderabad to Goa Flight | Bangalore to Ranchi Flight | Delhi to Bagdogra Flight | Srinagar to Delhi Flight
                            </p>
                        </div>
                        <div className="footer-bottom-container">
                            <h5 className="footer-heading">Top Routes</h5>
                            <p className="footer-para">
                                Chandigarh to Delhi Flight | Delhi to Bhopal Flight | Delhi to Dehradun Flight | Delhi to Udaipur Flight | Hyderabad to Tirupati Flight | Kolkata to Chennai Flight | Kolkata to Guwahati Flight | Mumbai to Amritsar Flight | Mumbai to Dehradun Flight | Indore to Goa Flight | Jaipur to Delhi Flight | Kolkata to Bagdogra Flight | Patna to Bangalore Flight | Varanasi to Delhi Flight | Ahmedabad to Kolkata Flight | Delhi to Gorakhpur Flight | Guwahati to Kolkata Flight | Indore to Bangalore Flight | Jaipur to Pune Flight | Mumbai to Raipur Flight                            </p>
                        </div>
                        <div className="footer-bottom-container">
                            <h5 className="footer-heading">Popular Domestic Routes</h5>
                            <p className="footer-para">
                                Patna to Kolkata Flight | Ranchi to Bangalore Flight | Patna to Delhi Flight | Bangalore to Goa Flight | Delhi to Ranchi Flight | Pune to Nagpur Flight | Chennai to Coimbatore Flight | Delhi to Srinagar Flight | Goa to Mumbai Flight | Hyderabad to Bangalore Flight | Indore to Delhi Flight | Kolkata to Mumbai Flight | Mumbai to Nagpur Flight | Mumbai to Varanasi Flight | Pune to Goa Flight | Bangalore to Chennai Flight | Bangalore to Jaipur Flight | Chennai to Bangalore Flight | Chennai to Madurai Flight | Delhi to Indore Flight                            </p>
                        </div>
                        <div className="footer-bottom-container">
                            <h5 className="footer-heading">Top Sectors</h5>
                            <p className="footer-para">
                                Delhi to Jammu Flight | Delhi to Varanasi Flight | Hyderabad to Chennai Flight | Hyderabad to Mumbai Flight | Jaipur to Mumbai Flight | Bangalore to Srinagar Flight | Bhopal to Chennai Flight | Chandigarh to Mumbai Flight | Coimbatore to Ahmedabad Flight | Coimbatore to Bangalore Flight | Coimbatore to Mumbai Flight | Delhi to Chandigarh Flight | Delhi to Coimbatore Flight | Delhi to Raipur Flight | Hyderabad to Kolkata Flight | Hyderabad to Vijaywada Flight | Lucknow to Ahmedabad Flight | Madurai to Chennai Flight                            </p>
                        </div>
                        <div className="footer-bottom-container">
                            <h5 className="footer-heading">Top Airline Sectors</h5>
                            <p className="footer-para">
                                Delhi to Goa Indigo Flight | Delhi to Mumbai Indigo Flight | Mumbai to Delhi Air India Flight | Delhi to Mumbai Air India Flight | Delhi to Goa Air India Flight | Mumbai to Delhi Vistara Flight | Bangalore to Delhi Indigo Flight | Delhi to Mumbai Vistara Flight | Delhi to Bangalore Indigo Flight | Mumbai to Delhi Indigo Flight | Delhi to Hyderabad Spicejet Flight | Delhi to Bangalore Air India Flight | Kolkata to Delhi Indigo Flight | Delhi to Kolkata Indigo Flight | Delhi to Patna Indigo Flight | Pune to Delhi Indigo Flight | Kolkata to Bangalore Indigo Flight | Bangalore to Delhi Air India Flight | Bangalore to Mumbai Indigo Flight | Mumbai to Goa Indigo Flight                            </p>
                        </div>
                        <div className="footer-bottom-container">
                            <h5 className="footer-heading">Important Routes</h5>
                            <p className="footer-para">
                                Madurai to Hyderabad Flight | Mumbai to Srinagar Flight | Pune to Ranchi Flight | Raipur to Hyderabad Flight | Raipur to Mumbai Flight | Bhopal to Hyderabad Flight | Bhubaneshwar to Chennai Flight | Chennai to Nagpur Flight | Chennai to Port Blair Flight | Cochin to Chennai Flight | Delhi to Mangalore Flight | Hyderabad to Nagpur Flight | Jammu to Delhi Flight | Kolkata to Aizawl Flight | Lucknow to Hyderabad Flight | Udaipur to Delhi Flight | Agartala to Delhi Flight | Bangalore to Imphal Flight | Imphal to Guwahati Flight | Imphal to Kolkata Flight | Indore to Raipur Flight | Kozhikode to Chennai Flight | Mumbai to Imphal Flight                            </p>
                        </div>
                        <div className="footer-bottom-container">
                            <h5 className="footer-heading">Trending Domestic Routes</h5>
                            <p className="footer-para">
                                Ahmedabad to Mumbai Flight | Bagdogra to Kolkata Flight | Bangalore to Udaipur Flight | Bhopal to Bangalore Flight | Bhubaneshwar to Mumbai Flight | Chandigarh to Chennai Flight | Chennai to Jaipur Flight | Delhi to Vadodara Flight | Goa to Pune Flight | Hyderabad to Coimbatore Flight | Hyderabad to Patna Flight | Jaipur to Bangalore Flight | Lucknow to Kolkata Flight | Mangalore to Bangalore Flight | Mumbai to Coimbatore Flight | Mumbai to Indore Flight | Mumbai to Rajkot Flight | Mumbai to Surat Flight | Mumbai to Vijaywada Flight | Pune to Chennai Flight | Bhubaneshwar to Kolkata Flight | Delhi to Kozhikode Flight | Mumbai to Jodhpur Flight | Ranchi to Mumbai Flight | Vadodara to Chennai Flight                            </p>
                        </div>
                        <div className="footer-bottom-container">
                            <h5 className="footer-heading">New Udaan Sectors</h5>
                            <p className="footer-para">
                                Guwahati to Rupsi Flight | Rupsi to Kolkata Flight | Guwahati to Agartala Flight | Agartala to Dibrugarh Flight | Dibrugarh to Agartala Flight | Agartala to Guwahati Flight | Guwahati to Pasighat Flight | Pasighat to Shillong Flight | Shillong to Pasighat Flight | Pasighat to Guwahati Flight</p>                        </div>
                    </div>
                </div>

            </footer>
        </section >
    )
}

export default OffersForYou;

{/* <div className='App'>
                {userData.map((offers, index) => (
                    <div key={index}>{offers._id} {offers.F1}</div>
                ))}


                https://academics.newtonschool.co/api/v1/bookingportals/offers?filter={"type":"FLIGHTS"}
            </div> */}