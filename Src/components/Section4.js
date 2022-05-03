import React from 'react';
import Image from 'next/image';
import Group4 from '../../public/Assets/Group4.svg'
const Section4 = () => {
    return (
        <div className='flex mx-32 space-x-32 my-20'>
            <div>
                <Image src={Group4} alt='group4'></Image>
            </div>
            <div className=' w-7/12 mr-10'>
                <div className=' text-[#1A1445] text-4xl font-semibold w-full'>
                    <p>Huge Benefits for Artists, Promoters and Event Goers</p>
                </div><br />
                <div className="">
                    <p>If you are planning an event, this service is also for you!</p><br />
                    <p>The platform allows you to promote your event to a large audience and the more you engage the community with your own stories, recommendations and fun meter ratings, the more exposure you will get for your publications.
</p>
                    <button className='text-white my-6 bg-gradient-to-t from-[#165FFC] to-[#01A9EF] rounded-3xl py-2 px-12'>Download The App</button>
                </div>
            </div>
        </div>
    );
};

export default Section4;