import React from 'react';

const Section5 = () => {
    return (
        <div>
            <div className='text-[#1A1445] text-4xl font-semibold text-center'>
                <p>Happening Now</p>
            </div>
            <div className='text-center mt-3'>
                <p>Don’t miss out on any event happening around you</p>
            </div>
            <div className='flex space-x-7 justify-center my-5'>
            <div className='bg-hero5 h-72 w-64 rounded-t-md text-white'>
            <div className='pt-56'>
                <p className='text-xl px-3'>Music Concert</p>
                <p className='text-sm px-3'>Saturday 3 Jan 2021</p>
                </div>
            </div>
            <div className='bg-hero6 h-72 w-64 rounded-t-md text-white'>
            <div className='pt-56'>
                <p className='text-xl px-3'>Coporate Event</p>
                <p className='text-sm px-3'>Saturday 3 Jan 2021</p>
                </div>
            </div>
            <div className='bg-hero7 h-72 w-64 rounded-t-md text-white'>
            <div className='pt-56'>
                <p className='text-xl px-3'>Light The Candle</p>
                <p className='text-sm px-3'>Saturday 3 Jan 2021</p>
                </div>
            </div>
            <div className='bg-hero8 h-72 w-64 rounded-t-md text-white'>
                <div className='pt-56'>
                <p className='text-xl px-3'>Rave Event</p>
                <p className='text-sm px-3'>Saturday 3 Jan 2021</p>
                </div>
            </div>
            </div>
            <div className='flex justify-center'>
            <button className='text-white my-6 bg-gradient-to-t from-[#165FFC] to-[#01A9EF] rounded-3xl py-2 px-12 '>Download The App</button>
            </div>
        </div>
    );
};

export default Section5;