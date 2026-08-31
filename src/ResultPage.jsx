import Header from "./Header.jsx";
import { useSearch } from "./SearchContext";




const ResultPage = () => {

      const { results, loading, error } = useSearch();
    
    return <div>
        <div><Header/></div>
        <div>

            {loading && <div className="text-orange-500 font-bold text-xl justify-center h-screen flex items-center">Loading...</div>}
            {error && <div className="text-red-500 font-bold text-xl justify-center h-screen flex items-center">{error}</div>}
            {!loading && !error && results.length === 0 && <div className="text-orange-500 font-bold text-xl justify-center h-screen flex items-center">No results found.</div>} 
            {results.length > 0 && 
            <div className="w-full px-12 mt-4 flex flex-wrap justify-center">
                {results.map((item, index) => (
                    <a key={index} href={item.link} target="_blank"  className="m-6 rounded-lg px-4 py-2 border border-orange-400 w-70 h-auto hover:bg-orange-300 justify-around flex flex-col items-center">
                        <h3 className="mt-4 text-orange-500 font-bold text-center mb-2">{item.title}</h3>
                        <span className="mt-4 text-orange-500">{item.snippet}</span>
                    </a>
                ))}
            </div> 
            }
            
                
                
        </div>
    </div>
};



export default ResultPage;