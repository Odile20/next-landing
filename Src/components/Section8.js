import React from 'react';

const Section8 = () => {
    return (
        <div>
            <div className=' text-[#1A1445] text-3xl font-semibold text-center'>
                <p>Epic events and incredible deals straight to your inbox.</p>
            </div>
            <div className='place-content-center mt-3 flex space-x-1'>
                <p>Get notified of all the exciting events happening close to you,</p>
                    <p className='font-semibold'> NO SPAM </p>
                    <p> we promise!</p>
            </div>
            <div className='flex justify-center mt-5'>
               <input className='w-72 h-14 border p-2 rounded-l-md text-[#1A1445]' type="text" placeholder='Enter e-mail address here' />
               <button className='bg-gradient-to-t from-[#165FFC] to-[#01A9EF] p-4 rounded-r-md text-white'> Join the list</button>
            </div> 
        </div>
    );
};

export default Section8;