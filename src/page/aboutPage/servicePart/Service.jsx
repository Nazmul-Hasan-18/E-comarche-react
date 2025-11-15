import React from 'react';
import Suport from '../../homePage/supportPage/Suport';

const Service = () => {
    return (
        <div> 
            <div className='container mx-auto flex flex-col items-center'>
                <div className='text-center'>
                    <h2 className="text-4xl font-bold mt-25">Our<span className="text-[#29a56c]"> Service </span></h2>
                    <p className='text-gray-600 text-sm mt-1'>Customer service should not be a department. It should be the entire company.</p>
                </div>
                <div className='mt-[-8px]'>
                    <Suport/>
                </div>
            </div>
        </div>
    );
};

export default Service;