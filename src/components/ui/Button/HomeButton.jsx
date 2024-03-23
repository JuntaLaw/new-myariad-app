import React from 'react';
import { Link } from "react-router-dom";
import { PiHouseLine } from 'react-icons/pi';

const HomeButton = () => {
    return (
        <Link to="/" className="btn btn-ghost glass my-4 w-30">
            <div className='flex flex-row justify-start items-center'>
                <PiHouseLine size={25} className="mr-2" />
                <p>Back to Home</p>
            </div>
        </Link>
    );
};

export default HomeButton;