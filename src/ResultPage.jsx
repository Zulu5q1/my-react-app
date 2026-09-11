import Header from "./Header.jsx";
import { useSearch } from "./SearchContext";




const ResultPage = () => {

      const { results, loading, error } = useSearch();
    
    return <div>
        <div><Header/></div>
        <div>

            {loading && <div className="flex items-center justify-center h-screen">
                <div className="flex items-center justify-center space-x-1.5 p-4">
                    {/* Dot 1 */}
                    <div className="h-4 w-4 animate-bounce rounded-full bg-orange-500 [animation-delay:-0.3s]" />
                    {/* Dot 2 */}
                    <div className="h-4 w-4 animate-bounce rounded-full bg-orange-400 [animation-delay:-0.15s]" />
                    {/* Dot 3 */}
                    <div className="h-4 w-4 animate-bounce rounded-full bg-orange-300" />
                </div>
            </div>}
            {error && <div className=" bg-orange-100 text-red-500 font-bold text-xl justify-center h-screen flex items-center">{error}</div>}
            {!loading && !error && results.length === 0 && <div className=" bg-orange-100 text-orange-500 font-bold text-xl justify-center h-screen flex items-center">No results found.</div>} 
            {results.length > 0 && 
            <div className="w-full px-12 py-4 flex flex-wrap justify-center bg-orange-100">
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