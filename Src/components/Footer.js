import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../public/Assets/Logo.svg';
import Facebook from '../../public/Assets/Facebook.svg';
import instagram from '../../public/Assets/instagram.svg';
import youtube from '../../public/Assets/youtube.svg';
import twitter from '../../public/Assets/twitter.svg';
const Footer = () => {
    return (
        <div className=' m-28 '>
            <div><Image src={Logo} alt='logo'/></div>
            <div className='space-y-3'>
            <div className='space-x-10 text-[#1A1445]'>
                <Link href="#"><a className=" " >About</a></Link>
                <Link href="#"><a className=" "  >Rewards</a></Link>
                <Link href="#"><a className=" " >Blog</a></Link>
                <Link href="#"><a className=" " >Terms</a></Link>
                <Link href="#"><a className=" " >Privacy & Cookies</a></Link>
            </div>
            <div className='flex space-x-8'>
            <button className=''><Image src={Facebook} alt='facebook'/></button>
            <button className=''><Image src={instagram} alt='instagram'/></button>
            <button className=''><Image src={youtube} alt='youtube'/></button>
            <button className=''><Image src={twitter} alt='twitter'/></button>
            </div>
            <div>
            <a className='m-auto text-sm text-[#1A144599] '>Copyrights © 2020. All Rights Reserved</a>
            </div>
            </div>
            
        </div>
    );
};

export default Footer;