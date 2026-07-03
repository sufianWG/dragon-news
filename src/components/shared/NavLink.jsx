"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children, className}) => {
    const currentPath = usePathname()

    const isActive = currentPath === href;
    
    return (
        <Link href={href} className={`${isActive ? "bg-black text-white px-2 py-1 transition-colors duration-500 ease-in-out": ""} ${className}` }>
         {children}
        </Link>
    );
};

export default NavLink;