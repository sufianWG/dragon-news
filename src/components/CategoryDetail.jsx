import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';

const CategoryDetail = ({ newsDetailData }) => {
    console.log(newsDetailData);
    return (
        <div key={newsDetailData._id} className="card bg-base-100 shadow-sm mb-3 p-4">
            <div className="card-body">
                <h2 className="card-title">{newsDetailData.title}</h2>
            </div>
            <figure>
                <div className='relative mx-auto aspect-[16/9] w-full h-full overflow-hidden rounded-md'>
                    <Image src={newsDetailData.image_url} alt={newsDetailData.title} fill className='object-cover' sizes='(max-width: 768px) 100vw, (max-width: 1280px) 100vw'></Image>
                </div>
            </figure>

            <div className='mt-3'>
                <div className=''>
                    {newsDetailData.details}
                </div>
                <Link className='text-orange-500 text-base font-semibold mt-3 block' href={`/category/${newsDetailData.category_id}`}>
                    <button className='py-2 px-3 bg-[#D72050] text-white flex gap-2 items-center cursor-pointer'> <FaArrowLeftLong /> All News In This Category</button>
                </Link>
            </div>
        </div>
    );
};

export default CategoryDetail;