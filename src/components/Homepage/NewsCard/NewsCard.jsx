import { Rating, Star } from '@smastrom/react-rating';
import Image from 'next/image';
import Link from 'next/link';
import { CiBookmark } from 'react-icons/ci';
import { IoShareSocialOutline } from 'react-icons/io5';

const NewsCard = ({ categoryNews }) => {
    console.log(categoryNews);
    const emptyCategory = categoryNews.length === 0;
    // const rating = 3.5
    // const safeRating = Math.min(Math.max(Number(rating) || 0, 0), 5);
    const starStyles = {
        itemShapes: Star,

        activeFillColor: "#ff7f3f",
        activeStrokeColor: "#ff7f3f",

        inactiveFillColor: "#e5e7eb",
        inactiveStrokeColor: "#e5e7eb",
    };
    return (
        <div>
            <h1 className='text-xl text-gray-950 font-semibold mb-4'>Dragon News Home</h1>
            <div>
                {

                    emptyCategory ? <p className='h-screen flex justify-center items-center text-2xl font-bold'>No News Found in this Category</p> : categoryNews.map(n => {
                        return <div key={n._id} className="card bg-base-100 shadow-sm mb-3">
                            <div className='card-header py-3 px-5 bg-gray-200 flex justify-between rounded-tl-md rounded-tr-md'>
                                <div className='authorinfo flex gap-2 items-center'>
                                    <div className='authorimg'>
                                        <Image src={n.author?.img} width={40} height={40} alt={n.author.name} className='rounded-full'></Image>
                                    </div>
                                    <div className='authorotherinfo'>
                                        <p className='text-base font-semibold'>{n.author?.name}</p>
                                        <span className='text-sm text-gray-500'>{n.author?.published_date}</span>
                                    </div>
                                </div>
                                <div className='sharenews flex gap-2 text-xl items-center'>
                                    <CiBookmark />
                                    <IoShareSocialOutline />
                                </div>
                            </div>
                            <div className="card-body">
                                <h2 className="card-title">{n.title}</h2>
                            </div>
                            <figure>
                                <div className='relative mx-auto aspect-[16/9] w-full h-full max-w-129.5 overflow-hidden rounded-md'>
                                    <Image src={n.image_url} alt={n.title} fill className='object-cover' sizes='(max-width: 768px) 100vw, (max-width: 1280px) 90vw'></Image>
                                </div>
                            </figure>

                            <div className='py-3 px-5'>
                                <div className='line-clamp-3'>
                                    {n.details}
                                </div>
                                <Link className='text-orange-500 text-base font-semibold' href={`/news/${n._id}`}>
                                    Read More
                                </Link>
                                <div className='border-t-1 border-gray-300 my-3'></div>
                                <div className='card-footer flex justify-between rounded-bl-md rounded-br-md'>

                                    <div className='authorinfo '>
                                        <div className='flex items-center gap-2'>
                                            <Rating style={{ maxWidth: 180 }} fractions={10} readOnly value={Math.min(Math.max(n.rating.number || 0, 0), 5)} itemStyles={starStyles} />
                                            <span className="text-xl font-semibold text-gray-600">
                                                {n.rating.number}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='sharenews flex gap-2 text-xl items-center'>
                                        <CiBookmark />
                                        <IoShareSocialOutline />
                                    </div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default NewsCard;