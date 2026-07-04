"use client"
import Link from 'next/link';
import React from 'react';

const CateggoryItems = ({ categories, activeId }) => {
    // console.log(categories);
    // console.log(activeId);
    // console.log(typeof(id));

    return (
        <div className=''>
            <h2 className="font-bold text-lg mb-4">All categories</h2>
            <ul className='space-y-1'>
                {
                    categories.map(cat => {
                        return <li className={`bg-gray-200 py-4 text-xl font-semibold ${activeId === cat.category_id && "bg-gray-500 text-white"}`} key={cat.category_id}>
                            <Link href={`/category/${cat.category_id}`} className='block pl-12.5 pr-17.5'>
                                {cat.category_name}
                            </Link>

                        </li>
                    })
                }
            </ul>

            {/* <Link href={"/"} className='bg-gray-200 py-4 pl-12.5 pr-17.5 text-xl font-semibold mb-1'>{category.category_name}</Link> */}
        </div>
    );
};

export default CateggoryItems;