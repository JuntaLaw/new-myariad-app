import React from 'react';
import { Link } from "react-router-dom";
import { PiTrash } from 'react-icons/pi'; 

const TrashButton = () => {
    return (
        <Link to="/" className="btn btn-ghost glass my-4 w-30">
            <div className='flex flex-row justify-start items-center'>
                <PiTrash size={25} className="mr-2" />
                <p>Log Out</p>
            </div>
        </Link>
    );
};

export default TrashButton;