import React from 'react';
import logo from '@/assets/logo.png'
import Image from 'next/image';
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className=''>
            <div className='w-121.25 h-full relative mx-auto mt-12.5 mb-5'>
                <Image src={logo} alt='logo fill sizes="(max-width:768px) 100vw,33vw' className='object-contain' ></Image>
                <h1 className='text-lg my-5 text-center'>Journalism Without Fear or Favour</h1>
                <p className='text-center text-xl font-medium'>{format(new Date(), "EEEE, MMM, dd, yyyy")} </p>
            </div>
        </div>
    );
};

export default Header;