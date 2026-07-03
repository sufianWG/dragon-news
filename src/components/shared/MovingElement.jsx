import { format } from 'date-fns';
import React from 'react';
import Marquee from 'react-fast-marquee';


const MovingElement = () => {
    const news = [
        {
            _id: "1",
            title: "Breaking News: Major Event Unfolds in the City",
        },
        {
            _id: "2",
            title: "Breaking News: New Policy Announced by the Government",
        },
        {
            _id: "3",
            title: "Breaking News: Sports Team Wins Championship",
        },
    ];
    return (
        <div className='container mx-auto'>
            <div className='flex justify-between bg-gray-300 p-4 text-lg font-semibold gap-2 items-center mb-7.5'>
                <button className='bg-[#D72050] px-6 py-4 text-white'>Latest:</button>
                <Marquee pauseOnHover={true} speed={100}>
                    {
                        news.map(n => <span key={n._id}> {n.title}</span>)
                    }
                </Marquee>
            </div>

        </div>
    );
};

export default MovingElement;