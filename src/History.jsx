import Header from "./Header.jsx";
import { useSearch } from "./SearchContext.jsx";
import { useNavigate } from "react-router-dom";



const History = () => {
    const { fullHistory } = useSearch();

    const navigate = useNavigate();
    return <div>
        <div><Header/></div>
        <div className="bg-orange-100 h-screen" >{fullHistory(navigate)}</div>
    </div>

};



export default History;