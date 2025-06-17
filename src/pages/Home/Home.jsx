import { useLoaderData } from "react-router-dom";
import Container from "../../components/Container/Container";
import Header from "../../components/Header/Header";
import LeftNavbar from "../../components/navbar/LeftNavbar";
import RightNavbar from "../../components/navbar/RightNavbar";
import NewsCard from "../../components/newsCard/NewsCard";
import LatestNews from "../../components/NewsScroll/LatestNews";




const Home = () => {
    const Allnews = useLoaderData()
    return (
        <Container>
            <Header></Header>
            <LatestNews></LatestNews>
            <div className="grid grid-cols-4">
                <div>
                    <LeftNavbar></LeftNavbar>
                </div>
                <div className="col-span-2">
                    {
                        Allnews.map(news => (<NewsCard key={news.id} news={news} ></NewsCard>))
                    }
                </div>
                <div>
                    <RightNavbar></RightNavbar>
                </div>
            </div>
        </Container>
    );
};

export default Home;