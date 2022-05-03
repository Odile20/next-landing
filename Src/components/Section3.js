import React from 'react';
import Image from 'next/image';
import XMLID1497 from '../../public/Assets/XMLID1497.svg';
import Photo1 from '../../public/Assets/Photo1.svg';
import Star1 from '../../public/Assets/Star1.svg';
import Star2 from '../../public/Assets/Star2.svg';
import directionlogo from '../../public/Assets/directionlogo.svg'
import Firelogo from '../../public/Assets/FireLogo.svg'
import Link from 'next/link';
const Section3 = () => {
    return (
        <div className='mx-32 mb-40'>
            <div className='w-96 text-gray-800 text-4xl font-semibold'>
                <p>Popular Events</p>
            </div>
            <div  className='h-14 justify flex my-2' >
            <button className='mr-10 my-2 rounded-3xl px-5 py-2 bg-white flex border text-[#1A1445]'><Image src={"../../public/Assets/Localisation.svg"} alt="localisation"/>Grand Circle, NY</button>
            <button className=' my-2 rounded-3xl px-5 py-2 border bg-white flex text-[#1A1445]'><Image src={"../../public/Assets/Calendar.svg"} alt="calendar"/>Saturday, 13 January 2021 <Image src={"../../public/Assets/Pencil.svg"} alt="pencil"/></button>
            </div>
            <div className='flex'>
                <Link href="#"><a className='m-auto font-bold text-[#1660FC] ...'>All</a></Link>
                <Link href="#"><a className='m-auto ml-8 text-ml text-[#1A144599] '>For You</a></Link>
                <Link href="#"><a className='m-auto ml-8 text-ml text-[#1A144599] '>Today</a></Link>
                <Link href="#"><a className='m-auto ml-8 text-ml text-[#1A144599] '>This Weekend</a></Link>
                <Link href="#"><a className='m-auto ml-8 text-ml text-[#1A144599] '>Holiday Events</a></Link>
                <Link href="#"><a className='m-auto ml-8 text-ml text-[#1A144599] '>Free Entry</a></Link>
                <Link href="#"><a className='m-auto ml-8 text-ml text-[#1A144599]'>Music</a></Link>
                <Link href="#"><a className='m-auto ml-8 text-ml text-[#1A144599] '>Food & Drinks</a></Link>
                <Link href="#"><a className='m-auto ml-8 text-ml text-[#1A144599] '>Virtuals Events </a></Link>
               <div>
               <Image className='mt-2' src={XMLID1497} alt='xmlid'/>
              </div>
               </div> 
            <div className='flex space-x-7 justify-center'>
                <div className="pb-5 mt-5 w-64 bg-white border space-y-3 rounded-md" >
                    <div className='bg-hero1 h-40 w-64 rounded-t-md space-y-20'>
                    <button className='bg-gradient-to-t from-[#165FFC] to-[#01A9EF] rounded-3xl px-3 m-3 text-white'>Free</button>
                   <div className=' m-3'>
                   <Image  src={ Star1 } alt='star1'/>
                    <Image src={ Star1 } alt='star1'/>
                    <Image src={ Star1 } alt='star1'/>
                    <Image src={ Star2 } alt='star2'/>
                    <Image src={ Star2 } alt='star2'/>
                   </div>
                    </div>
                    <p className='text-[#165FFC] text-lg  mx-2'>Dance Party Grand Event at New Castle</p>
                    <div className='flex mx-2 text-xs'>
                        <Image src={"../../public/Assets/Localisation.svg"} alt="localisation"/>
                        <p>American Airline Center, Dallas, TX</p>
                    </div>
                    <div className='flex text-[#E85353] mx-2 text-xs'>
                        <Image src="../../public/Assets/Calendar.svg" alt="calendar" layout='fill'/>
                        <p className='' >Fri,Jan 8,2021 5:00 PM CST</p>
                    </div>
                    <div className='flex mx-2 text-xs'>
                        <div>
                        <Image className='' src={ directionlogo } alt='direction'/>
                        </div>
                        <div className='flex '>
                        <p className='ml-3' >20 miles away</p>
                        <Image src="../../public/Assets/Share" alt="share" layout='fill'/>
                        </div>
                        
                    </div>
                </div>
                <div className="pb-5 mt-5 w-64 bg-white border space-y-3 rounded-md" >
                <div className='bg-hero2 h-40 w-64 rounded-t-md space-y-20'>
                    <button className='bg-gradient-to-t from-[#165FFC] to-[#01A9EF] rounded-3xl px-3 m-3 text-white'>$78</button>
                   <div className='m-3 flex space-x-32'>
                       <div>
                        <Image  src={ Star1 } alt='star1'/>
                        <Image src={ Star1 } alt='star1'/>
                        <Image src={ Star1 } alt='star1'/>
                        <Image src={ Star2 } alt='star2'/>
                        <Image src={ Star2 } alt='star2'/>
                       </div>
                       <div >
                       <Image width={30} height={30} src={ Firelogo } alt='firelogo'/>
                       </div>
                   </div>
                    </div>
                    <p className='text-[#165FFC] text-lg  mx-2'>Business Excellence Event at Carlton</p>
                    <div className='flex mx-2 text-xs'>
                        <Image src={"../../public/Assets/Localisation.svg"} alt="localisation"/>
                        <p>American Airline Center, Dallas, TX</p>
                    </div>
                    <div className='flex text-[#E85353] mx-2 text-xs'>
                        <Image src="../../public/Assets/Calendar.svg" alt="calendar" layout='fill'/>
                        <p className='' >Fri,Jan 8,2021 5:00 PM CST</p>
                    </div>
                    <div className='flex mx-2 text-xs'>
                        <div>
                        <Image className='' src={ directionlogo } alt='direction'/>
                        </div>
                        <div className='flex '>
                        <p className='ml-3' >20 miles away</p>
                        <Image src="../../public/Assets/Share.svg" alt="share" layout='fill'/>
                        </div>
                        
                    </div>
                </div>
                <div className="pb-5 mt-5 w-64 bg-white border space-y-3 rounded-md" >
                <div className='bg-hero3 h-40 w-64 rounded-t-md space-y-20'>
                    <button className='bg-gradient-to-t from-[#165FFC] to-[#01A9EF] rounded-3xl px-3 m-3 text-white'>Free</button>
                    <div className='m-3 flex space-x-32'>
                       <div>
                        <Image  src={ Star1 } alt='star1'/>
                        <Image src={ Star1 } alt='star1'/>
                        <Image src={ Star1 } alt='star1'/>
                        <Image src={ Star2 } alt='star2'/>
                        <Image src={ Star2 } alt='star2'/>
                       </div>
                       <div>
                       <Image  width={30} height={30} src={ Firelogo } alt='firelogo'/>
                       </div>
                   </div>
                    </div>
                    <p className='text-blue-600 text-lg  mx-2'>New Year Eve Concert and Dance Party</p>
                    <div className='flex mx-2 text-xs'>
                        <Image src="../../public/Assets/Localisation.svg" alt="localisation" layout='fill'/>
                        <p>American Airline Center, Dallas, TX</p>
                    </div>
                    <div className='flex text-[#E85353] mx-2 text-xs'>
                        <Image src="../../public/Assets/Calendar.svg" alt="calendar" layout='fill'/>
                        <p className='' >Fri,Jan 8,2021 5:00 PM CST</p>
                    </div>
                    <div className='flex mx-2 text-xs'>
                        <div>
                        <Image className='' src={ directionlogo } alt='direction'/>
                        </div>
                        <div className='flex '>
                        <p className='ml-3' >20 miles away</p>
                        <Image src="../../public/Assets/Share.svg" alt="share" layout='fill'/>
                        </div> 
                    </div>
                </div>
                <div className="pb-5 mt-5 w-64 bg-white border space-y-3 rounded-md" >
                <div className='bg-hero4 h-40 w-64 rounded-t-md space-y-20'>
                    <button className='bg-gradient-to-t from-[#165FFC] to-[#01A9EF] rounded-3xl px-3 m-3 text-white'>$29</button>
                   <div className=' m-3'>
                   <Image  src={ Star1 } alt='star1'/>
                    <Image src={ Star1 } alt='star1'/>
                    <Image src={ Star1 } alt='star1'/>
                    <Image src={ Star2 } alt='star2'/>
                    <Image src={ Star2 } alt='star2'/>
                   </div>
                    </div>
                    <p className='text-blue-600 text-lg  mx-2'>Candle Festivals - Light your own candle</p>
                    <div className='flex mx-2 text-xs'>
                        <Image src="../../public/Assets/Localisation.svg" alt="localisation" layout='fill'/>
                        <p>American Airline Center, Dallas, TX</p>
                    </div>
                    <div className='flex text-[#E85353] mx-2 text-xs'>
                        <Image src="../../public/Assets/Calendar.svg" alt="calendar" layout='fill'/>
                        <p className='' >Fri,Jan 8,2021 5:00 PM CST</p>
                    </div>
                    <div className='flex mx-2 text-xs'>
                        <div>
                        <Image className='' src={ directionlogo } alt='direction'/>
                        </div>
                        <div className='flex '>
                        <p className='ml-3' >20 miles away</p>
                        <Image src="../../public/Assets/Share.svg" alt="share" layout='fill'/>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='flex justify-center mt-10'>
            <button className=' h-10 w-80 border m-0 text-[#1A144599]  '> See More</button>
            </div>
                
           
            
        </div>
    );
};

export default Section3;