import { createContext, useState } from "react";

const HotelContext = createContext();


export const HotelProvider = ({ children }) => {
    const [adults, setAdults] = useState(1); // Default to 1 adult
    const [rooms, setRooms] = useState(1); // Default to 1 room
    const [child, setChild] = useState(0); // Default to 0 children
    return (
        <HotelContext.Provider value={{ adults, setAdults, rooms, setRooms, child, setChild }}>
            {children}
        </HotelContext.Provider>
    );
};
export default HotelContext;