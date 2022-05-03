import React from 'react';
import Link from 'next/link';
import Logoy from '../../public/Assets/Logoy.svg';
import Image from 'next/image';

const Navbar = () => {
    return (
        <div>
            <div className='flex justify-between mx-20'>
            <Image className='m-8' src={Logoy} alt='logoy'/>
            <div className='flex space-x-10 text-[#1A144599] mr-32'>
                <Link href="#"><a className="my-8 font-semibold " >About</a></Link>
                <Link href="#"><a className="my-8 font-semibold "  >Rewards</a></Link>
                <Link href="#"><a className="my-8 font-semibold " >Blog</a></Link>
                <button className='text-white my-6 bg-gradient-to-t from-[#165FFC] to-[#01A9EF] rounded-3xl py-2 px-5'>Dowload The App</button>
            </div>
            </div>
            <div className='h-14 bg-[#F8F8F8] justify flex'>
                <button className='ml-20 mr-10 my-2 rounded-3xl px-5 py-2 bg-white flex text-[#1A1445]'><Image src="../../public/Assets/Localisation.svg" alt="localisation"/>Grand Circle, NY</button>
                <button className=' my-2 rounded-3xl px-5 py-2 bg-white flex text-[#1A1445] '><Image src="../../public/Assets/Calendar.svg" alt="calendar" layout='fill'/>Saturday, 13 January 2021</button>
                <Link href="#"><a className='m-auto ml-10 text-ml text-[#1A144599] '>There are 30 Events Happening in your area</a></Link>
                <Link href="#"><a className='m-auto font-bold flex text-[#165FFC]'>See All Events<Image src="../../public/Assets/arrow.svg" alt="arrow" layout='fill'/></a></Link>
            </div>
        </div>
    );
};

export default Navbar;