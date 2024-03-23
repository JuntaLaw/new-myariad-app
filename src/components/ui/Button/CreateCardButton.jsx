import React from 'react';
import { Link } from "react-router-dom";
import { PiNotePencil } from 'react-icons/pi';

const  CreateCardButton = () => {
    return (
        <Link to="/" className="btn btn-ghost glass my-4 w-30">
            <div className='flex flex-row justify-start items-center'>
                <PiNotePencil size={25} className="mr-2" />
                <p>Add Card</p>
            </div>
        </Link>
    );
};

export default CreateCardButton;