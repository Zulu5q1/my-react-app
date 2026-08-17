
const Header = () => {
    return <div className="flex justify-between p-4  text-white font-bold bg-orange-300">

    <div className="flex gap-4">
        <button className="hover:cursor-pointer hover:text-orange-500 ">Home</button>
        <button className="hover:cursor-pointer hover:text-orange-500 ">Search</button>
    </div>
    <div className="flex gap-4 items-center ">
        <button className="hover:cursor-pointer hover:text-orange-500 ">Settings</button>
        <button className=" icon-[heroicons--user-solid] text-xl hover:cursor-pointer hover:text-orange-500 "></button>
    </div>

    </div>
};




export default Header;