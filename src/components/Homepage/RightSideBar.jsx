import Link from 'next/link';
import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const RightSideBar = () => {
    return (
        <div>
            <div className='py-3 px-2 space-y-3'>
                <h2>Login with</h2>
                <div className='space-y-3'>
                    <Link href={"/"} className='block py-2 px-3 text-blue-400 border-3 border-blue-400 rounded-lg flex gap-2 items-center'>
                        <FaGoogle /> Login with Google
                    </Link>
                    <Link href={"/"} className='block py-2 px-3 text-gray-900 border-3 border-gray-900 rounded-lg flex gap-2 items-center'>
                        <FaGithub /> Login with Github
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RightSideBar;