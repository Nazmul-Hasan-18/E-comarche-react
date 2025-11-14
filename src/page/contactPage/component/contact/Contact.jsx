import React from 'react';
import { IoIosMail } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { MdAddLocationAlt } from 'react-icons/md';

const Contact = () => {
    return (
        <div>
            <div className='container mx-auto px-26  items-center'>
                <div className='text-center flex flex-col'>
                     <h2 className="text-4xl font-bold mt-15">Contact<span className="text-[#29a56c]"> With Us </span></h2>
                     <p className='text-gray-600 text-sm mt-1'>Customer service should not be a department. It should be the entire company.</p>
                </div>
                <div className='grid grid-cols-3 gap-10 py-4'>
                    <div className='border flex flex-col items-center  border-gray-300 rounded-md py-7'>
                        <div className='text-3xl border py-3 px-4 rounded-sm border-gray-200 bg-gray-100 text-gray-700'>
                            <IoCall />
                        </div>
                        <h3 className='text-xl font-bold text-gray-600 mt-2'>Contact With Phone</h3> 
                        <p className='mt-1 text-gray-600 text-sm font-semibold'>Phone : 01756-966372</p>
                        <p className='mt-1 text-gray-600 text-sm font-semibold'>Phone : 01322-575923</p>
                    </div>
                    <div className='border flex flex-col items-center  border-gray-300 rounded-md py-7'>
                        <div className='text-3xl border py-3 px-4 rounded-sm border-gray-200 bg-gray-100 text-gray-700'>
                            <IoIosMail />
                        </div>
                        <h3 className='text-xl font-bold text-gray-600 mt-2'>Contact With Email</h3> 
                        <p className='mt-1 text-gray-600 text-sm font-semibold'>Email : nazmulhasan.official@gmail.com</p>
                        <p className='mt-1 text-gray-600 text-sm font-semibold'>Email : bdCalling@gmail.com</p>
                    </div>
                    <div className='border flex flex-col items-center  border-gray-300 rounded-md py-7'>
                        <div className='text-3xl border py-3 px-4 rounded-sm border-gray-200 bg-gray-100 text-gray-700'>
                            <MdAddLocationAlt />
                        </div>
                        <h3 className='text-xl font-bold text-gray-600 mt-2'>Address</h3> 
                        <p className='mt-1 text-gray-600 text-sm font-semibold'>Ruami Mello Moraes Filho, 987 - Salvador - </p>
                        <p className='mt-1 text-gray-600 text-sm font-semibold'>MA, 40352, Brazil.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;