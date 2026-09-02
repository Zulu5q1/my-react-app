import { Link }from "react-router-dom";

const Header = () => {
    return <div className="flex justify-between p-4  text-white font-bold bg-orange-300">

    <div className="flex gap-4">
        <Link to="/" className="hover:cursor-pointer hover:text-orange-500 ">Home</Link>
        <Link to="/results" className="hover:cursor-pointer hover:text-orange-500 ">Results</Link>
    </div>
    <div className="flex gap-4 items-center ">
        <Link to="/history" className="hover:cursor-pointer hover:text-orange-500 ">History</Link>
        <Link to="/about" className="hover:cursor-pointer hover:text-orange-500 ">About </Link>
        <button className=" icon-[heroicons--user-solid] text-xl hover:cursor-pointer hover:text-orange-500 "></button>
    </div>

    </div>
};




export default Header;