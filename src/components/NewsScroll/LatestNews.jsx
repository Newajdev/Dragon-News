import Marquee from "react-fast-marquee";

const LatestNews = () => {
    return (
        <div className="bg-gray-200 p-4 flex items-center justify-center rounded-sm mt-8">
                    <h1 className="btn btn-error px-8">Latest</h1>
                    <Marquee>
                        <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
                    </Marquee>
                </div>
    );
};

export default LatestNews;