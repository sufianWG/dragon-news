import React from 'react';
import NavLink from './NavLink';
import { FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className='container mx-auto flex justify-between gap-4 items-center py-2'>
                    <div>Logo</div>
                    <ul className='flex justify-center gap-2 text-lg text-gray-500 items-center'>
                        <NavLink href={"/"}>Home</NavLink>
                        <NavLink href={"/about"}>About</NavLink>
                        <NavLink href={"/career"}>Career</NavLink>
                    </ul>
                    <div className='flex gap-2 justify-center items-center'>
                        <FaUserCircle className='text-5xl' />
                        <Link href={"/login"}>
                            <button className='btn cursor-pointer bg-black px-2 py-1 text-white text-xl font-semibold'> Login </button>
                        </Link>
                    </div>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;