import Header from "./Header.jsx";
import { useSearch } from "./SearchContext.jsx";
import { useNavigate } from "react-router-dom";



const History = () => {
    
    const { fullHistory, searchH } = useSearch();

    const navigate = useNavigate();
    return <div>
        <div><Header/></div>
        {searchH && searchH.length>0 ? <div className="bg-orange-100 h-screen" >{fullHistory(navigate)}</div> : <div className="bg-orange-100 h-screen flex items-center justify-center text-orange-500 font-bold text-xl">Make Your first search  : ) </div>}
    </div>

};



export default History;