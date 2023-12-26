import React, { useEffect, useState } from 'react'
import { IoSettings } from "react-icons/io5";

const Header = () => {
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const updateDateTime = () => {
            const today = new Date();
            const formattedDateTime = `${today.toLocaleDateString()} - ${today.toLocaleTimeString()}`;
            setDateTime(formattedDateTime);
        };

        // Update date and time initially
        updateDateTime();

        // Update date and time every second
        const intervalId = setInterval(updateDateTime, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <div className=' shadow-xl p-3 bg-gray-200 flex justify-between' >
            <img  className='h-12' src="https://www.gstatic.com/meet/google_meet_horizontal_wordmark_2020q4_1x_icon_124_40_2373e79660dabbf194273d27aa7ee1f5.png" alt="logo" />
            <ul className= 'pt-1  flex space-x-8 text-xl  ' >
                <li className='font-thin text-gray-500' >{dateTime}</li>
                <li>
                <IoSettings size={30} />                    
                </li>
                <li>
                    <img className='h-8 hover:h-9 cursor-pointer'  src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" />
                </li>
            </ul>
        </div> 
    )
}

export default Header
