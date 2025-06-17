import { useState } from "react";
import { FaBookmark, FaEye, FaRegBookmark, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const News = () => {
    const [bookmark, setbookmark] = useState(false);
    const Description = 'Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long. Ultimately, a paragraph is a sentence or group of sentences that support one main idea. In this handout, we will refer to this as the “controlling idea,” because it controls what happens in the rest of the paragraph.'
    const hendleBookMark = () => {
        setbookmark(!bookmark)

    }
    return (
        <div className="bg-base-100 shadow-sm border-none rounded-xl">
            <div className="flex justify-between items-center p-4 bg-gray-200 rounded-t-xl mb-5" >
                <div className="flex items-center gap-4">
                    <img src="/src/assets/demo-user.png" alt="" />
                    <div>
                        <h1 className="font-semibold text-base">Awlad Hossain</h1>
                        <p className="text-sm">2022-08-21</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={hendleBookMark} className="text-2xl">{bookmark ? <FaBookmark /> : <FaRegBookmark />}</button>
                    <button className="text-xl"><FaShareAlt /></button>
                </div>
            </div>
            <h2 className="text-xl font-bold leading-9 px-5">Card Title</h2>
            <figure className="mt-5 px-5">
                <img className="w-full h-64  rounded-xl"
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="px-5 mt-8">
                <div className="pb-5 border-b border-gray-200">
                    {Description.length > 200 ? <p className="text-base font-normal leading-7 text-justify">{Description.slice(0, 200)}<Link className="font-semibold">... Read More</Link></p> : <p>{Description}</p>}
                </div>
                <div className="flex py-5 justify-between">
                    <div>
                        <div className="rating">
                            <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" aria-label="1 star" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" aria-label="2 star" defaultChecked />
                            <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" aria-label="3 star" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" aria-label="4 star" />
                            <input type="radio" name="rating-1" className="mask mask-star bg-amber-500" aria-label="5 star" />
                        </div>
                    </div>
                    <div>
                        <p className="flex items-center text-xl font-semibold gap-3"><FaEye /> 455</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default News;