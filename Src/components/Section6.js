import React from 'react';
import Image from 'next/image';
import Group7 from '../../public/Assets/Group7.svg'
const Section6 = () => {
    return (
        <div className='flex mx-32 space-x-32 my-20'>
        <div className='w-1/2 mr-10'>
            <div className='w-96 text-[#1A1445] text-4xl font-semibold'>
                <p>Traveling?</p>
                <p> Take the Fun with you </p><br />
            </div>
            <div className="">
                <p>Event Moon is the ultimate tour guide to all things fun in your area!</p><br />
                <p> We have been in the business of connecting people to events for more than 15 years. Our platform has evolved into a massive database, but we have taken the experience to a completely new level.</p>
                <button className='text-white my-6 bg-gradient-to-t from-[#165FFC] to-[#01A9EF] rounded-3xl py-2 px-12'>Download The App</button>
            </div>
        </div>
        <div>
            <Image src={Group7} alt='group7'></Image>
        </div>
    </div>
    );
};

export default Section6;