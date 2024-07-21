import React, { useContext } from 'react';
import HotelContext from '../../components/hotel-section/Context';


export default function SetAdultsChildrenRooms() {
    const { adults, setAdults, rooms, setRooms, child, setChild } = useContext(HotelContext);
    const handleIncrementAdults = () => {
        if (adults < 8) setAdults(adults + 1); // Limit to a maximum of 8 adults
    };
    const handleDecrementAdults = () => {
        if (adults > 1) setAdults(adults - 1); // Minimum of 1 adult
    };
    const handleIncrementRooms = () => {
        if (rooms < 8) setRooms(rooms + 1); // Limit to a maximum of 8 rooms
    };
    const handleDecrementRooms = () => {
        if (rooms > 1) setRooms(rooms - 1); // Minimum of 1 room
    };
    const handleIncrementChildren = () => {
        if (child < 8) setChild(child + 1); // Limit to a maximum of 8 children
    };
    const handleDecrementChildren = () => {
        if (child > 0) setChild(child - 1); // Minimum of 0 children
    };
    return (
        <div className='setadultschildandrooms'>
            <div className='setadultschildandroomschild'>
                <div className='setroomsadultchildbox'>
                    <div className='setadultschildandroomschild'>
                        <p className='allRAC'>Rooms</p>
                        <p className='a'>(Max 8)</p>
                    </div>
                    <div className='setadultschildandroomschild c'>
                        <button className='b' onClick={handleDecrementRooms}>-</button>
                        <p className='b'>{rooms}</p>
                        <button className='b' onClick={handleIncrementRooms}>+</button>
                    </div>
                </div>
                <div className='setroomsadultchildbox'>
                    <div className='setadultschildandroomschild'>
                        <p className='allRAC'>Adults</p>
                        <p className='a'>(12+ yr)</p>
                    </div>
                    <div className='setadultschildandroomschild c'>
                        <button className='b' onClick={handleDecrementAdults}>-</button>
                        <p className='b'>{adults}</p>
                        <button className='b' onClick={handleIncrementAdults}>+</button>
                    </div>
                </div>
                <div className='setroomsadultchildbox'>
                    <div className='setadultschildandroomschild'>
                        <p className='allRAC'>Children</p>
                        <p className='a'>(0-12 yr)</p>
                    </div>
                    <div className='setadultschildandroomschild c'>
                        <button className='b' onClick={handleDecrementChildren}>-</button>
                        <p className='b'>{child}</p>
                        <button className='b' onClick={handleIncrementChildren}>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}