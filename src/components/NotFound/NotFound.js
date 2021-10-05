import React from 'react';
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='notFound'>
            <h1 className='four'>404</h1>
            <h2 className='pageNot'>Page Not Found</h2>
           <button className='btn btn-color'>Back To Home</button>
        </div>
    );
};

export default NotFound;