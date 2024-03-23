import React from 'react';
import { Link } from "react-router-dom";
import { PiNotebook } from 'react-icons/pi';

const  CreateNoteButton = () => {
    return (
        <Link to="/" className="btn btn-ghost glass my-4 w-30">
            <div className='flex flex-row justify-start items-center'>
                <PiNotebook size={25} className="mr-2" />
                <p>Add Notebook</p>
            </div>
        </Link>
    );
};

export default CreateNoteButton;