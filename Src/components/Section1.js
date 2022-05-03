import React from 'react';
import Image1 from '../../public/Assets/Image1.svg';
import Image from 'next/image';
const Section1 = () => {
    return (
        <div className='bg-hero m-10 w-1232.27px h-604.73px'>
          <div className='flex space-x-0'>
          <div className='ml-32 '>
           <Image width={400} height={600} src={Image1} alt='image1'/>
          </div>
          <div className=' text-7xl space-y-3 font-semibold mt-20 text-[#1A1445]'>
            <p >Find</p>
            <p className='text-[#165FFC]'>Best Events</p>
            <p>Happening </p>
            <p>In Your Area</p>
          </div>
          </div>
           
        </div>
    );
};

export default Section1;