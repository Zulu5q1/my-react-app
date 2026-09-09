import Header from "./Header";
import { useSearch } from "./SearchContext";




const Profile = () => {

    const {searchH, setSearchH} =useSearch()
    return <div>
    <div><Header/></div>
    <div className="flex flex-col items-center justify-center h-screen bg-white text-orange-300 font-bold">
        <div className=" rounded-lg p-8 flex flex-col items-center justify-center">
            <div className="text-4xl text-orange-500 pt-10 font-bold text-center">Profile</div>
            <div>
              <i className="icon-[heroicons--user-circle] text-orange-500 text-9xl mt-10 text-center"></i>
            </div>
            <div className="text-2xl text-orange-500 pt-10 font-bold text-center">User Name</div>
            <div className="text-xl text-orange-500 pt-5 font-bold text-center">
                Email: user@example.com
            </div>
            <div className="text-xl text-orange-500 pt-5 font-bold text-center">
                Member since: January 1, 2024
            </div>
            <div className="text-xl text-orange-500 pt-5 font-bold text-center">
                Total Searches: {searchH.length}
            </div>
            <button className="bg-orange-400 h-8 rounded-md text-white font-bold hover:bg-orange-500 hover:cursor-pointer  flex items-center justify-center mt-10 px-2 text-center" onClick={() => {
                setSearchH([]);
                alert('History cleared!');
            }}>
                Clear Search History
            </button>
        </div>
      </div>
        
    </div>
}





export default Profile;