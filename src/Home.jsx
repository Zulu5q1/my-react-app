import Header from "./Header.jsx";
import Search from "./Search.jsx";
import Trending from "./Trending.jsx";


const Home = () => {
    return <div className="bg-orange-100 ">
        <Header/>
        <Search/>
        <Trending/>
    </div>
};


export default Home;