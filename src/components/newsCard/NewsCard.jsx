
import { useState } from "react";
import { FaBookmark, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, thumbnail_url, details, author, rating, total_view } = news;
    const [bookmark, setbookmark] = useState(false);

    const hendleBookMark = () => {
        setbookmark(!bookmark)

    }
    return (
        <div className="bg-base-100 shadow-sm border-none rounded-xl mb-5">
            <div className="flex justify-between items-center p-4 bg-gray-200 rounded-t-xl mb-5" >
                <div className="flex items-center gap-4">
                    <img className="w-12 h-12 rounded-full" src={author.img} alt="" />
                    <div>
                        <h1 className="font-semibold text-base">{author.name}</h1>
                        <p className="text-sm">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={hendleBookMark} className="text-2xl">{bookmark ? <FaBookmark /> : <FaRegBookmark />}</button>
                    <button className="text-xl"><FaShareAlt /></button>
                </div>
            </div>
            <h2 className="text-xl font-bold leading-9 px-5">{title}</h2>
            <figure className="mt-5 px-5">
                <img className="w-full h-64  rounded-xl"
                    src={thumbnail_url}
                    alt="Shoes" />
            </figure>
            <div className="px-5 mt-8">
                <div className="pb-5 border-b border-gray-200">
                    {details.length > 200 ? <p className="text-base font-normal leading-7 text-justify">{details.slice(0, 200)}<Link className="font-semibold">... Read More</Link></p> : <p>{details}</p>}
                </div>
                <div className="flex py-5 justify-between">
                    <div className="flex gap-4 items-center">
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" aria-label="1 star" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" aria-label="3 star" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" aria-label="4 star" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" aria-label="5 star" />
                        </div>
                        <div ><p className="mt-[5px]">{rating.number}</p></div>
                    </div>
                    <div>
                    <p className="flex items-center text-xl font-semibold gap-3"><FaEye /> {total_view}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NewsCard;